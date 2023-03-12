import React from "react";

import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useGetCivicAuthHeader from "../../civic/hooks/useGetCivicAuthHeader";
import useCreateDidBasedJwt from "../../core/hooks/auth/useCreateDidBasedJwt";

import useGetDefaultDid from "../../core/DID/hooks/useGetDefaultDID";
import { AssistDIDAdapter } from "../../core/DID/AssistDIDAdapter";
import { sessionApi } from "../services/session";
import { selectedEndpoints } from "../endpoints/endpoints";
import { toast } from "react-toastify";
import { ErrorMessage } from "./ErrorMessage";

const baseAxiosInstance = axios.create();

const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: selectedEndpoints.BACKEND }
): BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig["method"];
    data?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
  },
  unknown,
  unknown
> => async ({ url, method, data, headers }) => {
  try {
    const result = await baseAxiosInstance({
      url: baseUrl + url,
      method,
      data,
      headers,
    });
    return { data: result.data };
  } catch (axiosError) {
    let err = axiosError as AxiosError;
    toast.error(
      () => (
        <ErrorMessage
          errorMsg={
            axiosError.response?.data.userMsg || axiosError.message.userMsg
          }
        />
      ),
      { autoClose: false, position: "top-center", className: "toasty-error" }
    );
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    };
  }
};
// ${axiosError.response?.data.userMsg || axiosError.message.userMsg}`, {autoClose: false})

export const backendBaseQuery = axiosBaseQuery();

export const notificationsBaseQuery = axiosBaseQuery({
  baseUrl: selectedEndpoints.NOTIFICATIONS_SERVICE,
});

export const miscApiBaseQuery = axiosBaseQuery({
  baseUrl: selectedEndpoints.UPLOAD_SERVICE,
});

export const linkMetaDataBaseQuery = axiosBaseQuery({
  baseUrl: selectedEndpoints.WEB_SCRAPER_SERVICE,
});

export default () => {
  const currentUser = useSelector((s) => s[sessionApi.reducerPath].currentUser);
  const createDIDBasedJWT = useCreateDidBasedJwt();
  const getDefaultDID = useGetDefaultDid();
  const getCivicAuthHeader = useGetCivicAuthHeader();
  useEffect(() => {
    baseAxiosInstance.interceptors.request.use(
      async (req) => {
        // req.headers["Access-Control-Max-Age"] = 6000;
        if (req.url.includes("trinity")) return;
        if (req.url.includes("enums") || req.url.includes("og")) return req;
        if (req.url.includes(AssistDIDAdapter.TESTNET_RPC_ENDPOINT)) {
          req.headers.Authorization = AssistDIDAdapter.API_KEY;
          return req;
        }
        console.log("INTERCEPTING!!!!", req.url);

        const civicToken = await getCivicAuthHeader();
        const defaultDID = await getDefaultDID();
        let token = null;
        if (token) {
          req.headers["X-JWT-TYPE"] = "CLERK";
          req.headers.Authorization = `Bearer ${token}`;
        } else if (defaultDID && currentUser) {
          const docExistsButNotValid =
            currentUser?.doc && !currentUser.doc.isValid();
          let didDoc = currentUser.doc;
          if (docExistsButNotValid) {
            didDoc = await defaultDID.resolve();
          }
          const didToken = await createDIDBasedJWT(didDoc);
          token = didToken;
          req.headers["X-JWT-TYPE"] = `ELASTOS-DID ${didDoc.subject.repr}`;
          req.headers.Authorization = `Bearer ${token}`;
        } else {
          req.headers["X-JWT-TYPE"] = "CIVIC-DID";
          req.headers.Authorization = `Bearer ${civicToken}`;
        }
        return req;
      },
      (error) => Promise.reject(error)
    );
  }, [currentUser, getCivicAuthHeader]);
};

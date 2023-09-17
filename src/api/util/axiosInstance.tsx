import React from "react";

import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useGetCivicAuthHeader from "../../civic/hooks/useGetCivicAuthHeader";

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
    console.log(err)
    console.log(err.response)
    toast.error(
      () => (
        <ErrorMessage
          errorMsg={
            axiosError.response?.data || axiosError.message
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
  const getCivicAuthHeader = useGetCivicAuthHeader();
  useEffect(() => {
    baseAxiosInstance.interceptors.request.use(
      async (req) => {
        const civicToken = await getCivicAuthHeader();

        if (!civicToken) return req
        req.headers["X-JWT-TYPE"] = "CIVIC-DID";
        req.headers.Authorization = `Bearer ${civicToken}`;
        return req;
      },
      (error) => Promise.reject(error)
    );
  }, [currentUser, getCivicAuthHeader]);
};

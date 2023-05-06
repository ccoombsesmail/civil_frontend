import { toast } from "react-toastify";
import { closeModal } from "../../redux/actions/ui/index.js";
import { addSessionDataDID } from "../../redux/actions/session/index.js";
import { emptySplitApi } from "./base";
interface UserData {
  userId: string;
}

export const usersApi = emptySplitApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserData, UserData>({
      query: (userId) => ({ url: `/users?userId=${userId}`, method: "GET" }),
      providesTags: ["User"],
    }),
    updateUserBioInformation: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/users/bio-experience`,
          method: "PATCH",
          data: body,
        };
      },
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    createUserTag: builder.mutation<any, any>({
      query: (body) => {
        return {
          url: `/users/tag`,
          method: "PUT",
          data: body,
        };
      },
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
    checkIfTagExists: builder.query<UserData, UserData>({
      query: (tag) => {
        return {
          url: `/users/tag-exists?tag=${tag}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserBioInformationMutation,
  useLazyCheckIfTagExistsQuery,
  useCreateUserTagMutation
} = usersApi;

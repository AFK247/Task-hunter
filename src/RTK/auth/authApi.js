import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //register
    register: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
    }),

    //login
    login: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          console.log(err.message);
        }
      },
    }),

    //changePassword
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/users/passwordUpdate",
        method: "PATCH",
        body: data,
      }),
    }),

    getCurrentUser: builder.query({
      query: () => ({
        url: "/users/current",
        method: "GET",
      }),
      providesTags: ["currentUser"],
    }),

    //updateProfile
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/users/profileUpdate",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["currentUser"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useUpdateProfileMutation,
  useGetCurrentUserQuery,
} = authApi;

import { apiSlice } from "../api/apiSlice";
import { getAllTask } from "./taskSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //getSummary
    summary: builder.query({
      query: () => ({
        url: "/tasks/getSummary",
        method: "GET",
      }),
      providesTags: ["dashboard"],
    }),
    getTask: builder.query({
      query: () => ({
        url: "/tasks/getTasks",
        method: "GET",
      }),
      providesTags: ["allTask"],

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(getAllTask(result.data));
        } catch (err) {
          // do nothing
        }
      },
    }),
    getTaskByStatus: builder.query({
      query: (status) => ({
        url: `/tasks/getTasksByStatus/${status}`,
        method: "GET",
      }),
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: "/tasks/createTasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["dashboard"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: newTask } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getTask", undefined, (draft) => {
              //console.log(JSON.stringify(draft));
              draft?.push(newTask);
            })
          );
          dispatch(
            apiSlice.util.updateQueryData("summary", undefined, (draft) => {
              //console.log(JSON.stringify(draft));
              draft?.map((val) => {
                if (val._id === "new") {
                  val.count += 1;
                }
              });
            })
          );
        } catch (error) {
          //console.log(error);
        }
      },
    }),
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/updateTask/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["dashboard"],
      // invalidatesTags: ["summary"],
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedItem } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getTask", undefined, (draft) => {
              let single = draft?.find((item) => item?._id === args?.id);

              single.status = updatedItem?.status;
              single.body = updatedItem?.body;
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/deleteTask/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["dashboard"],
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data: updatedItem } = await queryFulfilled;
          dispatch(
            apiSlice.util.updateQueryData("getTask", undefined, (draft) => {
              draft?.splice(
                draft?.findIndex((item) => item._id === args),
                1
              );
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useSummaryQuery,
  useCreateTaskMutation,
  useGetTaskQuery,
  useGetTaskByStatusQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;

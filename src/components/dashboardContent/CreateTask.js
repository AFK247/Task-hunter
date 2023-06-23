import React, { useEffect } from "react";
import { useCreateTaskMutation } from "../../RTK/CRUD/content";
import Spinner from "../Spinner";
import { toast } from "react-hot-toast";

const CreateTask = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [createTask, { data, isLoading, error, isError }] =
    useCreateTaskMutation();

  useEffect(() => {
    if (data) {
      toast.success("Task Added Successfully");
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [data, isError, error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.task.value;
    const body = form.details.value;

    createTask({
      title,
      body,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center row w-75">
      <div className="col-12 col-lg-8 col-sm-12 col-md-8  p-2 w-50">
        <div className="card">
          <div className="card-body">
            <h2>Create New Task</h2>
            {isLoading ? (
              <Spinner />
            ) : (
              <form onSubmit={handleSubmit} className="mb-md-2 mt-md-2 ">
                <p className="text-white-50 mb-5">
                  Log In with Email and Password!
                </p>

                <div className="form-outline form-white mb-4">
                  <input
                    placeholder="Task Name"
                    type="text"
                    name="task"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline form-white mb-4">
                  <textarea
                    placeholder="Task Description"
                    type="text"
                    name="details"
                    className="form-control form-control-lg"
                  />
                </div>
                <button
                  className="btn btn-outline-warning mb-2 px-4"
                  type="submit"
                >
                  Create
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;

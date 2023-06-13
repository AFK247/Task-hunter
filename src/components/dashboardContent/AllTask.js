import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../assets/baseURL/baseURL";
import {
  useDeleteTaskMutation,
  useGetTaskQuery,
  useUpdateTaskMutation,
} from "../../RTK/CRUD/content";
import { useEffect } from "react";
import Spinner from "../Spinner";

const AllTask = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [details, setDetails] = useState("");

  const [fillterTasks, setFilterTasks] = useState(tasks);

  const { data, isLoading, isError, error } = useGetTaskQuery();

  const [
    updatetask,
    { data: updateData, isError: updateIsError, error: updateError },
  ] = useUpdateTaskMutation();

  const [
    deleteTask,
    {
      data: deleteData,
      error: deleteError,
      isError: deleteIsError,
      isLoading: deleteLoading,
    },
  ] = useDeleteTaskMutation();

  useEffect(() => {
    if (updateData) {
      toast.success("Task Updated Successfully");
    } else if (updateIsError) {
      toast.error(updateError?.data?.message);
    }
  }, [updateData, updateError, updateIsError]);

  useEffect(() => {
    if (deleteData) {
      toast.success("Task Deleted Successfully");
    } else if (deleteIsError) {
      toast.error(deleteError?.data?.message);
    }
  }, [deleteData, deleteError, deleteIsError]);

  function handleDate(event) {
    event.preventDefault();
    const form = event.target;
    const ini = form.initial.value;
    const initial = new Date(ini).getTime();
    const fin = form.final.value;
    const final = new Date(fin).getTime();

    let temp = [];
    tasks?.map((task) => {
      let newDate = new Date(task.createdAt).toLocaleDateString();
      let date = new Date(newDate).getTime();

      if (date >= initial - 86400000 && date <= final) {
        temp.push(task);
      }
    });
    setFilterTasks(temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const status = form.select.value;
    const body = form.details.value;
    const id = details._id;

    console.log();

    updatetask({
      id,
      data: {
        status,
        body,
      },
    });
  }

  function handleDelete(id) {
    console.log(id);
    deleteTask(id);
  }

  return (
    <div className="content-body container-fluid m-4">
      <div className="row p-0 m-0">
        <div className="my-3">
          <h5>All Task</h5>
        </div>

        <form onSubmit={handleDate} className="d-flex mb-4">
          <div className="col-4">
            <label>Start Date</label>
            <input name="initial" type="date" className="form-control" />
          </div>

          <div className="col-4 mx-4">
            <label>End Date</label>
            <input name="final" type="date" className="form-control" />
          </div>

          <div className="col-4">
            <button type="submit" className="btn btn-primary mt-4 ms-4">
              Filter
            </button>
          </div>
        </form>
      </div>
      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={handleSubmit} className="m-4">
                <label className="m-4 fs-6">Details</label>
                <textarea
                  defaultValue={details.body}
                  name="details"
                  type="text"
                />
                <br></br>
                <label className="m-4 fs-6">Role</label>
                <select className="p-2" name="select">
                  <option
                    selected={details.status === "new"}
                    name="new"
                    value="new"
                  >
                    New
                  </option>
                  <option
                    selected={details.status === "complete"}
                    name="complete"
                    value="complete"
                  >
                    Complete
                  </option>
                  <option
                    selected={details.status === "pending"}
                    name="pending"
                    value="pending"
                  >
                    Pending
                  </option>
                  <option
                    selected={details.status === "cancelled"}
                    name="cancelled"
                    value="cancelled"
                  >
                    Cancelled
                  </option>
                </select>
                <br></br>

                <button
                  className="btn btn-primary my-3 ms-4"
                  type="submit"
                  data-bs-dismiss="modal"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-cols-3 p-4 gap-4">
        {deleteLoading ? (
          <Spinner />
        ) : (
          data?.map((task) => {
            let newDate = new Date(task.createdAt).toLocaleDateString();

            return (
              <div
                style={{ width: "350px" }}
                class="col border rounded shadow-lg p-4"
              >
                <div class="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 class="card-title">{task.title}</h5>
                    <h6 class="bg-info rounded ms-3 px-1 text-light">
                      {task.status}
                    </h6>
                  </div>
                  <p class="card-text">{task.body}</p>
                  <div className="d-flex gap-3">
                    <div class="card-text">
                      <small class="text-muted">{newDate}</small>
                    </div>

                    <div class="card-text">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="icon-nav text-primary mx-4 "
                        class="rounded"
                        onClick={() => {
                          setDetails(task);
                        }}
                      >
                        Edit
                      </button>
                    </div>

                    <div class="card-text">
                      <button
                        className="icon-nav text-primary mx-4 "
                        class="rounded"
                        onClick={() => {
                          handleDelete(task._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllTask;

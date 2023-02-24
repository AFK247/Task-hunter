import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { BaseURL } from "../../assets/baseURL/baseURL";

const CreateTask = () => {
  const accessToken = localStorage.getItem("accessToken");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.task.value;
    const body = form.details.value;
    console.log(title, body);

      fetch(`${BaseURL}/task/createTask`,
       {
        method: "POST",
        body: JSON.stringify({
          title,
          body
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          toast.success("Task Created Successfully");
          form.reset();
    
        })
        .catch((error) => {
          console.error("Error:", error);
        });

    
  };
  
  return (
    <div className="d-flex justify-content-center row w-50">
      <div className="col-12 col-lg-8 col-sm-12 col-md-8  p-2 w-50">
        <div className="card">
          <div className="card-body">
            <h4>Create New Task</h4>
            <form onSubmit={handleSubmit} className="mb-md-2 mt-md-2 ">
                    <h2 className="fw-bold mb-2 text-uppercase">New Task</h2>
                    <p className="text-white-50 mb-5">
                      Log In with Email and Password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        required
                        placeholder="Task Name"
                        type="text"
                        name="task"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <textarea
                        required
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;

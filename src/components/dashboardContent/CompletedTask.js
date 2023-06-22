import React, { useEffect, useState } from "react";
import { BaseURL } from "../../assets/baseURL/baseURL";
import { useGetTaskByStatusQuery } from "../../RTK/CRUD/content";
import Spinner from "../Spinner";

const CompletedTask = () => {
  const { data, isLoading, isError, error } =
    useGetTaskByStatusQuery("complete");

  return (
    <div className="content-body container-fluid m-4">
      <div className="row p-0 m-0">
        <div className="col-12 col-md-3 col-lg-3 px-3">
          <h5>Task Completed</h5>
        </div>
      </div>
      <div class="row row-cols-3 p-4 gap-4">
        {isLoading ? (
          <Spinner />
        ) : data.length !== 0 ? (
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
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No Data</h3>
        )}
      </div>
    </div>
  );
};

export default CompletedTask;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BaseURL } from "../../assets/baseURL/baseURL";
import { useGetTaskByStatusQuery } from "../../RTK/CRUD/content";

const NewTask = () => {
  const { data, isLoading, isError, error } = useGetTaskByStatusQuery("new");

  return (
    <div className="content-body container-fluid m-4">
      <div className="row p-0 m-0">
        <div className="col-12 col-md-3 col-lg-3 px-3">
          <h5>New Task</h5>
        </div>
      </div>

      <div className="row p-0 m-0">
        <div className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
          {data?.map((task) => {
            return (
              <div className="card h-50">
                <div className="card-body">
                  <h6 className="animated fadeInUp">{task.title}</h6>
                  <p className="animated fadeInUp">{task.body}</p>
                  <p className="m-0 animated fadeInUp p-0">
                    {task.createdAt}

                    <a className="badge float-end bg-info">{task.status}</a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewTask;

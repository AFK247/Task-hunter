import React, { useEffect, useState } from "react";
import { BaseURL } from "../../assets/baseURL/baseURL";

const NewTask = () => {
  const accessToken = localStorage.getItem("accessToken");

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    fetch(`${BaseURL}/task/selectTaskByStatus/new`, {
      method: "GET", // or 'PUT'
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setTasks(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },[])

  return (
    <div className="content-body container-fluid m-4">
      <div className="row p-0 m-0">
        <div className="col-12 col-md-3 col-lg-3 px-3">
          <h5>New Task</h5>
        </div>
        <div className="col-12 col-md-3 col-lg-5 px-3">
          <div className="row">
            <div className="col-8">
              <input type="date" className="form-control" />
            </div>
            <div className="col-4">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
        <div className="col-12 float-end col-md-4 col-lg-4 px-2">
          <div className="row">
            <div className="col-8">
              <input className="form-control w-100" />
            </div>
            <div className="col-4">
              <button className="btn btn-primary w-100">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row p-0 m-0">
        <div className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
        {tasks.map((task) => {
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

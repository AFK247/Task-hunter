import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BaseURL } from "../../assets/baseURL/baseURL";
import { setLoading } from "../../redux/state/LoadingSlice";
import DashSpinner from "./DashSpinner";

const Content = () => {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    // dispatch(setLoading(true));
    fetch(`${BaseURL}/task/dashboardSummary`, {
      method: "GET", // or 'PUT'
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {

        // dispatch(setLoading(false));
        console.log("Success:", data);
        setTasks(data);
      })
      .catch((error) => {
        console.error("Error:", error);

        // dispatch(setLoading(false));
      });
  },[])

    

  return (
    <div className="content container m-4">
      <div className="container">
        <div className="row">

          {
            tasks.length===0?
              
            <h4>No data...</h4>
            :
          tasks.map((task) => {
            return (
              <div className="col-12 col-lg-3 col-sm-6 col-md-3  p-2">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="animated fadeInUp">{task._id}</h5>
                    <h6 className="text-secondary animated fadeInUp">{task.count}</h6>
                  </div>
                </div>
              </div>
            );
          })
          }

        </div>
      </div>
    </div>
  );
};

export default Content;

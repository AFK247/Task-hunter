import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../assets/baseURL/baseURL";


const AllTask = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate=useNavigate();
  const [tasks, setTasks] = useState([]);
  const [ID, setID] = useState(null);
  console.log(ID);

  const [fillterTasks, setFilterTasks] = useState(tasks);

  function handleID(){
    setID(ID)
  }
  
  useEffect(() => {
    fetch(`${BaseURL}/task/selectTask`, {
      method: "GET", // or 'PUT'
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        setTasks(data);
        setFilterTasks(data)
      })
      .catch((error) => {
        console.error("Error:", error);

      });
  }, []);

  function handleDate(event) {
    event.preventDefault();
    const form = event.target;
    const ini=form.initial.value;
    const initial=new Date(ini).getTime();
    const fin=form.final.value;
    const final=new Date(fin).getTime();


    console.log(initial,final);

    let temp=[];
    tasks?.map((task) => {
      let newDate = new Date(task.createdAt).toLocaleDateString();
      let date = new Date(newDate).getTime();
      
            if((date>=initial-86400000) && (date<=final)){
                temp.push(task);
                console.log(date);
            }
    })
    console.log(temp);
    setFilterTasks(temp);

  }

  // body: "Coding day and night"
  // createdAt: "2023-02-22T14:02:38.955Z"
  // status: "new"
  // title: "Code"
  // updatedAt: "2023-02-23T09:53:23.671Z"
  // userId: "asif"
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const status = form.select.value;
    console.log(event.target);

    // fetch(`${BaseURL}/task/updateTask/${ID}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({
    //     status,
    //   }),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     toast.success(data.message);
    //     if(status==="new"){
    //       navigate("/dashboard/newTask")
    //     }
    //     else if(status==="complate"){
    //       navigate("/dashboard/completedTask")
    //     }
    //     else if(status==="pending"){
    //       navigate("/dashboard/pendingTask")
    //     }
    //     else if(status==="canceled"){
    //       navigate("/dashboard/cancelledTask")
    //     }

        

    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     toast.error(error.message);
    //   });
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
            <button type="submit" className="btn btn-primary mt-4 ms-4">Filter</button>
          </div>
        </form>
      </div>

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
                        
                        <form
                          onSubmit={handleSubmit}
                          className="m-4"
                        >
                          <label className="m-4 fs-5">Select Role</label>
                          <select className="p-2" name="select">
                            <option name="new" value="new">
                              new
                            </option>
                            <option name="complate" value="complate">
                              complate
                            </option>
                            <option name="pending" value="pending">
                              pending
                            </option>
                            <option name="canceled" value="canceled">
                              canceled
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

      <div className="">
        <div className="col-4 p-2">
          {fillterTasks?.map((task) => {
            let newDate = new Date(task.createdAt).toLocaleDateString();

            return (
              <div key={task._id} className="card h-50">
                <div className="card-body">
                  <h6 className="animated fadeInUp">{task.title}</h6>
                  <p className="animated fadeInUp">{task.body}</p>
                  <p className="m-0 animated fadeInUp p-0">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                    </svg>
                    {newDate}
                    <a
                      onClick={setID(task._id)}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="icon-nav text-primary mx-4 "
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                      </svg>
                    </a>
                    <a className="icon-nav text-danger mx-1">
                      
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                      </svg>
                    </a>
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

export default AllTask;

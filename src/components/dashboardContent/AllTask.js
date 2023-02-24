import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../assets/baseURL/baseURL";

const AllTask = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const [fillterTasks, setFilterTasks] = useState(tasks);

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
        setFilterTasks(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  function handleDate(event) {
    event.preventDefault();
    const form = event.target;
    const ini = form.initial.value;
    const initial = new Date(ini).getTime();
    const fin = form.final.value;
    const final = new Date(fin).getTime();

    console.log(initial, final);

    let temp = [];
    tasks?.map((task) => {
      let newDate = new Date(task.createdAt).toLocaleDateString();
      let date = new Date(newDate).getTime();

      if (date >= initial - 86400000 && date <= final) {
        temp.push(task);
        console.log(date);
      }
    });
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
    const ID=localStorage.getItem("ID");
    console.log(status,ID);

    fetch(`${BaseURL}/task/updateTask/${ID}`, {
      method: "PATCH",
      body: JSON.stringify({
        status,
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
        toast.success(data.message);
        if(status==="new"){
          navigate("/dashboard/newTask")
        }
        else if(status==="complate"){
          navigate("/dashboard/completedTask")
        }
        else if(status==="pending"){
          navigate("/dashboard/pendingTask")
        }
        else if(status==="canceled"){
          navigate("/dashboard/cancelledTask")
        }

      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(error.message);
      });
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

        <div class="row row-cols-3 p-4 gap-4">
          {fillterTasks?.map((task) => {
            let newDate = new Date(task.createdAt).toLocaleDateString();

            return (
              
              <div style={{width:"350px"}} class="col border rounded shadow-lg p-4">
                <div class="card-body">
                  <h5 class="card-title">{task.title}</h5>
                  <p class="card-text">
                    {task.body}
                  </p>
                  <div className="d-flex gap-3">
                  <div class="card-text">
                    <small class="text-muted">{newDate}</small>
                  </div>

                  <div class="card-text">
                    <button data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="icon-nav text-primary mx-4 "
                       class="rounded"
                      onClick={()=>localStorage.setItem("ID",task._id)}

                       >
                        Edit
                        </button>
                  </div>

                  <div class="card-text">
                    <p class="bg-info rounded ms-5 px-1 text-light">{task.status}</p>
                  </div>
                  </div>
                  
                </div>
              </div>
            );
          })}
  
      </div>
    </div>
  );
};

export default AllTask;

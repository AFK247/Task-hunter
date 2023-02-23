import React from "react";

const CreateTask = () => {
  return (
    <div className="d-flex justify-content-center row w-50">
      <div className="col-12 col-lg-8 col-sm-12 col-md-8  p-2 w-50">
        <div className="card">
          <div className="card-body">
            <h4>Create New Task</h4>
            <input
              placeholder="Task Name"
              className="form-control animated fadeInUp"
              type="text"
            />
            <br></br>
            <textarea
              rows="5"
              placeholder="Task Description"
              className="form-control animated fadeInUp"
              type="text"
            ></textarea>
            <br />
            <button className="btn float-end btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;

import React from "react";

const CreateTask = () => {
  return (
    <div class="d-flex justify-content-center row w-50">
      <div class="col-12 col-lg-8 col-sm-12 col-md-8  p-2 w-50">
        <div class="card">
          <div class="card-body">
            <h4>Create New Task</h4>
            <input
              placeholder="Task Name"
              class="form-control animated fadeInUp"
              type="text"
            />
            <br></br>
            <textarea
              rows="5"
              placeholder="Task Description"
              class="form-control animated fadeInUp"
              type="text"
            ></textarea>
            <br />
            <button class="btn float-end btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;

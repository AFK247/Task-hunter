import axios from "axios";
import React from "react";

import { Link } from "react-router-dom";
let BaseURL="https://hello-production-7b72.up.railway.app/api/v1"

//Registration
const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const userName = form.userName.value;
    const phone = form.phone.value;

    axios.post(`${BaseURL}/user/registrationUser`, {
      name,
      userName,
      email,
      phone,
      password
      })
      .then(function (response) {
        console.log(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    
  };


  return (
    <div>
      <section className="vh-90 gradient-custom">
        <div className="container py-3 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <form onSubmit={handleSubmit} className="mb-md-2 mt-md-2 ">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Registration
                    </h2>

                    <div className="form-outline form-white mb-4">
                      <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        placeholder="User Name"
                        type="text"
                        name="userName"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        placeholder="Phone"
                        type="number"
                        name="phone"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <button
                      className="btn btn-outline-warning px-4"
                      type="submit"
                    >
                      Register
                    </button>

                    <p className="small mb-5 pb-lg-2">
                      Already Registered? Go to{" "}
                      <Link className="text-primary fs-5" to="/">
                        Log In Page
                      </Link>
                    </p>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

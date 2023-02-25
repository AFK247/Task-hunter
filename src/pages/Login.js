import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BaseURL } from "../assets/baseURL/baseURL";
// import { setLoading } from "../redux/state/LoadingSlice";

//Login Page

const Login = () => {
  const navigate=useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // dispatch(setLoading(true));

    axios
      .post(`${BaseURL}/user/loginUser`, {
        email,
        password,
      })
      .then(function (response) {
        console.log(response.data);

        if (response.data.user) {
          toast.success("Login Successfull");
          const name = response.data.user.name;
          const email = response.data.user.email;
          const phone = response.data.user.phone;
          const photo = response.data.user.photo;
          const userName = response.data.user.userName;
          const accessToken = response.data.accessToken;
          // console.log(photo);
          
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("phone", phone);
          localStorage.setItem("photo", photo);
          localStorage.setItem("userName", userName);
          localStorage.setItem("accessToken", accessToken);
          
          // window.location.href("/dashboard");
          
          // dispatch(setLoading(false));
          navigate("/dashboard");
        }
      })
      .catch(function (error) {
        console.log(error);
        // dispatch(setLoading(false));
        toast.error(error.message);
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
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Log In with Email and Password!
                    </p>

                    <div className="form-outline form-white mb-4">
                      <input
                        required
                        placeholder="Email"
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        required
                        placeholder="Password"
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <button
                      className="btn btn-outline-warning mb-2 px-4"
                      type="submit"
                    >
                      Login
                    </button>
                    {/* <p className='text-danger text-center'>"Eror"</p>  */}
                    <p className="small pb-lg-2">
                      <Link
                        className="fs-6 mt-1 text-decoration-none"
                        to="/forgetPassword"
                      >
                        Forget Password?
                      </Link>
                    </p>

                    <p className="small pb-lg-2">
                      Don't Have an Account{" "}
                      <Link className="fs-5" to="/register">
                        Register Now
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

export default Login;

import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../RTK/auth/authApi";
import { toast } from "react-hot-toast";
import Spinner from "../components/Spinner";

const Login = () => {
  const [login, { data, isLoading, isError, error, isSuccess }] =
    useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.accessToken && data?.user) {
      navigate("/dashboard");

      toast.success("Login Successful");
    } else if (isError) {
      toast.error(error?.data?.message);
    }
  }, [data, isError, error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // dispatch(setLoading(true));
    login({ email, password });
  };

  return isSuccess && isLoading ? (
    <Spinner />
  ) : (
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
                  {isLoading ? (
                    <Spinner />
                  ) : (
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
                      {/* <p className="small pb-lg-2">
                      <Link
                        className="fs-6 mt-1 text-decoration-none"
                        to="/forgetPassword"
                      >
                        Forget Password?
                      </Link>
                    </p> */}

                      <p className="small pb-lg-2">
                        Don't Have an Account{" "}
                        <Link className="fs-5" to="/register">
                          Register Now
                        </Link>
                      </p>
                    </form>
                  )}
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

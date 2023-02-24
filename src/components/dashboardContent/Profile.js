import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../assets/baseURL/baseURL";
import { userInfo } from "../../redux/state/UserSlice";

const Profile = () => {

  const accessToken = localStorage.getItem("accessToken");

  const navigate=useNavigate();
  const user = useSelector((state) => state.user.value);
  const { email, realName, userName, photo, phone } = user;
  // console.log(user);
  const picture=localStorage.getItem("photo");
  const [img, setImg] = useState(picture)
  const [error, setError] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfo());
  }, []);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const photo = img;
    const name = form.name.value;
    const phone = form.mobile.value;
    


    fetch(`${BaseURL}/user/updateUser`, {
      method: "PATCH",
      body: JSON.stringify({
        name,
        phone,
        photo,
        email,
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
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("phone", phone);
          localStorage.setItem("photo", photo);
          dispatch(userInfo());

      })
      .catch((error) => {
        console.error("Error:", error);
          toast.error(error.message);
      });
  };

  function encodeImageFileAsURL(e) {
    var file = e.target.files[0];
    console.log(file.size);
    if(file.size>32000){
      setError("Image is too large")
    }
    else{
      var reader = new FileReader();
      reader.onloadend = function() {
        setImg(reader.result)
      }
      reader.readAsDataURL(file);
    }
  
  }

  return (
    <div className="card-body m-5">
      <h3>Profile</h3>
      <div className="container-fluid">
        {img && <img
          className="icon-nav-img-lg"
          src={img}
          alt="asif"
          style={{ maxWidth: "200px" }}
          
        />}
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4 p-2">
              <label>Profile Picture  {error && <span className="text-danger">{error}</span>} </label>
              <input
                placeholder="User Email"
                className="form-control animated fadeInUp"
                type="file"
                name="pic"
                onChange={encodeImageFileAsURL}
              />
            </div>
            <div className="col-4 p-2">
              <label>Email Address</label>
              <input
                readOnly
                placeholder="User Email"
                className="form-control animated fadeInUp"
                type="email"
                defaultValue={email}
                name="email"
              />
            </div>
            <div className="col-4 p-2">
              <label>User Name</label>
              <input
               readOnly
                placeholder="User Name"
                className="form-control animated fadeInUp"
                type="text"
                defaultValue={userName}
                name="userName"
              />
            </div>
            <div className="col-4 p-2">
              <label>Name</label>
              <input
                placeholder="Name"
                className="form-control animated fadeInUp"
                type="text"
                defaultValue={realName}
                name="name"
              />
            </div>
            <div className="col-4 p-2">
              <label>Mobile</label>
              <input
                placeholder="Mobile"
                className="form-control animated fadeInUp"
                type="number"
                defaultValue={phone}
                name="mobile"
              />
            </div>
            <div className="col-4 p-2">
              <button
                type="submit"
                className="btn w-100 float-end btn-primary animated fadeInUp"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

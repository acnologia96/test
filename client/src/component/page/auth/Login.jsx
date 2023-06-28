//rafce
import React, { useState } from "react";
import { login } from "../../../component/function/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    //code
    login(value)
      .then((res) => {
        console.log(res);
        dispatch({
          type:"LOGIN",
          payload:res.data.token})
      })
      .catch((err) => {
       // console.log(err.response.data);
        alert(err.response.data);
      });
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <br />
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

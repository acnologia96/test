import React, { useState } from "react";
import { register } from "../../function/auth";
import "react-datepicker/dist/react-datepicker.css";
import '../../../register.css'



const Register = () => {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    birthday: "",
    gender: "",
    tel: "",
    email: "",
    address: [],
    role: "",
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
    if (value.password !== value.cfpassword) {
      alert("Password not match");
    } else {
      //code
      register(value)
        .then((res) => {
        console.log(res.data)
        //alert('Register Success')
        })
        .catch((err) => {
          //console.log(err.response.data);
        //alert(err.response.data)
          console.log(err.response)
        });
    }
  };

  return (
    <div class="wrapper" style={{ backgroundColor: "#FFF0F5" }}>
      <div class="inner">
        <form onSubmit={handleSubmit}>
          <h3>Registration Form</h3>
          <div class="form-group">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              class="form-control"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              class="form-control"
              onChange={handleChange}
            />
          </div>
          <div class="form-wrapper">
            <input
            required="true"
              type="text"
              name="username"
              placeholder="Username"
              class="form-control"
              
              onChange={handleChange}
            />
            <i class="zmdi zmdi-account"></i>
          </div>
          <div class="form-wrapper">
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              class="form-control"
            />
            <i class="zmdi zmdi-lock"></i>
          </div>
          <div class="form-wrapper">
            <input
            name="cfpassword"
              onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              class="form-control"
            />
            <i class="zmdi zmdi-lock"></i>
          </div>

          <div class="form-wrapper">
            <input
              onChange={handleChange}
              name="tel"
              type="text"
              placeholder="Tel"
              class="form-control"
            />
            <i class="zmdi zmdi-email"></i>
          </div>
          <div class="form-wrapper">
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Email Address"
              class="form-control"
            />
            <i class="zmdi zmdi-email"></i>
          </div>
          <div class="form-wrapper">
            <select
              name="gender"
              id=""
              class="form-control"
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="femal">Female</option>
              <option value="other">Other</option>
            </select>
            <i class="zmdi zmdi-caret-down" style={{ fontSize: 17 }}></i>
          </div>

          <div className="date">
         
            <input type="date" name="birthday" onChange={handleChange} />
          </div>

          <button type="submit">
            Register
            <i class="zmdi zmdi-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

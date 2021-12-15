import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { API } from "../api/be";
import swal from "sweetalert";

function Register() {
  const [form, setform] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const forms = JSON.stringify(form);
      const data = await API.post("/signup", forms, config);
      if (data.status === 200) {
        swal("success", "Create Account Success", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="px-2 lg:px-20 mt-14 h-screen ">
        <div className="w-full lg:w-3/5  mx-auto lg:px-10 px-4 ">
          <form
            onSubmit={handleSubmit}
            className="px-4 lg:px-10 py-4 drop-shadow-lg rounded rounded-lg bg-gray-50"
          >
            <p className="font-semibold text-sm text-gray-500 mb-2">
              HI_EVERYONE
            </p>
            <input
              type="text"
              name="fullname"
              placeholder="Fullname"
              onChange={handleChange}
              className="h-10 shadow w-full rounded-sm mb-4 bg-gray-50 px-2"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="h-10 shadow w-full rounded-sm mb-4 bg-gray-50 px-2"
            />
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
              className="h-10 shadow w-full rounded-sm mb-4 bg-gray-50 px-2"
            />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="h-10 shadow  px-2 w-full rounded-sm mb-4 bg-gray-50"
            />
            <button className="w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded h-8 bg-red-400 text-white">
              Signup
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Register;

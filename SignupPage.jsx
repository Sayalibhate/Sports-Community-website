import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const register = await axios.post("http://localhost:8080/register", value);
      console.log(register.data);
      setValue({
        name: "",
        email: "",
        password: "",
      });
      alert("Account created");
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Error creating account. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-[#a18cd1] to-[#fbc2eb]">
      <div className="w-80 bg-[#DA631E] p-8 rounded-2xl">
        <h2 className="font-bold text-white text-3xl text-center mb-8">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={value.name}
            name="name"
            required
            className="border-none outline-none h-10 rounded-lg p-2"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={value.email}
            name="email"
            required
            className="border-none outline-none h-10 rounded-lg p-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={value.password}
            onChange={handleChange}
            name="password"
            required
            className="border-none outline-none h-10 rounded-lg p-2"
          />
          <button type="submit" className="w-32 h-10 rounded-full bg-aqua font-bold text-lg ml-auto">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

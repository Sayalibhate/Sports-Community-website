import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    age: "",
    sport: "",
    weight: "",
    height: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.includes("@")) tempErrors.email = "Valid email is required.";
    if (!formData.number.match(/^\d{10}$/)) tempErrors.number = "Valid 10-digit phone number is required.";
    if (!formData.age || formData.age < 5 || formData.age > 100) tempErrors.age = "Age must be between 5 and 100.";
    if (!formData.sport.trim()) tempErrors.sport = "Interested sport is required.";
    if (!formData.weight || formData.weight <= 0) tempErrors.weight = "Valid weight is required.";
    if (!formData.height || formData.height <= 0) tempErrors.height = "Valid height is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add handleSubmit here
  const handleSubmit = async () => {
    if (validate()) {
      try {
        const response = await fetch("http://localhost:5000/api/apply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted successfully");
        } else {
          console.log("Failed to submit form");
        }
        setOrderPopup(false); // Close the popup after submission
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
  };

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-gray-900 rounded-md w-[320px] md:w-[400px]">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="text-lg md:text-xl font-semibold text-black/70">
                Connect with fellow sports enthusiasts
              </h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setOrderPopup(false)}
              />
            </div>
            {/* Body */}
            <div className="mt-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                value={formData.number}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
              />
              {errors.number && <p className="text-red-500 text-xs">{errors.number}</p>}

              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
              />
              {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}

              <input
                type="text"
                name="sport"
                placeholder="Interested Sport"
                value={formData.sport}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
              />
              {errors.sport && <p className="text-red-500 text-xs">{errors.sport}</p>}

              <input
                type="number"
                name="weight"
                placeholder="Weight (in kg)"
                value={formData.weight}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
              />
              {errors.weight && <p className="text-red-500 text-xs">{errors.weight}</p>}

              <input
                type="number"
                name="height"
                placeholder="Height (in cm)"
                value={formData.height}
                onChange={handleChange}
                className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
              />
              {errors.height && <p className="text-red-500 text-xs">{errors.height}</p>}

              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 duration-200 text-white py-2 px-6 rounded-full"
                  onClick={handleSubmit}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;

// // import React, { useState } from "react";

// // const ProfilePage = () => {
// //   const [file, setFile] = useState(null);

// //   const handleFileChange = (e) => {
// //     setFile(URL.createObjectURL(e.target.files[0]));
// //   };

// //   return (
// //     <div className="profile-container">
// //       <div className="profile-picture-section">
// //         <img
// //           src={file || "https://via.placeholder.com/150"}
// //           alt="Profile"
// //           className="profile-picture"
// //         />
// //         <input
// //           type="file"
// //           onChange={handleFileChange}
// //           className="upload-button"
// //           accept="image/*"
// //         />
// //       </div>

// //       <form className="profile-form">
// //         <div className="form-group">
// //           <label>Name</label>
// //           <input type="text" placeholder="Enter your name" />
// //         </div>

// //         <div className="form-group">
// //           <label>Email</label>
// //           <input type="email" placeholder="Enter your email" />
// //         </div>

// //         <div className="form-group">
// //           <label>Bio</label>
// //           <textarea placeholder="Tell us about yourself"></textarea>
// //         </div>

// //         <button type="submit" className="submit-button">
// //           Save Profile
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ProfilePage;



// import React, { useState } from "react";

// const ProfilePage = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(URL.createObjectURL(e.target.files[0]));
//   };

//   return (
//     <div className="flex flex-col items-center mt-24 bg-gradient-to-br from-[#00d8ff] to-[#0097c2] p-12 rounded-lg shadow-xl w-3/5 mx-auto animate-fadeIn">
//       {/* Profile Picture Section */}
//       <div className="flex flex-col items-center mb-8">
//         <img
//           src={file || "https://via.placeholder.com/150"}
//           alt="Profile"
//           className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-white shadow-lg animate-zoomIn"
//         />
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="mt-2 text-white bg-[#00d8ff] hover:bg-[#0097c2] border-none px-4 py-2 rounded-md cursor-pointer transition-all"
//           accept="image/*"
//         />
//       </div>

//       {/* Form */}
//       <form className="w-full flex flex-col space-y-6 animate-fadeInUp">
//         <div className="form-group">
//           <label className="font-bold mb-2 text-white text-lg">Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="w-full p-3 rounded-lg shadow-md border-none text-black"
//           />
//         </div>

//         <div className="form-group">
//           <label className="font-bold mb-2 text-white text-lg">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full p-3 rounded-lg shadow-md border-none text-black"
//           />
//         </div>

//         <div className="form-group">
//           <label className="font-bold mb-2 text-white text-lg">Bio</label>
//           <textarea
//             placeholder="Tell us about yourself"
//             className="w-full p-3 rounded-lg shadow-md border-none text-black"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="bg-[#00d8ff] hover:bg-[#0097c2] text-white py-3 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-md"
//         >
//           Save Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProfilePage;


// import React, { useState, useEffect } from "react";

// const ProfilePage = () => {
//   const [file, setFile] = useState(null);
//   const [profileData, setProfileData] = useState({
//     name: "",
//     email: "",
//     bio: "",
//   });

//   useEffect(() => {
//     // Load the profile picture from local storage
//     const savedImage = localStorage.getItem("profilePicture");
//     if (savedImage) {
//       setFile(savedImage);
//     }

//     // Load existing profile data from local storage
//     const savedProfileData = JSON.parse(localStorage.getItem("profileData"));
//     if (savedProfileData) {
//       setProfileData(savedProfileData);
//     }
//   }, []);

//   const handleFileChange = (e) => {
//     const image = URL.createObjectURL(e.target.files[0]);
//     setFile(image);
//     localStorage.setItem("profilePicture", image); // Save image to local storage
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Save profile data to local storage (you can implement an API call here)
//     localStorage.setItem("profileData", JSON.stringify(profileData));
//     console.log("Profile data saved:", profileData);
//   };

//   return (
//     <div className="flex flex-col items-center mt-24 bg-gradient-to-br from-[#00d8ff] to-[#0097c2] p-12 rounded-lg shadow-xl w-3/5 mx-auto animate-fadeIn">
//       {/* Profile Picture Section */}
//       <div className="flex flex-col items-center mb-8">
//         <img
//           src={file || "https://via.placeholder.com/150"}
//           alt="Profile"
//           className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-white shadow-lg animate-zoomIn"
//         />
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="mt-2 text-white bg-[#00d8ff] hover:bg-[#0097c2] border-none px-4 py-2 rounded-md cursor-pointer transition-all"
//           accept="image/*"
//         />
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-6 animate-fadeInUp">
//         <div>
//           <label className="block mb-1 font-semibold text-white">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={profileData.name}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-semibold text-white">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={profileData.email}
//             onChange={handleChange}
//             required
//             className="border border-gray-300 p-2 w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-semibold text-white">Bio</label>
//           <textarea
//             name="bio"
//             value={profileData.bio}
//             onChange={handleChange}
//             className="border border-gray-300 p-2 w-full"
//             rows="4"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-[#00d8ff] hover:bg-[#0097c2] text-white py-3 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-md"
//         >
//           Save Profile
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useState, useEffect } from "react";

const ProfilePage = () => {
  const [file, setFile] = useState(null);
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    // Load the profile picture from local storage
    const savedImage = localStorage.getItem("profilePicture");
    if (savedImage) {
      setFile(savedImage);
    }

    // Load existing profile data from local storage
    const savedProfileData = JSON.parse(localStorage.getItem("profileData"));
    if (savedProfileData) {
      setProfileData(savedProfileData);
    }
  }, []);

  // Helper function to convert file to Base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await toBase64(file);
      setFile(base64Image);
      localStorage.setItem("profilePicture", base64Image); // Save Base64 image to local storage
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data to local storage (you can implement an API call here)
    localStorage.setItem("profileData", JSON.stringify(profileData));
    console.log("Profile data saved:", profileData);
  };

  return (
    <div className="flex flex-col items-center mt-24 bg-gradient-to-br from-[#00d8ff] to-[#0097c2] p-12 rounded-lg shadow-xl w-3/5 mx-auto animate-fadeIn">
      {/* Profile Picture Section */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={file || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-white shadow-lg animate-zoomIn"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="mt-2 text-white bg-[#00d8ff] hover:bg-[#0097c2] border-none px-4 py-2 rounded-md cursor-pointer transition-all"
          accept="image/*"
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-6 animate-fadeInUp">
        <div>
          <label className="block mb-1 font-semibold text-white">Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-white">Email</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-white">Bio</label>
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#00d8ff] hover:bg-[#0097c2] text-white py-3 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-md"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;



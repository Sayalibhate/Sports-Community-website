// import React from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import NoPage from "./pages/NoPage";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About";
// import BlogsDetails from "./pages/BlogsDetails";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="blogs/:id" element={<BlogsDetails />} />
//             <Route path="best-places" element={<PlacesRoute />} />
//             <Route path="about" element={<About />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;




import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import ProfilePage from "./components/ProfilePage/ProfilePage"; // Import the Login component
import Signup from "./pages/SignupPage"; // Import the Signup component
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
   }, []);
   return (
     <>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout />}>
             <Route index element={<Home />} />
             <Route path="blogs" element={<Blogs />} />
             <Route path="blogs/:id" element={<BlogsDetails />} />
             <Route path="best-places" element={<PlacesRoute />} />
             <Route path="about" element={<About />} />
             <Route path="profile" element={<ProfilePage />} />
             <Route path="signup" element={<Signup />} />

             <Route path="*" element={<NoPage />} />
           </Route>
         </Routes>
       </BrowserRouter>
     </>
   );
 };

 export default App;













// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate for redirection
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import NoPage from "./pages/NoPage";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About";
// import BlogsDetails from "./pages/BlogsDetails";
// import ProfilePage from "./components/ProfilePage/ProfilePage";
// import Login from "./pages/LoginPage";  // Import the Login component
// import Signup from "./pages/SignupPage"; // Import the Signup component
// import PrivateRoute from "./components/Routes/PrivateRoute"; // Import PrivateRoute
// import AOS from "aos";
// import "aos/dist/aos.css";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Routes for Signup and Login without Layout */}
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected Routes inside Layout */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="blogs/:id" element={<BlogsDetails />} />
//           <Route path="best-places" element={<PlacesRoute />} />
//           <Route path="about" element={<About />} />
//           <Route
//             path="profile"
//             element={
//               <PrivateRoute>
//                 <ProfilePage />
//               </PrivateRoute>
//             }
//           />
//           <Route path="*" element={<NoPage />} />
//         </Route>

//         {/* Redirect to Signup if someone visits the root path */}
//         <Route path="/" element={<Navigate to="/signup" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

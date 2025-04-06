// // import React, { useState } from "react";
// // import Logo from "../../assets/logo.png";
// // import { NavLink, Link } from "react-router-dom";
// // import { FaCaretDown } from "react-icons/fa";
// // import ResponsiveMenu from "./ResponsiveMenu";
// // import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

// // export const NavbarLinks = [
// //   {
// //     name: "Home",
// //     link: "/",
// //   },
// //   {
// //     name: "About",
// //     link: "/about",
// //   },
// //   {
// //     name: "Events",
// //     link: "/blogs",
// //   },
// //   {
// //     name: "Communities",
// //     link: "/best-places",
// //   },
// // ];

// // const DropdownLinks = [
// //   {
// //     name: "Our Services",
// //     link: "/#services",
// //   },
// //   {
// //     name: "XYZZZZ",
// //     link: "/#mobile_brands",
// //   },
// //   {
// //     name: "XYZZZZ",
// //     link: "/#location",
// //   },
// // ];

// // const Navbar = ({ handleOrderPopup }) => {
// //   const [showMenu, setShowMenu] = useState(false);

// //   const toggleMenu = () => {
// //     setShowMenu(!showMenu);
// //   };
// //   return (
// //     <>
// //       <nav className="fixed top-0 right-0 w-full z-50 bg-white/80 backdrop-blur-sm text-black shadow-md">
// //         <div className="bg-gradient-to-r from-primary to-secondary text-white ">
// //           <div className="container py-[2px] sm:block hidden">
// //             <div className="flex items-center justify-between">
// //               <p className="text-sm"> "Connect to sports" </p>
// //               <p> With sport Connect </p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="container py-3 sm:py-0">
// //           <div className="flex justify-between items-center">
// //             <div className="flex items-center gap-4  font-bold text-2xl">
// //               <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
// //                 <img src={Logo} alt="" className="h-16" />
// //               </Link>
// //               {/* <span>TCJ Tourism</span> */}
// //             </div>
// //             <div className="hidden md:block">
// //               <ul className="flex items-center gap-6 ">
// //                 <li className="py-4">
// //                   <NavLink to="/" activeClassName="active">
// //                     Home
// //                   </NavLink>
// //                 </li>
// //                 <li className="py-4">
// //                   <NavLink to="/blogs" activeClassName="active">
// //                     Events 
// //                   </NavLink>
// //                 </li>
// //                 <li className="py-4">
// //                   <NavLink to="/best-places" activeClassName="active">
// //                   Communities
// //                   </NavLink>
// //                 </li>
// //                 <li className="py-4">
// //                   <NavLink to="/about" activeClassName="active">
// //                     About
// //                   </NavLink>
// //                 </li>
// //                 <li className="group relative cursor-pointer">
// //                   <a
// //                     href="/#home"
// //                     className="flex h-[72px] items-center gap-[2px]"
// //                   >
// //                     Quick Links{" "}
// //                     <span>
// //                       <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
// //                     </span>
// //                   </a>
// //                   <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
// //                     <ul className="space-y-3">
// //                       {DropdownLinks.map((data) => (
// //                         <li key={data.name}>
// //                           <a
// //                             className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
// //                             href={data.link}
// //                           >
// //                             {data.name}
// //                           </a>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="flex items-center gap-4">
// //               <button
// //                 className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
// //                 onClick={() => {
// //                   handleOrderPopup();
// //                 }}
// //               >
// //                 Join Now 
// //               </button>
// //               {/* Mobile Hamburger icon */}
// //               <div className="md:hidden block">
// //                 {showMenu ? (
// //                   <HiMenuAlt1
// //                     onClick={toggleMenu}
// //                     className=" cursor-pointer transition-all"
// //                     size={30}
// //                   />
// //                 ) : (
// //                   <HiMenuAlt3
// //                     onClick={toggleMenu}
// //                     className="cursor-pointer transition-all"
// //                     size={30}
// //                   />
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar;



// import React, { useState } from "react";
// import Logo from "../../assets/logo.png";
// import { NavLink, Link } from "react-router-dom";
// import { FaCaretDown } from "react-icons/fa";
// import ResponsiveMenu from "./ResponsiveMenu";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

// export const NavbarLinks = [
//   {
//     name: "Home",
//     link: "/",
//   },
//   {
//     name: "About",
//     link: "/about",
//   },
//   {
//     name: "Events",
//     link: "/blogs",
//   },
//   {
//     name: "Communities",
//     link: "/best-places",
//   },
// ];

// const DropdownLinks = [
//   {
//     name: "Our Services",
//     link: "/#services",
//   },
//   {
//     name: "PROFILE", // This will now link to the profile page
//     link: "/profile",
//   },
//   {
//     name: "XYZZZZ",
//     link: "/#location",
//   },
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 right-0 w-full z-50 bg-white/80 backdrop-blur-sm text-black shadow-md">
//         <div className="bg-gradient-to-r from-primary to-secondary text-white ">
//           <div className="container py-[2px] sm:block hidden">
//             <div className="flex items-center justify-between">
//               <p className="text-sm"> "Connect to sports" </p>
//               <p> With sport Connect </p>
//             </div>
//           </div>
//         </div>
//         <div className="container py-3 sm:py-0">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-4  font-bold text-2xl">
//               <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
//                 <img src={Logo} alt="" className="h-16" />
//               </Link>
//             </div>
//             <div className="hidden md:block">
//               <ul className="flex items-center gap-6 ">
//                 <li className="py-4">
//                   <NavLink to="/" activeClassName="active">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="py-4">
//                   <NavLink to="/blogs" activeClassName="active">
//                     Events 
//                   </NavLink>
//                 </li>
//                 <li className="py-4">
//                   <NavLink to="/best-places" activeClassName="active">
//                     Communities
//                   </NavLink>
//                 </li>
//                 <li className="py-4">
//                   <NavLink to="/about" activeClassName="active">
//                     About
//                   </NavLink>
//                 </li>
//                 <li className="group relative cursor-pointer">
//                   <a
//                     href="/#home"
//                     className="flex h-[72px] items-center gap-[2px]"
//                     onClick={toggleMenu} // Close the dropdown on click
//                   >
//                     Quick Links{" "}
//                     <span>
//                       <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
//                     </span>
//                   </a>
//                   <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md ">
//                     <ul className="space-y-3">
//                       {DropdownLinks.map((data) => (
//                         <li key={data.name}>
//                           <Link
//                             to={data.link} // Use Link to navigate
//                             className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
//                             onClick={() => setShowMenu(false)} // Close the dropdown on click
//                           >
//                             {data.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex items-center gap-4">
//               <button
//                 className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
//                 onClick={handleOrderPopup}
//               >
//                 Join Now 
//               </button>
//               {/* Mobile Hamburger icon */}
//               <div className="md:hidden block">
//                 {showMenu ? (
//                   <HiMenuAlt1
//                     onClick={toggleMenu}
//                     className="cursor-pointer transition-all"
//                     size={30}
//                   />
//                 ) : (
//                   <HiMenuAlt3
//                     onClick={toggleMenu}
//                     className="cursor-pointer transition-all"
//                     size={30}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
//       </nav>
//     </>
//   );
// };

// export default Navbar;







// import React, { useState, useEffect } from "react";
// import Logo from "../../assets/logo.png"; // Update the path as necessary
// import { NavLink, Link } from "react-router-dom";
// import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

// export const NavbarLinks = [
//   {
//     name: "Home",
//     link: "/",
//   },
//   {
//     name: "About",
//     link: "/about",
//   },
//   {
//     name: "Events",
//     link: "/blogs",
//   },
//   {
//     name: "Communities",
//     link: "/best-places",
//   },
// ];

// const Navbar = ({ handleOrderPopup }) => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [profilePicture, setProfilePicture] = useState(null);

//   useEffect(() => {
//     // Load the profile picture from local storage
//     const savedImage = localStorage.getItem("profilePicture");
//     if (savedImage) {
//       setProfilePicture(savedImage);
//     }
//   }, []);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 right-0 w-full z-50 bg-white/80 backdrop-blur-sm text-black shadow-md">
//         <div className="bg-gradient-to-r from-primary to-secondary text-white ">
//           <div className="container py-[2px] sm:block hidden">
//             <div className="flex items-center justify-between">
//               <p className="text-sm"> "Connect to sports" </p>
//               <p> With Sport Connect </p>
//             </div>
//           </div>
//         </div>
//         <div className="container py-3 sm:py-0">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-4 font-bold text-2xl">
//               <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
//                 <img src={Logo} alt="Logo" className="h-16" />
//               </Link>
//             </div>
//             <div className="hidden md:block">
//               <ul className="flex items-center gap-6 ">
//                 {NavbarLinks.map((link) => (
//                   <li className="py-4" key={link.name}>
//                     <NavLink to={link.link} activeClassName="active">
//                       {link.name}
//                     </NavLink>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex items-center gap-4">
//               {profilePicture && (
//                 <Link to="/profile">
//                   <img
//                     src={profilePicture}
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full border border-white shadow-lg cursor-pointer"
//                   />
//                 </Link>
//               )}
//               <button
//                 className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
//                 onClick={handleOrderPopup}
//               >
//                 Join Now
//               </button>
//               {/* Mobile Hamburger icon */}
//               <div className="md:hidden block">
//                 {showMenu ? (
//                   <HiMenuAlt1
//                     onClick={toggleMenu}
//                     className="cursor-pointer transition-all"
//                     size={30}
//                   />
//                 ) : (
//                   <HiMenuAlt3
//                     onClick={toggleMenu}
//                     className="cursor-pointer transition-all"
//                     size={30}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png"; // Update the path as necessary
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Events",
    link: "/blogs",
  },
  {
    name: "Communities",
    link: "/best-places",
  },
  {
    name: "Login", // Add Login link
    link: "/login",
  },
  {
    name: "Signup", // Add Signup link
    link: "/signup",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("profilePicture");
    if (savedImage) {
      setProfilePicture(savedImage);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-white/80 backdrop-blur-sm text-black shadow-md">
      <div className="bg-gradient-to-r from-primary to-secondary text-white ">
        <div className="container py-[2px] sm:block hidden">
          <div className="flex items-center justify-between">
            <p className="text-sm"> "Connect to sports" </p>
            <p> With Sport Connect </p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 font-bold text-2xl">
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="Logo" className="h-16" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 ">
              {NavbarLinks.map((link) => (
                <li className="py-4" key={link.name}>
                  <NavLink to={link.link} activeClassName="active">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {profilePicture && (
              <Link to="/profile">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-white shadow-lg cursor-pointer"
                />
              </Link>
            )}
            <button
              className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
              onClick={handleOrderPopup}
            >
              Join Now
            </button>
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

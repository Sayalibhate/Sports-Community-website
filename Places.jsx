import React, { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

// Images array for random selection
const images = [Img1, Img2, Img3, Img4, Img5, Img6];

// Initial 6 communities
const initialCommunities = [
  {
    img: Img1,
    title: "Stratford Athletic Association",
    location: "Stratford, Ontario, Canada",
    description:
      "The community organizes leagues for various age groups and encourages youth sports development with strong community involvement.",
    type: "Hockey, baseball, soccer, basketball",
  },
  {
    img: Img2,
    title: "Aspire Zone Foundation",
    location: "Doha, Qatar",
    description:
      "Aspire Academy is famous for scouting and training talented young athletes in Qatar and abroad.",
    type: "Football, athletics, swimming",
  },
  {
    img: Img3,
    title: "Pro Kabaddi League (PKL) Communities",
    location: "Multiple Cities, India",
    description:
      "These communities are built around the PKL franchises, promoting kabaddi through local clubs, youth leagues, and fan engagement events.",
    type: "Kabaddi",
  },
  {
    img: Img4,
    title: "Mumbai Cricket Association (MCA)",
    location: "Mumbai, Maharashtra, India.",
    description:
      "The MCA is a prestigious body in India, renowned for developing cricket talent and hosting major tournaments like the Mumbai Premier League.",
    type: "Cricket",
  },
  {
    img: Img5,
    title: "Maharashtra Kho-Kho Association",
    location: "Pune, Maharashtra",
    description:
      "The community focuses on training and developing young talent in Kho-Kho. The association regularly conducts inter-district and state-level tournaments.",
    type: "Kho-Kho",
  },
  {
    img: Img6,
    title: "Tennis Ball Cricket Federation of India (TBCFI)",
    location: "New Delhi, India",
    description:
      "It promotes tennis ball cricket at the grassroots level, with a large number of amateur players across various states, making it a popular community for cricket enthusiasts.",
    type: "Tennis ball cricket",
  },
];

const additionalCommunities = [
  {
    img: Img1,
    title: "Chennai Super Kings Fan Club",
    location: "Chennai, Tamil Nadu",
    description: "A vibrant community of Chennai Super Kings fans supporting their team.",
    type: "Cricket",
  },
  {
    img: Img2,
    title: "Bengaluru Football Club Supporters",
    location: "Bengaluru, Karnataka",
    description: "Dedicated to promoting football and supporting Bengaluru FC.",
    type: "Football",
  },
  {
    img: Img3,
    title: "Delhi Gymkhana Club",
    location: "New Delhi",
    description: "A prestigious club promoting various sports including tennis and squash.",
    type: "Tennis, Squash",
  },
  {
    img: Img4,
    title: "Kolkata Knight Riders Fan Group",
    location: "Kolkata, West Bengal",
    description: "A passionate community supporting Kolkata Knight Riders.",
    type: "Cricket",
  },
  {
    img: Img5,
    title: "Punjab Kings Supporters Club",
    location: "Mohali, Punjab",
    description: "Dedicated fans of Punjab Kings engaging in various cricket events.",
    type: "Cricket",
  },
  {
    img: Img6,
    title: "Tamil Nadu Athletic Association",
    location: "Chennai, Tamil Nadu",
    description: "Fostering athletics and providing training for young athletes.",
    type: "Athletics",
  },
  {
    img: Img1,
    title: "Maharashtra Badminton Association",
    location: "Mumbai, Maharashtra",
    description: "Promoting badminton and organizing local tournaments.",
    type: "Badminton",
  },
  {
    img: Img2,
    title: "Goa Football Development Council",
    location: "Panaji, Goa",
    description: "Working towards the development of football in Goa.",
    type: "Football",
  },
  {
    img: Img3,
    title: "Andhra Pradesh Cricket Association",
    location: "Visakhapatnam, Andhra Pradesh",
    description: "Promoting cricket at all levels in Andhra Pradesh.",
    type: "Cricket",
  },
  {
    img: Img4,
    title: "Rajasthan Sports Club",
    location: "Jaipur, Rajasthan",
    description: "A hub for various sports, including cricket and athletics.",
    type: "Multi-sport",
  },
  {
    img: Img5,
    title: "Kerala State Sports Council",
    location: "Thiruvananthapuram, Kerala",
    description: "Governing body for sports and games in Kerala.",
    type: "Multi-sport",
  },
  {
    img: Img6,
    title: "Mysore Palace Wrestling Club",
    location: "Mysuru, Karnataka",
    description: "Fostering traditional wrestling in Mysuru.",
    type: "Wrestling",
  },
  {
    img: Img1,
    title: "Hockey Association of India",
    location: "New Delhi",
    description: "Promoting hockey across the nation with various initiatives.",
    type: "Hockey",
  },
  {
    img: Img2,
    title: "Mumbai Running Club",
    location: "Mumbai, Maharashtra",
    description: "A community for running enthusiasts organizing regular runs.",
    type: "Running",
  },
  {
    img: Img3,
    title: "Uttar Pradesh Basketball Association",
    location: "Lucknow, Uttar Pradesh",
    description: "Promoting basketball at schools and colleges in Uttar Pradesh.",
    type: "Basketball",
  },
  {
    img: Img4,
    title: "Bihar Kabaddi Federation",
    location: "Patna, Bihar",
    description: "Encouraging kabaddi at the grassroots level in Bihar.",
    type: "Kabaddi",
  },
  {
    img: Img5,
    title: "Gujarat State Table Tennis Association",
    location: "Ahmedabad, Gujarat",
    description: "Promoting table tennis in schools and local clubs.",
    type: "Table Tennis",
  },
  {
    img: Img6,
    title: "Odisha Cricket Association",
    location: "Bhubaneswar, Odisha",
    description: "Encouraging cricket talent in Odisha through training camps.",
    type: "Cricket",
  },
  {
    img: Img1,
    title: "Assam State Sports Council",
    location: "Guwahati, Assam",
    description: "Overseeing sports development across Assam.",
    type: "Multi-sport",
  },
  {
    img: Img2,
    title: "Haryana Kabaddi Association",
    location: "Chandigarh, Haryana",
    description: "Promoting kabaddi and organizing state-level tournaments.",
    type: "Kabaddi",
  },
  {
    img: Img3,
    title: "Madhya Pradesh Cricket Academy",
    location: "Indore, Madhya Pradesh",
    description: "Developing young cricket talent in Madhya Pradesh.",
    type: "Cricket",
  },
  {
    img: Img4,
    title: "Telangana State Athletics Federation",
    location: "Hyderabad, Telangana",
    description: "Promoting athletics and training young athletes.",
    type: "Athletics",
  },
  {
    img: Img5,
    title: "Karnataka Tennis Association",
    location: "Bengaluru, Karnataka",
    description: "Supporting tennis development in Karnataka.",
    type: "Tennis",
  },
  {
    img: Img6,
    title: "Delhi Kho-Kho Association",
    location: "New Delhi",
    description: "Promoting and organizing kho-kho tournaments in Delhi.",
    type: "Kho-Kho",
  },
  {
    img: Img1,
    title: "Sikkim Archery Association",
    location: "Gangtok, Sikkim",
    description: "Promoting archery and training athletes in Sikkim.",
    type: "Archery",
  },
  {
    img: Img2,
    title: "Himachal Pradesh Badminton Association",
    location: "Shimla, Himachal Pradesh",
    description: "Encouraging badminton through schools and clubs.",
    type: "Badminton",
  },
  {
    img: Img3,
    title: "Maharashtra State Football Association",
    location: "Mumbai, Maharashtra",
    description: "Regulating and promoting football activities in Maharashtra.",
    type: "Football",
  },
  {
    img: Img4,
    title: "Goa Swimming Association",
    location: "Panaji, Goa",
    description: "Promoting swimming as a competitive sport in Goa.",
    type: "Swimming",
  },
  {
    img: Img5,
    title: "West Bengal Sports Association",
    location: "Kolkata, West Bengal",
    description: "Promoting various sports and developing local talent.",
    type: "Multi-sport",
  },
  {
    img: Img6,
    title: "Uttarakhand Badminton Association",
    location: "Dehradun, Uttarakhand",
    description: "Promoting badminton and organizing training sessions.",
    type: "Badminton",
  },
];

const Places = ({ handleOrderPopup }) => {
  const [showAll, setShowAll] = useState(false);

  // Scroll to the top of the page when "Show Less" button is clicked
  useEffect(() => {
    if (!showAll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [showAll]);

  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Top Communities
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(showAll ? initialCommunities.concat(additionalCommunities) : initialCommunities).slice(0, 36).map((item, index) => (
            <PlaceCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark"
          >
            {showAll ? "Show Less" : "Check More Communities"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Places;

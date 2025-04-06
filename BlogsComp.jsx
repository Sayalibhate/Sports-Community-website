import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Football Championship",
    description:
      "The annual Indian National Football Championship is back with top teams from across the country competing for the prestigious trophy. Fans can expect thrilling matches and intense competition as the teams battle it out on the field.",
    author: "Jawaharlal Nehru Stadium",
    date: "October 15, 2024",
  },
  {
    id: 1,
    image: Img2,
    title: "Kabaddi National League",
    description:
      "The Pro Kabaddi League 2024 brings together India’s top kabaddi talent for action-packed games. Witness the excitement and physical prowess as the best teams compete for the championship title.",
    author: "S S C Sports Complex, Pune",
    date: "November 05, 2024",
  },
  {
    id: 1,
    image: Img3,
    title: "Basketball Open Cup",
    description:
      "The Indian Basketball Open Cup features teams from all over India competing in a knockout format. Expect high-flying dunks, sharp shooting, and intense court battles in this premier basketball tournament",
    author: "K Indoor Stadium, Bengaluru",
    date: "December 12, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Upcoming Events
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;

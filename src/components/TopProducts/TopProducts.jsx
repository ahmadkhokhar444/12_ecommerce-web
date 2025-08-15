import React from "react";
import Img1 from "../../assets/bleach.jpg";
import Img2 from "../../assets/dragon.jpg";
import Img3 from "../../assets/sung.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id mollitia rem exercitationem autem, ad aliquam sint excepturi tenetur nostrum, fugiat sit! Ab, quae expedita",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id mollitia rem exercitationem autem, ad aliquam sint excepturi tenetur nostrum, fugiat sit! Ab, quae expedita",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id mollitia rem exercitationem autem, ad aliquam sint excepturi tenetur nostrum, fugiat sit! Ab, quae expedita",
  },
];

const TopProducts = ({ handleOrderPopup = { handleOrderPopup } }) => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur
            adipisicing elit.
          </p>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              key={data.id}
              className="relative bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white rounded-2xl shadow-xl duration-300 group max-w-[300px] pt-16"
            >
              {/* Floating image */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-[120px] h-[120px] object-cover rounded-full group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 text-center">
                <div className="w-full flex justify-center items-center gap-1 mb-2 group-hover:text-gray-800">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

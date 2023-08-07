import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import slide2Image from "../images/slide_2.jpg";
import slide3Image from "../images/slide_3.jpg";
import slide4Image from "../images/slide_4.jpg";
import slide5Image from "../images/slide_5.jpg";
import slide6Image from "../images/slide_6.jpg";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { Box } from "@mui/material";
import BurgerMobile from "../images/burger_mobile.jpg";
export default function Home() {
  const slides = [
    {
      url: slide2Image,
    },
    {
      url: slide3Image,
    },
    {
      url: slide4Image,
    },
    {
      url: slide5Image,
    },
    {
      url: slide6Image,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  // random index

  const randomIndex = () => {
    return Math.floor(Math.random() * slides.length);
  };

  return (
    <Layout>
      <Box
        sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}
      >
        <img src={BurgerMobile} alt="" />
      </Box>
      <Box
        sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
      >
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
          <img
            className=" rounded-2xl object-cover duration-500"
            src={slides[randomIndex()].url}
            alt=""
          />

          <div className="group-hover:block absolute top-1/3 left-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          <div className="group-hover:block absolute top-1/3 right-5 transform -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </Box>
    </Layout>
  );
}

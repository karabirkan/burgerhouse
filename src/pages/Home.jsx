import { useState } from "react";
import Layout from "../components/Layout/Layout";
import slide2Image from "../images/slide_2.jpg";
import slide3Image from "../images/slide_3.jpg";
import slide4Image from "../images/slide_4.jpg";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

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
  ];

  return (
    <Layout>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </Layout>
  );
}

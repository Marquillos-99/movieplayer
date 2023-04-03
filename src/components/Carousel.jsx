import React from "react";
import { useState } from "react";
import tas from "../assets/tas.jpg";
import shc from "../assets/shc.jpg";
import s3 from "../assets/s3.jpg";

export default function Carousel(props) {
  const images = [tas, shc, s3];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectedNewImage = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
  };

  const previous = () => {
    selectedNewImage(selectedIndex, images, false);
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
    clearInterval(interval1);
  };

  const next = () => {
    selectedNewImage(selectedIndex, images, true);
    const condition = selectedIndex < images.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
    clearInterval(interval1);
  };

  var interval1 = setInterval(next, 2000);

  return (
    <div className="flex w-full h-full">
      {/* <button onClick={previous} className="w-1/12">
        {"<"}
      </button> */}
      <img
        src={selectedImage}
        alt="Gentleman"
        className=" w-full h-full bg-black"
      />
      {/* <button onClick={next} className="w-1/12">
        {">"}
      </button> */}
    </div>
  );
}

import React from "react";
import { useState } from "react";

export default function Carousel(props: any) {
  const images = ["tas.webp", "shc.webp", "s3.wemp"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectedNewImage = (index: number, images: string[], next = true) => {
    const condition = next ? selectedIndex < images.length : selectedIndex > 0;
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
    /* const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);  first analize data then reduce*/
  };

  const next = () => {
    selectedNewImage(selectedIndex, images, true);
    /* const condition = selectedIndex < images.length;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex); */
  };

  return (
    <>
      <img
        src={require(`assets/img/${selectedImage}`).default}
        alt="Gentleman"
      />
      {/* lazy loading */}
    </>
  );
}

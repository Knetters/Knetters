import React, { useEffect, useState } from "react";

export default function Banner() {

  // const bannerImages = ["frog.jpeg", "wizard.jpeg", "dungeon.jpeg"];
  // const [selectedImage, setSelectedImage] = useState("");

  // const getRandomImage = () => {
  //   const randomIndex = Math.floor(Math.random() * bannerImages.length);
  //   return bannerImages[randomIndex];
  // };
  
  // useEffect(() => {
  //   setSelectedImage(getRandomImage());
  // }, []);

  return (
    <div>
      <nav>
        <p><a href="/">Intro</a> / <a href="#digital-brain">Digital brain</a> / <a href="#projects">Projects</a> / <a href="#resume">Resume</a></p>
      </nav>

      <section className="top-image-container">
        {/* Display the selected random image */}
        <img className="top-image" src={`/img/dungeon.jpeg`} alt="" />
        <div className="gradient-overlay"></div>
      </section>
    </div>
  );
}

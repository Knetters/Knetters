import React, { useEffect, useState } from "react";

export default function Banner() {

  // List of banner images
  const bannerImages = ["frog.jpeg", "wizard.jpeg", "dungeon.jpeg"];

  // State to store the selected image
  const [selectedImage, setSelectedImage] = useState("");

  // Function to select a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * bannerImages.length);
    return bannerImages[randomIndex];
  };

  // Set the initial image when the component mounts
  useEffect(() => {
    setSelectedImage(getRandomImage());
  }, []);

  return (
    <div>
      <nav>
        <p><a href="/">Intro</a> / <a href="#digital-brain">Digital brain</a> / <a href="#projects">Projects</a> / <a href="#resume">Resume</a></p>
      </nav>

      <section className="top-image-container">
        {/* Display the selected random image */}
        <img className="top-image" src={`/img/${selectedImage}`} alt="" />
        <div className="gradient-overlay"></div>
      </section>
    </div>
  );
}

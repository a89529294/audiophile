import React from "react";

import Hero from "../ui/Hero";
import Body from "../ui/Body";
import CategoryCard from "../ui/CategoryCard";

import headphoneLogo from "../../assets/home/category-logo-headphone.svg";
import speakerLogo from "../../assets//home/category-logo-speaker.svg";
import earphoneLogo from "../../assets/home/category-logo-earphone.svg";

function Home() {
  return (
    <div>
      <Hero />
      <Body>
        <CategoryCard title="HEADPHONES" imgSrc={headphoneLogo} />
        <CategoryCard title="SPEAKERS" imgSrc={speakerLogo} />
        <CategoryCard title="EARPHONES" imgSrc={earphoneLogo} />
      </Body>
    </div>
  );
}

export default Home;

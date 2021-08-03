import React from "react";

import classes from "../../styles/Home.module.css";

import Hero from "../ui/Hero";
import Body from "../ui/Body";
import CategoryCard from "../ui/CategoryCard";
import Button from "../ui/Button";

import headphoneLogo from "../../assets/home/category-logo-headphone.svg";
import speakerLogo from "../../assets//home/category-logo-speaker.svg";
import earphoneLogo from "../../assets/home/category-logo-earphone.svg";
import HomeProductDisplay from "../ui/HomeProductDisplay";
import Ad from "../ui/Ad";

function Home() {
  return (
    <div>
      <Hero />
      <Body>
        <div>
          <CategoryCard title="HEADPHONES" imgSrc={headphoneLogo} />
          <CategoryCard title="SPEAKERS" imgSrc={speakerLogo} />
          <CategoryCard title="EARPHONES" imgSrc={earphoneLogo} />
        </div>
        <HomeProductDisplay />
        <Ad />
      </Body>
    </div>
  );
}

export default Home;

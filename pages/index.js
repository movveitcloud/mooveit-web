import React from "react";
import { HowItWorks, Why, FindStorage, HeroSection, FeaturedListings } from "../components/home";
import { Why } from "../components/home";
import { FindStorage } from "../components/home";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedListings />
      <HowItWorks />
      <Why />
      <FindStorage />
    </div>
  );
};

export default Home;

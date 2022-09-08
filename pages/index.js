import React from "react";
import { HowItWorks, Why, FindStorage, HeroSection } from "../components/home";
import FeaturedListings from "../components/shared/FeaturedListings";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Why />
      <FindStorage />
      <FeaturedListings />
    </div>
  );
};

export default Home;

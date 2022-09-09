import React from "react";
import { HowItWorks, Why, FindStorage, HeroSection } from "../components/home";
import FeaturedListings from "../components/shared/FeaturedListings";
import { PageLayout } from "../components/layouts";
import { FeaturedListings } from "../components/shared";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <HowItWorks />
      <Why />
      <FindStorage />
      <FeaturedListings />
    </PageLayout>
  );
};

export default Home;

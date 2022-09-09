import React from "react";
import { FindStorage, HeroSection, HowItWorks, PageLayout, WhyMooveIt, FeaturedListings } from "../components";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <HowItWorks />
      <WhyMooveIt />
      <FindStorage />
      <FeaturedListings />
    </PageLayout>
  );
};

export default Home;

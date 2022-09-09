import React from "react";
import { HowItWorks, FindStorage, HeroSection, WhyMooveIt } from "../components/home";
import { PageLayout } from "../components/layouts";
import { FeaturedListings } from "../components/shared";

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

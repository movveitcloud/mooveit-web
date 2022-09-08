import React from "react";
import { HeroSection } from "../components/home";
import { PageLayout } from "../components/layouts";
import { FeaturedListings } from "../components/shared";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <FeaturedListings />
    </PageLayout>
  );
};

export default Home;

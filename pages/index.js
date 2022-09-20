import React from "react";
import {
  FindStorage,
  HeroSection,
  HowItWorks,
  PageLayout,
  WhyMooveIt,
  FeaturedListings,
  StorageListingCTA,
} from "../components";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <HowItWorks />
      <WhyMooveIt />
      <FindStorage />
      <FeaturedListings />
      <div className="mt-20 mb-32">
        <StorageListingCTA />
      </div>
    </PageLayout>
  );
};

export default Home;

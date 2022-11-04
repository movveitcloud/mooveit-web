import React, { useEffect } from "react";
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
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {});
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

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

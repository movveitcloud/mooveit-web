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
      <div className="my-20">
        <StorageListingCTA />
      </div>
    </PageLayout>
  );
};

export default Home;

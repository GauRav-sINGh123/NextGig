import Analytic from "../components/Analytic";
import BrandSection from "../components/BrandSection";
import FeaturedJob from "../components/FeaturedJob";
import FeatureGrid from "../components/FeatureGrid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <>
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Brands Section */}
      <BrandSection />
      {/* Featured Jobs Section */}
      <FeaturedJob />
      {/* Features Grid */}
      <FeatureGrid />
      {/* Analytics Section */}
      <Analytic />
    </>
  );
}

export default Homepage;

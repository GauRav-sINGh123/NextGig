import {Analytic,BrandSection,FeaturedJob,FeatureGrid,Hero,Navbar} from '../components/index'

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

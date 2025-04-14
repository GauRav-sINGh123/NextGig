import {Analytic,BrandSection,FeaturedJob,FeatureGrid,Footer,Hero} from '../components/index'

function Homepage() {
  return (
    <>
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

      <Footer />
    </>
  );
}

export default Homepage;

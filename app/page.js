import MyFeatureProducts from '@/Components/FeatureProducts/FeatureProduct';
import HeroSection from '@/Components/Home_Components/HeroSection';
import About from '@/Components/About';
import RecentProduct from '@/Components/Recent_Product/RecentProduct';
import React from 'react';

const Home = () => {
  return (
    <>
      <HeroSection />
      <RecentProduct />
      <About />
      <MyFeatureProducts />
    </>
  );
};

export default Home;

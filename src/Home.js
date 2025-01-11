import React from 'react';
import BannerSection from './components/BannerSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProducts from './components/FeatureProducts';

const Home = () => {
  return (
    <div className="test">
      <BannerSection className="z-0"></BannerSection>
      <FeatureProducts></FeatureProducts>
      <Services></Services>
      <Trusted></Trusted>
      
    </div>
  )
}
export default Home
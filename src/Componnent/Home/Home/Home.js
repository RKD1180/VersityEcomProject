import React from "react";
import ProductSlider from "../ProductSlider/ProductSlider";
import Slider from "../Slider/Slider";
import SomeDis from "./../SomeDis/SomeDis";
import RatedPd from "./../RatedPd/RatedPd";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ProductSlider></ProductSlider>
      <SomeDis></SomeDis>
      <RatedPd></RatedPd>
    </div>
  );
};

export default Home;

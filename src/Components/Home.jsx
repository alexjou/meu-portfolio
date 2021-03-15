import React, { useEffect } from "react";
import Header from "./Header";
import ShortAbout from "./ShortAbout";
import ShortService from "./ShortService";
import ShortProject from "./ShortProject";
import ShortSkill from "./ShortSkill";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
// import SliderComponent from "./Slider";

const Home = () => {
  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <ShortAbout />
      <ShortProject />
      {/* <SliderComponent /> */}
      <ShortSkill />
      <ShortService />
      <Subscribe />
      <Footer />
    </>
  );
};
export default Home;

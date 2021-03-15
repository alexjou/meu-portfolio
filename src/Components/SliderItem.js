import React from "react";

const SliderItem = (prop) => {
  return (
    <>
      <div className="singleSliderItem">
        <img src={prop.background} alt="Developer Álex" />
        <div className="sliderDesc">
          <h2>{prop.title}</h2>
          <p>{prop.desc}</p>
        </div>
      </div>
    </>
  );
};

export default SliderItem;

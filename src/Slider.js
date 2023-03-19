import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

export default function Slider(){

  
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  
  const sliderr = (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={300}
    >
   <div data-src="https://static.toiimg.com/thumb/msid-95062568,width-280,resizemode-4/95062568.jpg"  />
      <div data-src="https://files.oyebesmartest.com/uploads/preview/virat-kohli-wallpaper-fulecnhd.webp" />
      <div data-src="https://cricfit.com/wp-content/uploads/2021/02/Virat-Kohli-2-e1614769617130.jpg" />
      <div data-src="https://files.oyebesmartest.com/uploads/preview/virat-kohli-wallpaper-fulecnhd.webp" />
  </AutoplaySlider>
);

return( <>

{sliderr}
</>
)
}
import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img0.jpg";
import img2 from "../assets/office1.jpg";

const Services = () => {
  return (
    <div className = "services">

        <Carousel 
        infiniteLoop 
        autoPlay 
        showStatus = {false}
        showArrows = {false}
        showThumb = {false}
        showIndicatorsIndicators
        interval = {1000}>
            <div>
                <img src = {img1} alt= "item1" />
                <p className ="legend"> full stack </p>
            </div>

            <div>
                <img src = {img2} alt= "item2" />
                <p className = "legend"> peer to peer guidance </p>
            </div>

        </Carousel>
      
    </div>
  )
}

export default Services

import React, { useEffect, useState } from "react";
import "./Header.css";
import TrendData from "./TrendData";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { CircularProgress } from "@mui/material";
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


const Header = () => {
  const [isTrending, setIsTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.json())
      .then((data) => {
        setIsTrending(data.coins);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [isTrending]);

  return (
    <>
    <div className="header__divs">
      <div className="header__div">
        <h2>crypto hunter</h2>
        <p>get all the info regarding your favorite crypto currency</p>
      </div>
      
      <div className="trend__divs">
         <Splide options={{perPage: "4", gap: "4rem", drag: 'free', arrows: false,  autoScroll: {speed: 1,},  breakpoints: {1024: { perPage: 3, gap: '1rem' } , 768:  { perPage: 3, gap: '0rem' }, 640 : {  perPage: 1, gap: '0rem' }, 480: {perPage: 1, gap: "0rem"}  },}}>

          {isLoading ? <CircularProgress styles={{color: "orange"}}/> : isTrending.map((trend) => {
            return (  
              <SplideSlide >
                  <TrendData  key={trend.item.id} trend={trend}/>
               </SplideSlide>
            ) 
          })}
         
        </Splide>
        
      </div>
      
    </div>
    </>
  );
};

export default Header;

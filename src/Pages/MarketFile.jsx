import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HistoricalChart } from "../Component/Config/api";
import "./marketFile.css"
import Section from "./Section";

const MarketFile = () => {
  const [isCoins, setIsCoins] = useState({});
  const { id } = useParams();

  console.log(useParams);
  useEffect(() => {
    getId();
  }, []);
  const getId = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    )
      .then((res) => res.json())
      .then((data) => {
         const newCoins= data.find((item) => item.id === id);
         setIsCoins(newCoins);
      });
  };
  return (
    <div className="marketfile__divs">
      <div className="marketfile__div">
             <div className="file__divs">
                  <div className="file__images">
                       <img src={isCoins.image} alt=""/>  
                  </div>   
                  <h3 className="product__name">{isCoins.name}</h3>
             </div>
             <div className="file__content">
                   <div className="rank">Rank: <span>{isCoins.market_cap_rank}</span></div>
                   <div className="rank">Current price: <span>${isCoins.current_price}</span></div>
                   <div className="rank">Marketcap: <span>${isCoins.market_cap}</span></div>
             </div>
        
      </div>
      <div className="product__section">
            hello motherfucker
            <div className="pro__sec">
              <Section isCoins={isCoins}/>

            </div>
      
      </div>
    </div>
  );
};

export default MarketFile;

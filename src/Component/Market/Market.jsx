import React, { useEffect, useState } from "react";
// import Table from "./Table";
import MarketForm from "./MarketForm";
import { Link } from "react-router-dom";
import "./Market.css";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Market = () => {
  const [markets, setMarkets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    )
      .then((res) => res.json())
      .then((data) => {
        setMarkets(data);
        setIsLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const filterMarkets = markets.filter((market) => {
      return market.name.toLowerCase().includes(term.toLowerCase());
    });
    setMarkets(filterMarkets);
  }, [term]);

  
  return (
    <div className="market__div">
      <MarketForm searchInput={(isInput) => setTerm(isInput)} />
      <div className="table__div">
        <table>
          <thead>
            <tr>
              <th>coin</th>
              <th>prices</th>
              <th>24hr change</th>
              <th>market cap</th>
            </tr>
          </thead>
          <tbody>
            {markets.slice((pages - 1) * 10, (pages - 1) * 10 + 10)
            .map((market) => {
              const profit = market.price_change_percentage_24h > 0;
              return (
                <tr key={market.id}>
                  <td>
                    <Link to={`/market/${market.id}`} className="table__links">
                      <div className="td">
                        <div className="table_img">
                          <img src={market.image} />
                        </div>
                        <div className="td__name">
                          <p className="acronyms">{market.symbol}</p>
                          <p className="p">{market.name}</p>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/market/${market.id}`} className="table__links">
                      ${numberWithCommas(market.current_price.toFixed(2))}
                    </Link>
                  </td>
                  <td >
                    <Link to={`/market/${market.id}`} className="table__links" style={{color: profit > 0 ? "rgb(14, 203, 129)" : "red"}} >
                      {profit && "+" }{market.price_change_percentage_24h}%
                    </Link>
                  </td>
                  <td>
                    <Link to={`/market/${market.id}`} className="table__links">
                      ${numberWithCommas(market.market_cap.toString().slice(0, 9))}M
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Market;

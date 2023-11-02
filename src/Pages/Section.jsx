import React, { useEffect, useState } from "react";
import { HistoricalChart } from "../Component/Config/api";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Line } from "react-chartjs-2";
import { chartDays } from "../Component/Config/chartData";

const Section = ({ isCoins }) => {
  const [HistoricalDatas, setHistoricalDatas] = useState();
  const [days, setDays] = useState(1);
  const [flag, setflag] = useState(false);

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(isCoins.id, days));
    setHistoricalDatas(data.prices);
  };

  useEffect(() => {
    fetchHistoricalData();
  }, [days]);

  console.log("data".HistoricalDatas);
  return (
    <div className="chart__data">
      {!HistoricalDatas ? (
        <CircularProgress />
      ) : (
        <div className="line">
          <Line
            data={{
              labels: HistoricalDatas.map((isCoins) => {
                let date = new Date(isCoins[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours() - 12}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: HistoricalDatas.map((isCoin) => isCoin[1]),
                  label: `Price ( Past ${days} Days ) in `,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
          <div className="chart__div">
            {chartDays.map((day) => (
              <SelectButton
                key={day.value}
                onClick={() => {
                  setDays(day.value);
                  setflag(false);
                }}
                selected={day.value === days}
              >
                {day.label}
              </SelectButton>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;

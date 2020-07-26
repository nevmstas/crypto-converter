import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CoinGraph = ({ items, classes }) => {
  const coinData = items.map((coin) => {
    const obj = {
      name: coin.name,
      price: coin.price,
    };
    return obj;
  });
  return (
    <div className={classes.chartContainer}>
      <BarChart
        width={500}
        height={300}
        data={coinData}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
        barSize={30}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="price" fill="#ff9999" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
};

export default CoinGraph;

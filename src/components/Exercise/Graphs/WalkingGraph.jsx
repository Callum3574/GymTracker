import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Graph = ({ graphData }) => {
  const [dataGraph, setDataGraph] = useState([]);

  const inputGraphData = () => {
    const data = graphData.data
      .sort((a, b) => b - a)
      .map((row) => {
        return {
          name: row[1].slice(0, 10),
          [graphData.name]: row[0],
        };
      });

    setDataGraph(data);
  };
  useEffect(() => {
    inputGraphData();
    console.log(graphData);
  }, []);

  return (
    <div>
      <div className="container">
        <LineChart
          style={{ width: "100%" }}
          width={800}
          height={300}
          data={dataGraph}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tick={false} dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={graphData.name}
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
        </LineChart>
      </div>
    </div>
  );
};

export default Graph;

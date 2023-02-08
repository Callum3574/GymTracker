import React, { useState, useEffect, PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Graph = ({ graphData }) => {
  const [dataGraph, setDataGraph] = useState([]);

  const inputGraphData = async () => {
    const data = await graphData.data.map((row) => {
      return {
        name: row[1].slice(0, 10),
        [graphData.name]: row[0],
      };
    });

    await setDataGraph(data);
  };
  console.log(graphData);
  useEffect(() => {
    inputGraphData();
  }, []);

  return (
    <div>
      <div className="container">
        <LineChart
          width={700}
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

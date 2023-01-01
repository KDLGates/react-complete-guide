import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

// Chart will hold a bar for each month's expenses
// props.dataPoints will be an array of 12 values for the 12 bars in the chart
// Each props.dataPoints.value will be the total amount of expenses for that month
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // New array of mapped values
  const totalMaximum = Math.max(...dataPointValues); // Spread operator to pass in standalone values

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

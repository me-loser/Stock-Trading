import Plot from "react-plotly.js";

const StockChart = ({ xValues, yValues }) => {
  return (
    <Plot
      data={[
        {
          x: xValues,
          y: yValues,
          type: "scatter",
          mode: "lines",
          marker: { color: "green" },
        },
      ]}
      layout={{ width: 900, height: 400, title: "Tesla Stock History" }}
      options={{ displaylogo: false }}
    />
  );
};

export default StockChart;

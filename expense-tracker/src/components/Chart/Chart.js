import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = ({ bars }) => {
  const values = bars.map((bar) => bar.value);
  const maxValue = values.reduce((a, b) => a + b);

  return (
    <div className="chart">
      {bars.map((bar) => (
        <ChartBar
          key={bar.label}
          value={bar.value}
          label={bar.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;

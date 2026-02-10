import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function SensorChart({ data }) {
  // Convert timestamp string into shorter readable format
  const formattedData = data.map((item) => ({
    ...item,
    timestamp: item.timestamp.replace("2026-", ""), // just for clean display
  }));

  return (
    <div style={{ padding: "15px", border: "1px solid gray", borderRadius: "8px" }}>
      <h3>Sensor Chart</h3>

      <LineChart width={700} height={300} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis domain={["auto", "auto"]} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default SensorChart;

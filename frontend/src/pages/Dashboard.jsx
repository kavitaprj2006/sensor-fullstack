import { useEffect, useState, useCallback } from "react";
import API from "../services/api";
import SensorChart from "../components/SensorChart";
import SensorForm from "../components/SensorForm";

function Dashboard() {
  const [readings, setReadings] = useState([]);
  const [sensorType, setSensorType] = useState("temperature");

  const fetchReadings = useCallback(async () => {
    try {
      const res = await API.get(`/readings?sensor=${sensorType}`);
      setReadings(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching data");
    }
  }, [sensorType]);

  useEffect(() => {
    fetchReadings();
  }, [fetchReadings]);

  const downloadCSV = () => {
  window.open(
    `http://127.0.0.1:5000/api/readings/export/csv?sensor=${sensorType}`,
    "_blank"
  );
};


  return (
    <div style={{ padding: "20px" }}>
      <h1>Sensor Dashboard</h1>

      <label>Select Sensor Type: </label>
      <select value={sensorType} onChange={(e) => setSensorType(e.target.value)}>
        <option value="temperature">Temperature</option>
        <option value="moisture">Moisture</option>
        <option value="voltage">Voltage</option>
      </select>

      <br /><br />

      <SensorForm onDataAdded={fetchReadings} />
      <br />

      <button onClick={downloadCSV}>
        Download CSV
      </button>

      <br /><br />

      <SensorChart data={readings} />
    </div>
  );
}

export default Dashboard;

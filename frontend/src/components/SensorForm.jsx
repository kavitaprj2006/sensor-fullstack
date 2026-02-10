import { useState } from "react";
import API from "../services/api";

function SensorForm({ onDataAdded }) {
  const [sensor, setSensor] = useState("temperature");
  const [value, setValue] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!value || !timestamp) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/readings", {
        sensor,
        value: parseFloat(value),
        timestamp,
      });

      alert("Reading added successfully!");
      setValue("");
      setTimestamp("");
      onDataAdded();
    } catch (error) {
      alert("Error adding reading");
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "15px", border: "1px solid gray", borderRadius: "8px" }}>
      <h3>Add Sensor Reading</h3>

      <form onSubmit={handleSubmit}>
        <label>Sensor Type:</label>
        <select value={sensor} onChange={(e) => setSensor(e.target.value)}>
          <option value="temperature">Temperature</option>
          <option value="moisture">Moisture</option>
          <option value="voltage">Voltage</option>
        </select>

        <br /><br />

        <label>Value:</label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <br /><br />

        <label>Timestamp:</label>
        <input
          type="text"
          placeholder="YYYY-MM-DD HH:MM:SS"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Reading</button>
      </form>
    </div>
  );
}

export default SensorForm;

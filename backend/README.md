# Sensor API (Flask + SQLite)

A lightweight **REST API backend** built using **Flask** and **SQLite** for storing and managing environmental sensor readings.

This project is inspired by the **UCSC OSRE / ENTS (Environmental NeTworked Sensor)** platform, which focuses on collecting sensor readings (temperature, moisture, voltage, etc.) and visualizing them for analysis.

The API supports adding sensor readings, querying them by sensor type, and exporting data as CSV.

---

## Features

- Add sensor readings (sensor, value, timestamp)
- Fetch sensor readings (with optional filtering by sensor type)
- Export readings as CSV file
- SQLite database storage using SQLAlchemy ORM
- Modular folder structure (routes, models, utilities)

---

## Tech Stack

- **Python**
- **Flask**
- **Flask-SQLAlchemy**
- **Flask-CORS**
- **SQLite**

---

## Project Structure

```

sensor-api/
│── app/
│ │── models/
│ │ └── reading.py
│ │
│ │── routes/
│ │ └── readings.py
│ │
│ │── utils/
│ │ └── csv_export.py
│ │
│ │── **init**.py
│ │── config.py
│ │── database.py
│
│── run.py
│── requirements.txt
│── readme.md

```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/kavitaprj2006/sensor-api.git
cd sensor-api
```

### 2. Create virtual environment

```bash
python -m venv venv
```

Activate it:

#### Windows

```bash
venv\Scripts\activate
```

#### Linux/Mac

```bash
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the server

```bash
python run.py
```

The API will run on:

```
http://127.0.0.1:5000
```

---

## API Endpoints

### Add Sensor Reading

**POST** `/api/readings`

Example request body:

```json
{
  "sensor": "temperature",
  "value": 25.5,
  "timestamp": "2026-02-10 13:30:00"
}
```

Example response:

```json
{
  "message": "Reading added successfully",
  "reading": {
    "id": 1,
    "sensor": "temperature",
    "value": 25.5,
    "timestamp": "2026-02-10 13:30:00"
  }
}
```

---

### Get Sensor Readings

**GET** `/api/readings`

Optional query parameter:

- `sensor` (example: `temperature`)

Example:

```bash
GET /api/readings?sensor=temperature
```

Response:

```json
[
  {
    "id": 1,
    "sensor": "temperature",
    "value": 25.5,
    "timestamp": "2026-02-10 13:30:00"
  }
]
```

---

### Export Sensor Readings as CSV

**GET** `/api/readings/export/csv`

Optional query parameter:

- `sensor`

Example:

```bash
GET /api/readings/export/csv?sensor=temperature
```

This downloads:

`sensor_readings.csv`

---

## Example cURL Commands

### Add reading

```bash
curl -X POST http://127.0.0.1:5000/api/readings \
-H "Content-Type: application/json" \
-d "{\"sensor\":\"temperature\",\"value\":25.5,\"timestamp\":\"2026-02-10 13:30:00\"}"
```

### Fetch readings

```bash
curl http://127.0.0.1:5000/api/readings?sensor=temperature
```

### Export CSV

```bash
curl http://127.0.0.1:5000/api/readings/export/csv?sensor=temperature
```

---

## Purpose of This Project

This project is built as a preparation project for open source contribution programs like **UCSC OSRE / ENTS** and similar research-based open source initiatives.

It demonstrates:

- REST API design
- database integration using SQLAlchemy
- CSV export functionality (important for research datasets)
- clean backend folder structure and maintainable code organization

---

## Future Improvements (Planned)

- Pagination support for large datasets (`limit`, `offset`)
- Sensor reading statistics endpoint (min/max/avg)
- Better timestamp validation and format enforcement
- Authentication support (API key / JWT)
- Unit tests using PyTest
- Docker support for easy deployment

---

## Author

**Kavita**
GitHub: [https://github.com/kavitaprj2006](https://github.com/kavitaprj2006)

```



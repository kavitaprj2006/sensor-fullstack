# Sensor Full Stack Dashboard (Flask + React)

This is a full-stack sensor data dashboard project inspired by the **ENTS (Environmental NeTworked Sensor)** platform from UCSC OSRE.

The project includes:

✅ **Backend API** built with Flask + SQLite  
✅ **Frontend Dashboard** built with React + Recharts  
✅ Sensor readings visualization  
✅ CSV export functionality  

---

## Project Features

### Backend (Flask API)
- Add sensor readings
- Fetch readings by sensor type
- Get statistics (min/max/avg)
- Export readings as CSV
- SQLite database storage

### Frontend (React Dashboard)
- Sensor type selection (temperature / moisture / voltage)
- Add readings using a form
- View readings on a line chart
- Download CSV export from backend

---

## Tech Stack

### Backend
- Python
- Flask
- Flask-SQLAlchemy
- Flask-CORS
- SQLite

### Frontend
- React
- Axios
- Recharts

---

## Folder Structure

```

sensor-fullstack-dashboard/
│── sensor_api/                 # Flask Backend
│── sensor-dashboard/           # React Frontend
│── README.md

````

---

# Setup Instructions (Run Full Project)

## Step 1: Clone Repository

```bash
git clone https://github.com/your-username/sensor-fullstack-dashboard.git
cd sensor-fullstack-dashboard
````

---

# Backend Setup (Flask)

## Step 2: Go to backend folder

```bash
cd sensor_api
```

## Step 3: Create virtual environment

```bash
python -m venv venv
```

Activate it:

### Windows:

```bash
venv\Scripts\activate
```

### Linux/Mac:

```bash
source venv/bin/activate
```

## Step 4: Install dependencies

```bash
pip install -r requirements.txt
```

## Step 5: Run backend server

```bash
python run.py
```

Backend runs at:

```
http://127.0.0.1:5000
```

---

# Frontend Setup (React)

## Step 6: Open new terminal

Keep backend running and open another terminal.

## Step 7: Go to frontend folder

```bash
cd sensor-dashboard
```

## Step 8: Install dependencies

```bash
npm install
```

## Step 9: Run frontend server

```bash
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

# API Endpoints (Backend)

## Add Reading

POST `/api/readings`

Example JSON:

```json
{
  "sensor": "temperature",
  "value": 25.5,
  "timestamp": "2026-02-10 13:30:00"
}
```

---

## Get Readings

GET `/api/readings?sensor=temperature`

---

## Get Stats

GET `/api/stats?sensor=temperature`

---

## Export CSV

GET `/api/readings/export/csv?sensor=temperature`

---

# How to Run Both Together

### Terminal 1 (Backend)

```bash
cd sensor_api
python run.py
```

### Terminal 2 (Frontend)

```bash
cd sensor-dashboard
npm start
```

---

# Project Purpose

This project was created as practice for open source contribution programs such as OSRE / GSoC.

It demonstrates:

* REST API development using Flask
* Database usage with SQLAlchemy
* React frontend integration with backend API
* Data visualization dashboard development
* CSV export feature (important for research data)

---

# Future Improvements (Planned)

* Date range filtering (start/end date)
* Dashboard layout saving using URL parameters
* Chart customization options (color, axis labels, line width)
* Drag and drop charts
* Authentication support
* Deployment using Docker

---

# Author

kavita
GitHub: [https://github.com/kavitaprj2006](https://github.com/kavitaprj2006)

```


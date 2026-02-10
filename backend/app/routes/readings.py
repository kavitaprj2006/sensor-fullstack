from flask import Blueprint, request, jsonify, Response
from app.database import db
from app.models.reading import Reading
from app.utils.csv_export import generate_csv

readings_bp = Blueprint("readings", __name__)

@readings_bp.route("/readings", methods=["POST"])
def add_reading():
    data = request.get_json()

    sensor = data.get("sensor")
    value = data.get("value")
    timestamp = data.get("timestamp")

    if not sensor or value is None or not timestamp:
        return jsonify({"error": "sensor, value, and timestamp are required"}), 400

    reading = Reading(sensor=sensor, value=value, timestamp=timestamp)
    db.session.add(reading)
    db.session.commit()

    return jsonify({"message": "Reading added successfully", "reading": reading.to_dict()}), 201


@readings_bp.route("/readings", methods=["GET"])
def get_readings():
    sensor = request.args.get("sensor")

    query = Reading.query

    if sensor:
        query = query.filter_by(sensor=sensor)

    readings = query.all()
    return jsonify([r.to_dict() for r in readings])


@readings_bp.route("/readings/export/csv", methods=["GET"])
def export_readings_csv():
    sensor = request.args.get("sensor")

    query = Reading.query
    if sensor:
        query = query.filter_by(sensor=sensor)

    readings = query.all()
    csv_data = generate_csv(readings)

    return Response(
        csv_data,
        mimetype="text/csv",
        headers={"Content-Disposition": "attachment; filename=sensor_readings.csv"}
    )

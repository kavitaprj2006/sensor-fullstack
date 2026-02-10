from flask import Blueprint, request, jsonify
from app.models.reading import Reading

stats_bp = Blueprint("stats", __name__)

@stats_bp.route("/stats", methods=["GET"])
def get_stats():
    sensor = request.args.get("sensor")

    if not sensor:
        return jsonify({"error": "sensor parameter is required"}), 400

    readings = Reading.query.filter_by(sensor=sensor).all()

    if not readings:
        return jsonify({"error": "No readings found"}), 404

    values = [r.value for r in readings]

    return jsonify({
        "sensor": sensor,
        "min": min(values),
        "max": max(values),
        "avg": sum(values) / len(values),
        "count": len(values)
    })

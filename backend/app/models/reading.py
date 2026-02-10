from app.database import db

class Reading(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sensor = db.Column(db.String(50), nullable=False)
    value = db.Column(db.Float, nullable=False)
    timestamp = db.Column(db.String(50), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "sensor": self.sensor,
            "value": self.value,
            "timestamp": self.timestamp
        }

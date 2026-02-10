from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.database import db

from app.routes.readings import readings_bp
from app.routes.stats import stats_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)
    db.init_app(app)

    @app.route("/")
    def home():
      return "Sensor API is running!"


    with app.app_context():
        db.create_all()

    app.register_blueprint(readings_bp, url_prefix="/api")
    app.register_blueprint(stats_bp, url_prefix="/api")

    return app

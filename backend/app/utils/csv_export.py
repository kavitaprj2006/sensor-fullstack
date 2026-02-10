import csv
from io import StringIO

def generate_csv(readings):
    output = StringIO()
    writer = csv.writer(output)

    writer.writerow(["id", "sensor", "value", "timestamp"])

    for r in readings:
        writer.writerow([r.id, r.sensor, r.value, r.timestamp])

    return output.getvalue()

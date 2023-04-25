from flask import Flask, jsonify, request
from flask_cors import CORS
import init_db

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def submit_paragraph():
    if request.method == 'POST':
        data = request.json.get('paragraph')
        init_db.insert_data(data)
        print(data)
        return jsonify({'message':  'Paragraph submitted successfully!'}), 200
    else:
        return jsonify({'message': 'Method not allowed'}), 405

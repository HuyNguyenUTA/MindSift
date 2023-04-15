from flask import Flask, jsonify, request

app = Flask(__name__)

if __name__ == '__main__':
    app.run(host='localhost', port=5000)

@app.route('/', methods=['POST'])
def submit_paragraph():
    if request.method == 'POST':
        paragraph = request.json.get('paragraph')
        return jsonify({'message':  'Paragraph submitted successfully!'}), 200
    else:
        return jsonify({'message': 'Method not allowed'}), 405
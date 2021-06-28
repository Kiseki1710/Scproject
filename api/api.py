from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/api',methods=['POST'])
def api():
    print(request.json)
    return request.json

if (__name__) == '__main__':
    app.run(debug=True)

from flask import Flask, render_template, request, redirect
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

def totextFile(text):
    textfile = "./challenges.txt"
    with open("textfile.txt", "a+")as foo:
        foo.write(str(text) + "\n" )

@app.route("/")
def helloworld():
    return render_template("index.html")
    

@app.route("/", methods=["POST"])
def index_post():
    text = request.form['text']
    totextFile(text)
    return "success"

    
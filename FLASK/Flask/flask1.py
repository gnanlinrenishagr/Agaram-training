from flask import Flask;
from flask import render_template;
from flask_cors import CORS
app=Flask(__name__)    # ---instance created Flask is a class
CORS(app)
@app.route('/welcome') # ---route1
def add ():
    return "welcome"

@app.route('/page1')    # ---route2
def add1 ():
    return "<h1><marquee>HI</marquee></h1>"

@app.route('/user/<name>')    # ---route3
def add2 (name):
    return name

@app.route('/hello/<name>')
def hello_name(name):
   return 'Hello %s!' % name

@app.route("/contact/<name>")
def renderHtml(name):
    teammates=["Sheik","delma","abisha","shali"]
    return render_template("home.html",name=name,teammates=teammates)


# flask --app flask1 run ----changes made then exit and run again
# flask --app flask1 --debug run ----for running without exiting after changes just refresh



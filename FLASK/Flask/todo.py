from flask import Flask,render_template,request;

app=Flask(__name__)    # ---instance created Flask is a class ,this is a object.

list=[]

@app.route("/todo",methods=["GET","POST"])
def todoList():
    if request.method=="POST" and  request.form["list_items"].strip()!="":
        list.append(request.form["list_items"])

    return render_template("todo.html",itemList=list)



@app.route("/delete/<item>")
def delete(item):
    list.remove(item)
    return render_template("todo.html",itemList=list)


@app.route("/updatepage/<index>",methods=["GET","POST"])
def update(index):
    if request.method=="POST" and  request.form["update_items"].strip()!="":
        list[int(index)]=request.form["update_items"]
        return render_template("todo.html",itemList=list)
    else:
        return render_template("update.html",index=index,itemList=list)



if __name__=="__main__":
    app.run(debug=True)

# method used to run the app in terminal using python3 todo.py
#  -- here file name "__name__" changes to "__main__" when executing so we are using this condition

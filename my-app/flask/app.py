from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import tensorflow as tf
import os

model = tf.keras.models.load_model("breast_model.h5")
dic={0 :"IDC Positive", 1 : "IDC Negative"}

##img=Image.open('static//class1.png').convert('RGB')
##img=img.resize((50,50),resample=Image.BILINEAR)
##img=np.array(img,dtype=np.float32)/255.0
##test_img=np.expand_dims(img,axis=0)
##pre=model.predict(test_img)
##pred=dic[np.argmax(pre)]
##print(pred)

#prediction
def predict_label(path):
    img=Image.open(path).convert('RGB')
    if img is None:
        return "not a image"
    img=img.resize((50,50),resample=Image.BILINEAR)
    img=np.array(img,dtype=np.float32)/255.0
    if img.shape != (50,50,3):
        return "exp not a image"
    test_img=np.expand_dims(img,axis=0)
    if test_img is not None:
        pre=model.predict(test_img)
    else:
        return path
    pred = dic[np.argmax(pre)]
    return pred


app = Flask(__name__)

# Define a route for your homepage
@app.route('/', methods=['GET'])
def hello_world():
    return jsonify({"members": ["mem1","mem2"]})

# Define a route for uploading an image

@app.route('/predict', methods=['POST','GET'])
def predict():
    img = request.files['my_image']
    img_path = os.path.join("static", img.filename)
    img.save(img_path)
    pred = predict_label(img_path)
    return jsonify({"Prediction": pred})


if __name__ == '__main__':
    app.run(port=3000, debug=True)

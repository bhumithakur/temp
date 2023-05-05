import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/predict').then((response)=>{
      console.log(response);
    })
  },[]);
  const [prediction, setPrediction] = useState('');

  function handleImageUpload(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('my_image', file); // Set the key as "my_image"

    axios.post('http://127.0.0.1:5000/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
       console.log(response);
       setPrediction(response.data.Prediction); // Set the prediction state
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div>
      <h1>Breast Cancer Detection</h1>
      <input type="file" onChange={handleImageUpload} />
      {prediction && <p>{prediction}</p>}
    </div>
  );
}

export default App;

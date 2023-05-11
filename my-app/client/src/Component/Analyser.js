import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar1 from "./Navbar1"
import { Helmet } from 'react-helmet';
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import bgd1 from "./unsplash_tV-RX0beDp8.png"


{/* <Helmet>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.13.3/dist/tf.min.js"></script>
  <script src="jscript/met_cancer_classes.js"></script>
  <script src="jscript/breast_cancer_classes.js"></script>
  <script src="jscript/app_startup_code.js"></script>
  <script src="jscript/met_cancer_analyzer.js"></script>
  <script src="jscript/breast_cancer_analyzer.js"></script>
</Helmet> */}
function App() {
    const[files,setFile] = useState();
  const navigate = useNavigate();
  function handleChange(event){
    setFile(event.target.files);
   // console.log(event.target.files[0]);

}
function handleUpload(){
const formData = new FormData()
for(let i =0 ; i< files.length; i++)
 formData.append(`images[${i}]`, files[0])

}
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
  function getInfo(){
    return navigate("/selfcheck");
  }
 
return (
        <div className="relative bg-lavenderblush w-full h-[162.5rem] overflow-hidden text-left text-[0.94rem] text-black font-poppins">
            <div className="absolute top-[132.38rem] left-[0rem] bg-gray-300 w-screen h-[30.13rem]" />
            <div className="absolute top-[144.56rem] left-[11.44rem] leading-[1.5rem] text-justify inline-block w-[19.06rem]">
                joint replacement is a surgery to replace a knee joint with a man made
                artificial joint. a knee joint with a man-made artificial joint.
            </div>
            <div className="absolute top-[152.19rem] left-[18rem] w-[2.56rem] h-[2.56rem] text-[1.13rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-gray-300 w-[2.56rem] h-[2.56rem]" />
                <b className="absolute top-[0.56rem] left-[0.81rem] [background:linear-gradient(180deg,_#6eace2,_#5a9ad2_99.98%,_rgba(16,_28,_38,_0.18)_99.99%,_rgba(0,_0,_0,_0),_#1a72bf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    in
                </b>
            </div>
            <b className="absolute top-[140.25rem] left-[53.25rem] text-[1.13rem]">
                Support
            </b>
            <b className="absolute top-[140.25rem] left-[68.88rem] text-[1.13rem]">
                Contact
            </b>
            <div className="absolute top-[147.13rem] left-[36.81rem]">About Us</div>
            <div className="absolute top-[144.63rem] left-[36.81rem]">Home</div>
            <div className="absolute top-[149.63rem] left-[36.81rem]">user</div>
            <div className="absolute top-[152.13rem] left-[36.81rem]">{`Doctor `}</div>
            <div className="absolute top-[154.63rem] left-[36.81rem]">
                Terms of Use
            </div>
            <div className="absolute top-[144.63rem] left-[53.25rem]">
                Support Center
            </div>
            <div className="absolute top-[144.63rem] left-[68.88rem]">
                +1826535375535
            </div>
            <div className="absolute top-[146.94rem] left-[68.88rem]">
                +1843228662422
            </div>
            <div className="absolute top-[149.63rem] left-[68.88rem]">
                call@medicahealth.com
            </div>
            <div className="absolute top-[147.13rem] left-[53.25rem]">
                24x7 Service
            </div>
            <div className="absolute top-[149.63rem] left-[53.25rem]">Quick Chat</div>
            <div className="absolute top-[152.25rem] left-[14.68rem] w-[2.53rem] h-[2.53rem]">
                <div className="absolute top-[0rem] left-[0rem] w-[2.53rem] h-[2.53rem]">
                    <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-gray-300 w-[2.53rem] h-[2.53rem]" />
                </div>
                <img
                    className="absolute top-[0.61rem] left-[0.57rem] w-[1.38rem] h-[1.38rem] overflow-hidden"
                    alt=""
                    src="/icons8twitter-1.svg"
                />
            </div>
            <img
                className="absolute top-[153.02rem] left-[12.41rem] w-[0.55rem] h-[1.09rem]"
                alt=""
                src="/f.svg"
            />
            <img
                className="absolute top-[137.06rem] left-[11.44rem] w-[5.75rem] h-[6.31rem] object-cover"
                alt=""
                src="/whatsapp-image-20230406-at-1940-21@2x.png"
            />
            <Navbar1/>
            {/* <nav className="absolute top-[1.19rem] left-[32.94rem] w-[53.69rem] h-[3.31rem]">
                <button className="cursor-pointer [border:none] p-0 bg-deeppink absolute top-[0.38rem] left-[45.19rem] w-[8.5rem] h-[2.94rem]" />
                <b className="absolute top-[1rem] left-[18.13rem] text-[1.13rem] font-poppins text-gray-200 text-left">
                    About us
                </b>
                <b className="absolute top-[1rem] left-[12.19rem] text-[1.13rem] font-poppins text-gray-200 text-left">
                    Home
                </b>
                <b className="absolute top-[1rem] left-[40.19rem] text-[1.13rem] font-poppins text-gray-200 text-left">
                    Login
                </b>
                <b className="absolute top-[1rem] left-[47.19rem] text-[1.13rem] font-poppins text-light-background-color text-left">
                    Sign Up
                </b>
                <b className="absolute top-[1rem] left-[26.63rem] text-[1.13rem] font-poppins text-gray-200 text-left">
                    User
                </b>
                <b className="absolute top-[1rem] left-[32.44rem] text-[1.13rem] font-poppins text-deeppink text-left">{`Doctor `}</b>
            </nav> */}
            <img
                className="absolute top-[0.69rem] left-[1.31rem] w-[6.5rem] h-[6.13rem] object-cover"
                alt=""
                src="/whatsapp-image-20230406-at-1940-1@2x.png"
            />
            <img
                className="absolute top-[73.69rem] left-[45.38rem] w-[0.95rem] h-[1.02rem]"
                alt=""
                src="/group.svg"
            />
            <img
                className="absolute top-[6.81rem] left-[0rem] w-screen h-[44.5rem] object-cover opacity-[0.5]"
                alt=""
                src= {bgd1}
            />
            <div className="absolute top-[1.69rem] left-[10.94rem] w-[37.83rem] h-[42.62rem] text-[1.5rem] font-open-sans">
            <u className="absolute top-[29.88rem] left-[2.22rem] text-[1.13rem] leading-[2.5rem] inline-block w-[35.61rem] h-[12.74rem]">
                    <p className="m-0">AI can predict the type of cancer within seconds.</p>
                    <p className="m-0">Easy to use.</p>
                    <p className="m-0">Saves time and efforts.</p>
                    <p className="m-0">Gives fair results.</p>
                </u>
              
                 
                <b className="@apply absolute w-[978px] h-[154px] not-italic font-extrabold text-[58px] 
                leading-[77px] text-[#E3008D] left-[115px] top-[234px] font-Playfair-Display ;
   ">
                  {`Hello Doctor!
Now check the type of cancer with AI`}</b>
                 
                 {/* AI can predict the type of cancer within seconds.Easy to use.
Saves time and efforts.
Gives fair results. */}


               
            </div>
            <div className="absolute top-[83.75rem] left-[0rem] w-screen h-[48.63rem] text-center text-[1.88rem] text-gray-300 font-open-sans">
                <img
                    className="absolute top-[0rem] left-[0rem] w-screen h-[48.63rem] object-cover"
                    alt=""
                    src="/group-45@2x.png"
                />
                <div className="absolute top-[5.81rem] left-[26.43rem] w-[33.74rem] h-[34.66rem]">
                    <div className="absolute top-[4.3rem] left-[0rem] w-[33.74rem] h-[0rem]" />
                    <div className="absolute top-[0rem] left-[7.18rem] tracking-[0.2em] capitalize inline-block w-[19.4rem] h-[5.51rem]">
                        Book a Free Consultation
                    </div>
                    <div className="absolute top-[7.19rem] left-[1.73rem] text-[1rem] leading-[1.56rem] font-light font-roboto text-thistle inline-block w-[29.88rem] h-[1.68rem]">
                        Complete the form below and we will get back to you shortly to
                        schedule an appointment
                    </div>
                    <div className="absolute top-[13.3rem] left-[6.43rem] w-[20.5rem] h-[21.36rem]">
                        <Button
                            className="absolute top-[17.26rem] left-[5.13rem]"
                            sx={{ width: 163.36398315429688 }}
                            variant="contained"
                            color="primary"
                        >
                            ENQUIRE NOW
                        </Button>
                        <TextField
                            className="[border:none] bg-[transparent] absolute top-[6.72rem] left-[0rem]"
                            sx={{ width: 327.989501953125 }}
                            color="primary"
                            variant="filled"
                            type="text"
                            label="Message"
                            placeholder="Placeholder"
                            size="medium"
                            margin="none"
                        />
                        <input
                            className="[border:none] font-light font-roboto text-[0.88rem] bg-[transparent] absolute top-[3.36rem] left-[10.64rem] w-[9.86rem] h-[3.69rem]"
                            type="text"
                            placeholder="Phone Number"
                        />
                        <select className="absolute top-[0rem] left-[10.64rem] w-[9.86rem] h-[3.69rem]" />
                        <input
                            className="[border:none] font-light font-roboto text-[0.88rem] bg-[transparent] absolute top-[3.36rem] left-[0rem] w-[9.86rem] h-[3.69rem]"
                            type="text"
                            placeholder="Email Address"
                        />
                        <textarea
                            className="[border:none] bg-[transparent] font-light font-roboto text-[0.88rem] absolute top-[0rem] left-[0rem] w-[9.86rem] h-[3.69rem]"
                            placeholder="First Name"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute top-[47.19rem] left-[0rem] w-screen h-[51.25rem] text-[1.25rem] text-light-background-color font-dm-serif-display">
                <div className="absolute top-[0rem] left-[0rem] w-screen h-[51.25rem]">
                    <div className="absolute top-[0rem] left-[0rem] w-screen h-[47.06rem]">
                        <img
                            className="absolute top-[0rem] left-[0rem] w-screen h-[40.88rem]"
                            alt=""
                            src="/rectangle-13.svg"
                        />
                         
                         
                    </div>
                </div>
                 
                
                 
                <div className="absolute top-[7.49rem] left-[5.63rem] w-[0rem] h-[27.96rem]" />
                <div className="absolute bottom-[15.05rem] left-[calc(50%_-_636.67px)] w-[2.34rem] h-[2.05rem]" />
                 <p className='@apply absolute pt-12 px-6 w-[1394px] h-[234px] not-italic font-bold text-[41px] leading-[62px] text-white left-[21px] top-[1225px];
  font-Poppins'>Upload the clear image of your Histopathological  sample on our website and get the results.</p>
                
                < div
                    className="absolute top-[20.74rem] left-[35.99rem] w-[19rem] h-[14.39rem] object-cover">
                     
                    <span className="[line-break:anywhere] w-full">
                      {/* <form onSubmit = {handleUpload}> */}
                      <input type="file" onChange={handleImageUpload} />
                     {/* <button onClick = {handleUpload}>save</button> */}
                    {/* </form> */}
                        {/* <span className="font-medium">{`Browse `}</span>
                        <span>to upload</span> */}
                      </span>
                   
                 <div className='@apply absolute text-bold w-[876px] h-12 not-italic font-normal text-5xl leading-[60px] tracking-[0.2em] text-[#80265E] left-[19px] top-[1269px];
  font-DM Serif Display'>
                    <p>Results: The type of cancer diagnosed is:  {prediction && <p className='text-white text-bold'>{prediction}</p>}</p>
                 </div>
                
                <img
                    className="absolute top-[79.98rem] left-[52.15rem] w-[19.13rem] h-[14.06rem] object-cover hidden"
                    alt=""
                    src="/17808202-5911098-1@2x.png"
                />
            </div>
        </div>
        </div>
    );
    
  
        
     
   
}

export default App;

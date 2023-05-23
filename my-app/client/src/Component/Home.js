import React from 'react';
import './Home.css';
import HomeCard from './HomeCard';
import Guide from './Guide';
import TimeLine from './TimeLine';
import  Card  from './Card';
import  Navbar1 from './Navbar1';
import breast1 from './breastc1.png'
import bg5 from "./bg5.svg";
import bg6 from "./bg7.svg"
import i1 from "./i1.png"
import i2 from "./i2.png";
import i3 from "./i3.png"
import DocSection from './DocSection';
import Footer from './Footer';
import  last1 from "./Frame 19 (1).png";
import last2 from "./Frame 19.png";
import last3 from "./Frame 21.png";

function Home() {
  return (
    <>
    <TimeLine />
    <Navbar1 />
    <div className="main ">  
     
      <div className='main1 w-screen' style={{backgroundImage: `url(${bg5})` }}>
        <div className='main2'>
          <div className='main3'>
            <h2 className='head mt-0 my-0 '>
              DIAGONOSE.  
              RECOVER.
              REGENERATE.
            </h2>
            
            <p className='para'> "Join the fight against breast cancer: raising awareness, promoting prevention, and supporting survivors.".</p>
            <div className='flex'>
            <button className='btn'> 
            
              <span className="btn_content">GET STARTED NOW</span> 
            </button>
            <button className='btn'> 
            
            <span className="btn_content">GET STARTED NOW</span> 
          </button>
          </div>
          </div>
        </div>
      </div>
      
      <div>
      <div className="flex" style={{backgroundImage: `url(${bg6})` }}>
       
      <HomeCard  img ={i1} heading= "Self Check" content = "The app teaches the user to do a step-by-step breast self exam. It helps you understand what is “normal” for you and understand your body better because prevention is better than cure." bgColor = "pink-400"  to = "./selfcheck"/>
       <HomeCard  img={i2} heading= "Estimate Cancer" content = "For doctors and technical assistances we provide the tool 'Breast Cancer Analyser', that accepts Histopathological Image of the breasts along with the prediction type to give the results" bgColor ="pink-100" to = "./analyser"/>
        <HomeCard  img={i3} heading= "Regeneration" content = "It helps in enabling plastic surgeons to recreate a natural shape in breast reconstruction for breast cancer patients. With the help of a 3-D model we can see how the breasts look after and before regenration." bgColor ="pink-100" to = "./regenerate"/>
        

      </div>
      <div className='mt-0 '>
      <Guide/>
      </div>
      <div className='flex space-x-0 mt-0'>
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      <div className='mx-0'>
    <DocSection/>
    </div>
    <img className='mx-32' src={last1}/>
    <img className='mt-24 w-screen' src={last2}/>
    <img className='mt-24 w-screen' src={last3}/>
    {/* <TimeLine /> */}
      </div>
    </div>
    
    {/* <footer className='top-[10rem]'>
    <div className="absolute top-[360.5rem] left-[11.44rem] leading-[1.5rem] text-justify inline-block w-[19.06rem]">
                joint replacement is a surgery to replace a knee joint with a man made
                artificial joint. a knee joint with a man-made artificial joint.
            </div>
            <div className="absolute top-[368.13rem] left-[18rem] w-[2.56rem] h-[2.56rem] text-[1.13rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-gray-300 w-[2.56rem] h-[2.56rem]" />
                <b className="absolute top-[0.56rem] left-[0.81rem] [background:linear-gradient(180deg,#6eace2,#5a9ad2_99.98%,rgba(16,_28,_38,_0.18)_99.99%,_rgba(0,_0,_0,_0),#1a72bf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    in
                </b>
            </div>
            <b className="absolute top-[356.19rem] left-[53.25rem] text-[1.13rem]">
                Support
            </b>
            <b className="absolute top-[356.19rem] left-[68.88rem] text-[1.13rem]">
                Contact
            </b>
            <div className="absolute top-[363.06rem] left-[36.81rem]">About Us</div>
            <div className="absolute top-[360.56rem] left-[36.81rem]">Home</div>
            <div className="absolute top-[365.56rem] left-[36.81rem]">user</div>
            <div className="absolute top-[368.06rem] left-[36.81rem]">{`Doctor `}</div>
            <div className="absolute top-[370.56rem] left-[36.81rem]">
                Terms of Use
            </div>
            <div className="absolute top-[360.56rem] left-[53.25rem]">
                Support Center
            </div>
            <div className="absolute top-[360.56rem] left-[68.88rem]">
                +1826535375535
            </div>
            <div className="absolute top-[362.88rem] left-[68.88rem]">
                +1843228662422
            </div>
            <div className="absolute top-[365.56rem] left-[68.88rem]">
                call@medicahealth.com
            </div>
            <div className="absolute top-[363.06rem] left-[53.25rem]">
                24x7 Service
            </div>
            <div className="absolute top-[365.56rem] left-[53.25rem]">Quick Chat</div>
            <div className="absolute top-[368.19rem] left-[14.68rem] w-[2.53rem] h-[2.53rem]">
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
                className="absolute top-[368.96rem] left-[12.41rem] w-[0.55rem] h-[1.09rem]"
                alt=""
                src="/f.svg"
            />
            <img
                className="absolute top-[353rem] left-[11.44rem] w-[5.75rem] h-[6.31rem] object-cover"
                alt=""
                src="/whatsapp-image-20230406-at-1940-2@2x.png"
            />
    </footer> */}
    </>
  );
}

export default Home;
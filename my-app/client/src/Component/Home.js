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

function Home() {
  return (
    <>
    <TimeLine />
    <Navbar1 />
    <div className="main ">  
     
      <div className='main1 w-full' style={{backgroundImage: `url(${bg5})` }}>
        <div className='main2'>
          <div className='main3'>
            <h2 className='head mt-0 my-0 '>
              DIAGONOSE.  
              RECOVER.
              REGENERATE.
            </h2>
            
            <p className='para'>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <div className='flex'>
            <button className='btn'> 
            
              <span className="btn_content">BOOK A FREE CONSULTATION</span> 
            </button>
            <button className='btn'> 
            
            <span className="btn_content">BOOK A FREE CONSULTATION</span> 
          </button>
          </div>
          </div>
        </div>
      </div>
      
      <div>
      <div className="flex" style={{backgroundImage: `url(${bg6})` }}>
       
      <HomeCard  img ={i1} heading= "Self Check" content = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique auctos, um viton aeeget massa. Felis scelerisque dolor phasellus " bgColor = "pink-400" />
       <HomeCard  img={i2} heading= "Estimate Cancer" content = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique auctos, um viton aeeget massa. Felis scelerisque dolor phasellus " bgColor ="pink-100"/>
        <HomeCard  img={i3} heading= "Regeneration" content = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique auctos, um viton aeeget massa. Felis scelerisque dolor phasellus " bgColor ="pink-100"/>
        

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
    <TimeLine />
      </div>
    </div>
    </>
  );
}

export default Home;
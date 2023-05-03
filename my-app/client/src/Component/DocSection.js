import React from 'react';
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc4 from "./doc4.png";
import b8 from './bg8.jpg';
import hug from "./hug1.svg"

function DocSection() {
  return (
    <>
   
    <div className='flex'>
      <div className='mx-0 flex'>
        <img className='mx-3 w-72 h-1/5' src={doc1}/>
        
      </div>
      <div className="pead">
    
        <h1 className=  '@apply w-[789px] h-16 italic font-normal text-[55px] leading-[64px] flex items-center text-[#1F1F1F] left-[2000px] top-[3222px]'>WHAT WE DO </h1>
        <p className=' @apply w-[800px] h-[134px] not-italic font-normal text-base leading-7 text-[#656B6C] left-[1600px] top-[3402px];
  font-family: "Proxima Nova"'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does a eiusmod tempor. There are many variations of passages of available but majority have suffered alteration in some form, by humour or randomised words which don't look even believable. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does a eiusmod tempor. There are many variations of passage.</p>
    <button className=' @apply w-[289px] box-border flex flex-row items-start gap-2.5 absolute w-[119px] h-14 border px-5 py-[15px] rounded-md border-solid border-[#E3008D] left-[805px]'>
       <span className='@apply w-[90px] h-[26px] italic font-normal text-base leading-[26px] flex items-center text-[#E3008D] flex-none order-none grow-0;
  font-family: "DM Serif Display"'> Learn More</span>
        </button>
    </div>
    </div>
   
    
    </>
  );
}

export default DocSection;

import React from 'react'
import step1 from "./bstep1.webp";
import step2 from "./bstep2.webp";
import step3 from "./bstep3.webp";
import step4 from "./bstep4.webp";
import step5 from "./bstep5.webp";
import frame1 from './frame1.svg'
import '../index.css';
function Guide() {
  return (
    <>
        <div>
        <h1 className="text-5xl text-pink-500 font-bold  mx-96 mr-32 my-5 hover:decoration-dashed font-sans">Your One Stop Guide</h1>
        </div>
        <div className="@apply mb-0 w-full h-[550px] left-[70px] top-[1868px]" style={{backgroundImage: `url(${frame1})` }}>
            
                <h1 className='pt-20 pl-16 @apply w-[569px] h-[234px] not-italic font-bold text-[41px] leading-[62px] text-white left-[162px] top-[1910px];
  font-family: "Poppins"'>Health always begins with a healthy life style. Being healthy will makes you happier.</h1>
             <div className='flex'>
             <div className='flex ml-0'>
                <div>
                  <h1 className='pt-32  @apply w-[142.97px] h-[30px] not-italic font-bold text-[98px] leading-[30px] text-white left-[118px] top-[2294px];
  font-family: "Poppins"'>01</h1>
                  </div>
                <div>
             <p className='pt-32 @apply   w-[467.28px] h-9 not-italic font-bold text-2xl leading-9 text-white left-[260.97px] top-[2236px];
  font-family: "Poppins"'>Keep Your Health Record On track</p>
              
             <button className='mt-16 ml-12 @apply w-[315px] h-[83px] rounded-[20px] border-[3px] box-border  border-solid border-[#E3008D] 
  background: #ef85c5'> <span className='text-white text-bold-l'> Diagonis Tests Reports,Schedule</span></button>
                </div>
             </div>
             <div className='flex ml-0'>
                <div>
                  <h1 className='pt-32  @apply w-[142.97px] h-[30px] not-italic font-bold text-[98px] leading-[30px] text-white left-[118px] top-[2294px];
  font-family: "Poppins"'>02</h1>
                  </div>
                <div>
             <p className='pt-32 @apply   w-[467.28px] h-9 not-italic font-bold text-2xl leading-9 text-white left-[260.97px] top-[2236px];
  font-family: "Poppins"'>Serving As a Community For You</p>
              
             <button className='mt-16 ml-12 @apply w-[315px] h-[83px] rounded-[20px] border-[3px] box-border  border-solid border-[#E3008D] 
  background: #ef85c5'> <span className='text-white text-bold-l'> Find Support Groups</span></button>
                </div>
             </div>
             {/* <div className='flex'>
                <div>
                  <h1 className='text-5xl'>01</h1>
                  </div>
                <div>
             <p>Keep Your Health Record On track</p>
             <p>Keep Your Health Record On track</p>
             <button>check now</button>
                </div>
             </div> */}
             </div>
        </div>
        
             
         
            
      
  
     </>
  )
}

export default Guide
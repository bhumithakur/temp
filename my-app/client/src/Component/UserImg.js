import React from 'react'
import frame1 from './frame1.svg'
import svg1 from "./is it right for you.svg";
import user1 from "./user1.png";
import user2 from "./user2.png";
import user3 from "./user3.png";

function UserImg(props) {
  return (
    <>
      <div className='flex'>
        <div>
          <p className='ml-0 pb-0 pt-16 @apply  italic font-normal text-[30px] leading-[60px] tracking-widest text-[rgba(255,255,255,0.85)] font-family: "DM Serif Display"'>{props.step}</p>
          <p className='ml-0 py-0 @apply w-[311px] h-14 not-italic font-normal text-xl leading-[60px] tracking-widest text-[#80265E] font-family: "DM Serif Display"'>{props.head}</p>
          <p className='ml-0 py-0 @apply w-[574px] h-[60px] not-italic font-medium text-l leading-[30px] tracking-widest text-white font-family: "Poppins"'>{props.content}</p>
          <button className='ml-0 pb-0  @apply box-border w-[110px] h-10 border shadow-[0px_4px_40px_rgba(177,146,65,0.6)] rounded-[10px] border-solid border-[rgba(255,255,255,0.85)] background: linear-gradient(90deg, #e3008d 0%, #fba9d8 48.46%, #ec52b2 100%)'>check now</button>
        </div>
        <div className='py-0 @apply w-1/6  h-[165px] left-[839px] '>
          <img src={props.user}></img>
        </div>
      </div>
    </>
  )
}

export default UserImg

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { CheckIcon } from "@heroicons/react/24/outline";
  import i2 from "./i2.png"
  import { useNavigate } from "react-router-dom";
  
  export default function Example(props) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(props.to);
    };
    const { color } = props;
  
    // set the buttonColor to white if the card color is pink, otherwise set it to pink
    const buttonColor = color === "pink" ? "white" : "pink-400";
  
    // set the contentColor to pink if the card color is pink, otherwise set it to white
    const contentColor = color === "pink" ? "white" : "black";
    const buttonContentColor = color === "pink" ? "pink-400" : "pink-400" ; 
     
  
    return (
        <>
        <div className=" @apply rounded-[9.41964px] left-[73px] top-[1877px];
  background: #eb61b4 w-full max-w-[20rem] p-8 m-[1100px] mx-16 bg-pink-300  mb-48">
    <div class="icon mx-24">
            <img src= {props.img} width="60" height="60" alt="S" />
            </div>
            <h1 className="@apply not-italic font-semibold text-[22.6071px] leading-[34px] text-white items-center mx-4 mr-0
   " >{props.heading}</h1>
            <p className="@apply not-italic font-normal text-l leading-[203%] text-center text-white"> {props.content}
              </p>
             <button onClick={() => handleClick(props.to)} className=" @apply w-[199px] h-[46px] border shadow-[0px_4px_40px_rgba(177,146,65,0.6)] rounded-[10px] border-solid border-white left-[605px] top-[1396px];
  background: linear-gradient(90deg, #ef58b4 0%, #faa4d6 48.46%, #ed57b4 100%) mx-9 box-border mt-3 bg-white">Check Now </button>
        </div>
        </>
        
    
    );
  }
  
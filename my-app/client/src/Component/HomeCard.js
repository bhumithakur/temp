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
  
  export default function Example(props) {
    const { color } = props;
  
    // set the buttonColor to white if the card color is pink, otherwise set it to pink
    const buttonColor = color === "pink" ? "white" : "pink-400";
  
    // set the contentColor to pink if the card color is pink, otherwise set it to white
    const contentColor = color === "pink" ? "white" : "black";
    const buttonContentColor = color === "pink" ? "pink-400" : "pink-400" ; 
    // const buttonBgColor = color === "pink" ? " @apply border shadow-[0px_4px_40px_rgba(177,146,65,0.6)] border-solid border-white;
    // background: linear-gradient(90deg, #ef58b4 0%, #faa4d6 48.46%, #ed57b4 100%);" : "pink-400";
  
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
             <button className=" @apply w-[199px] h-[46px] border shadow-[0px_4px_40px_rgba(177,146,65,0.6)] rounded-[10px] border-solid border-white left-[605px] top-[1396px];
  background: linear-gradient(90deg, #ef58b4 0%, #faa4d6 48.46%, #ed57b4 100%) mx-9 box-border mt-3 bg-white">Check Now</button>
        </div>
        </>
        
    //   <Card
    //     className={`border-black-400 w-full max-w-[20rem] p-8 m-[1100px] mx-16 bg-${color}-400  mb-0`}
    //   >
    //     <CardHeader
    //       floated={false}
    //       shadow={false}
    //       color="transparent"
    //       className="m-0 mb-8 rounded-none border-black border-pink/10 pb-8 text-center"
    //     >
    //       <Typography
    //         variant="small"
    //         color={contentColor}
    //         className="font-normal uppercase"
    //       >
    //         {props.step}
    //       </Typography>
    //       <Typography
    //         variant="h1"
    //         color="white"
    //         className="mt-6 flex justify-center gap-1 text-7xl font-normal"
    //       >
    //         <div class="icon">
    //           <img src= {i2} width="60" height="60" alt="S" />
    //         </div>
    //       </Typography>
    //     </CardHeader>
    //     <CardBody className="p-0">
    //       <p className={`px-2 py-2 text-${contentColor}`}>
    //         We primarily provide the tool of Breast Cancer Analyser, that accepts Histopathological Image of the breasts along with the prediction type to give the results with the help of AI/ML.
    //       </p>
    //     </CardBody>
    //     <CardFooter className="mt-12 p-0">
    //       <Button
    //         size="lg"
    //         color={buttonColor} // set the color of the button to the buttonColor variable
    //         className={`mx-7 text-${buttonContentColor} hover:scale-[1.02] focus:scale-[1.02] active:scale-100 @apply border shadow-[0px_4px_40px_rgba(177,146,65,0.6)] border-solid border-${buttonColor}  @apply border shadow-[0px_4px_40px_rgba(177,146,65,0.6)] border-solid border-white;
    //         background: linear-gradient(90deg, #ef58b4 0%, #faa4d6 48.46%, #ed57b4 100%) `}
    //         ripple={false}
    //         fullWidth={true}
    //       >
    //         Check Now
    //       </Button>
    //     </CardFooter>
    //   </Card>
    );
  }
  
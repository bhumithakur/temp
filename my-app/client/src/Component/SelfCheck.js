import React from "react"
import Typewriter from "typewriter-effect";
 import selfCheck1 from "./selfcheck1.avif";
 import step1 from "./bstep1.webp";
 import step2 from "./bstep2.webp";
 import step3 from "./bstep3.webp";
 import step4 from "./bstep4.webp";
 import step5 from "./bstep5.webp";
 import Navbar1 from "./Navbar1";
import '../index.css';
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";

 
function SelfCheck(){

    const { isAuthenticated } = useAuth0();
    toast("Wow so easy!" );
    return isAuthenticated ? (
        <>
       
        <Navbar1 />
        <div className="w-full p-20 bg-white-100  flex">
            <div className="mt-48">
        <h1 className='absolute flex items-end text-pink-400  font-normal font-AksaraBaliGalang text-5xl'> You  are here because  </h1>
        </div>
            <div className=" w-1/2 p-4 flex flex-col  justify-center">
           
               
              <h1 className='absolute flex items-end text-pink-400  font-normal font-AksaraBaliGalang text-5xl'> You  are </h1>
               
                <h1 className='absolute flex items-end text-pink-600 mx-48 font-normal font-AksaraBaliGalang text-5xl '>
                <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter

                    .typeString("STRONG.")

                    .pauseFor(1000)
                    .deleteAll()
                     
                    
                    .typeString("IN CONTROL.")

                    .pauseFor(1000)
                    .deleteAll()
                    
                    .typeString("WORTH IT.")

                    .pauseFor(1000)
                    .deleteAll()
                    
                    .typeString("PROACTIVE.")

                    .pauseFor(1000)
                    .deleteAll()

                    .start();
                }}
              />
              </h1>
              <button className="mt-48 bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-0 rounded-full">Learn more</button>
              
              
            </div>
         
            <div>
            <img className="w-1/2 p-4 w-fit h-700" src={selfCheck1}></img>
            </div>
        </div>
        <h1 className="ml-56 mr-48 font-normal font-AksaraBaliGalang text-5xl color-pink-500">5 Easy Steps To Do Breast Check At Home : </h1>
        
        {/* <h1 className="mx-3 font-normal font-AksaraBaliGalang text-5xl color-pink-500">Five Steps To Do  Breast Check At Home</h1> */}
        <div className="">
        <div className="flex">
            <div className = "font-normal font-AksaraBaliGalang text-2xl mt-28 mx-32 text-pink-500">
           <h3> Step 1: Examine Your Breasts in a Mirror With Hands on Hips
Begin by looking at your breasts in the mirror with your shoulders straight and your arms on your hips.

{/* Here’s what you should look for:

Breasts that are their usual size, shape, and color

Breasts that are evenly shaped without visible distortion or swelling

If you see any of the following changes, bring them to your doctor’s attention:

Dimpling, puckering, or bulging of the skin

A nipple that has changed position or an inverted nipple (pushed inward instead of sticking out)

Redness, soreness, rash, or swelling */}

</h3>
 <button className="bg-pink-400 hover:bg-pink-700 text-white font-bold rounded-full px-2 py-2 border-white mt-2">Know More</button>

            </div>
            <div>
                <img className="w-full" src={step1}></img>
            </div>
            </div>
            <div className="flex">
            <div className = "font-normal font-AksaraBaliGalang text-2xl mt-28 mx-32 text-pink-500">
           <h3> Step 2:  Raise Arms and Examine Your Breasts
Now, raise your arms and look for the same changes.


{/* Here’s what you should look for:

Breasts that are their usual size, shape, and color

Breasts that are evenly shaped without visible distortion or swelling

If you see any of the following changes, bring them to your doctor’s attention:

Dimpling, puckering, or bulging of the skin

A nipple that has changed position or an inverted nipple (pushed inward instead of sticking out)

Redness, soreness, rash, or swelling */}

</h3>
<button className="bg-pink-400 hover:bg-pink-700 text-white font-bold rounded-full px-2 py-2 border-white mt-2">Know More</button>
            </div>
            <div>
                <img className="w-full" src={step2}></img>
            </div>
            </div>
            <div className="flex">
            <div className = "font-AksaraBaliGalang text-2xl mt-28 mx-32 text-pink-500">
           <h3> Step 3: Look for Signs of Breast Fluid
While you’re at the mirror, look for any signs of fluid coming out of one or both nipples.
 

{/* Here’s what you should look for:

Breasts that are their usual size, shape, and color

Breasts that are evenly shaped without visible distortion or swelling

If you see any of the following changes, bring them to your doctor’s attention:

Dimpling, puckering, or bulging of the skin

A nipple that has changed position or an inverted nipple (pushed inward instead of sticking out)

Redness, soreness, rash, or swelling */}

</h3>
<button className="bg-pink-400 hover:bg-pink-700 text-white font-bold rounded-full px-2 py-2 border-white mt-2">Know More</button>
            </div>
            <div>
                <img className="w-full" src={step3}></img>
            </div>
            </div>
            <div className="flex">
            <div className = "font-normal font-AksaraBaliGalang text-2xl mt-28 mx-32 text-pink-500">
           <h3> Step 4: Feel for Breast Lumps While Lying Down
Next, check for breast lumps or abnormalities by feeling your breasts.

 
{/* Here’s what you should look for:
s
Breasts that are their usual size, shape, and color

Breasts that are evenly shaped without visible distortion or swelling

If you see any of the following changes, bring them to your doctor’s attention:

Dimpling, puckering, or bulging of the skin

A nipple that has changed position or an inverted nipple (pushed inward instead of sticking out)

Redness, soreness, rash, or swelling */}

</h3>
<button className="bg-pink-400 hover:bg-pink-700 text-white font-bold rounded-full px-2 py-2 border-white mt-2">Know More</button>
            </div>
            <div>
                <img className="w-full" src={step4}></img>
            </div>
            </div>
            <div className="flex">
            <div className = "font-normal font-AksaraBaliGalang text-2xl mt-28 mx-32 text-pink-500">
           <h3> Step 5: Feel Your Breasts for Lumps While Standing or Sitting
Finally, feel your breasts while you are standing or sitting.
 

{/* Here’s what you should look for:

Breasts that are their usual size, shape, and color

Breasts that are evenly shaped without visible distortion or swelling

If you see any of the following changes, bring them to your doctor’s attention:

Dimpling, puckering, or bulging of the skin

A nipple that has changed position or an inverted nipple (pushed inward instead of sticking out)

Redness, soreness, rash, or swelling */}

</h3>
<button className="bg-pink-400 hover:bg-pink-700 text-white font-bold rounded-full px-2 py-2 border-white mt-2">Know More</button>
            </div>
            <div>
                <img className="w-full" src={step5}></img>
            </div>
            </div>
            </div>
        </>
    )
    : (
        // Redirect the user to the login page

        window.location.href = '/'
    //     toast("Wow so easy!");
//   <ToastContainer />
      );
    }
export default SelfCheck;
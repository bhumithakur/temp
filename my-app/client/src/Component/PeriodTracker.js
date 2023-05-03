 
import React, { useState } from "react";
import Calendar from "react-calendar";
 import "./Period.css"
import 'react-calendar/dist/Calendar.css';
import Navbar1 from "./Navbar1"
 import period1 from "./period1.avif";

import Moment from "react-moment";
 

function PeriodTracker() {
const [value, onChange] = useState(new Date());
const [cycle, cycleValue] = useState("28");

const date = value;
console.log(cycle);
const cycleLength = parseInt(cycle);

return (
	<>
    <Navbar1 />
     <div className="flex ">
         <img className=" w-1/2 p-4 periodImg" src={period1}></img>
         <div className="text-center  w-1/2 p-4  pink-300 mt-40">
		 
         <h4>Calculate Next period, Ovulation Day</h4>
 
         <label for="cycle">Select your Cycle Length : </label>
         <select
         onChange={(e) => cycleValue(e.target.value)}
         defaultValue={cycle}
         className="m-2"
         >
         <option value="28">28</option>
         <option value="29">29</option>
         <option value="30">30</option>
         <option value="31">31</option>
         <option value="32">32</option>
         <option value="33">33</option>
         <option value="34">34</option>
         <option value="35">35</option>
         <option value="36">36</option>
         <option value="37">37</option>
         <option value="38">38</option>
         <option value="39">39</option>
         <option value="40">40</option>
         <option value="41">41</option>
         <option value="42">42</option>
         <option value="43">43</option>
         <option value="44">44</option>
         <option value="45">45</option>
         </select>
     
     <p className="text-center">
		Select Your Last Period Start Date from the Calendar
	</p>

	 
		<Calendar onChange={onChange} value={value}
		className="calendar mt-0" />
	 	<div className="text-center mt-4 p-5">
		<div className="flex">
		<div className="flex justify-center">
			<div className="col-md-5 mt-3 m-5 box decoration-5 text-red-800 ">
			<p>Next Period</p>

			<Moment format="Do MMMM YYYY"
				add={{ days: cycleLength - 1 }}>
				{date}
			</Moment>
			</div>
			<div className="col-md-5 mt-3 m-5 box decoration-5 text-red-800 ">
			<p> Approximate Ovulation Day</p>

			<Moment
				format="Do MMMM YYYY"
				add={{ days: cycleLength - 1 - 14 }}
			>
				{date}
			</Moment>
			</div>
		</div>
		</div>
	</div>
        {/* <h1 className="w-1/2 p-4 text-2xl pink-300 mt-28">Track Your Days</h1> */}
     </div>
	 </div>

	


	</>
);
}

export default PeriodTracker;

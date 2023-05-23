import React from 'react'
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import Navbar1 from "./Navbar1"
function Doctor() {
    const navigate = useNavigate();
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
                src="/unsplashe285pjbc4ue@2x.png"
            />
            <div className="absolute top-[8.69rem] left-[10.94rem] w-[37.83rem] h-[42.62rem] text-[1.5rem] font-open-sans">
                <b className="absolute top-[-4.33rem] left-[7.71rem] text-[9.38rem] hidden font-roboto-condensed text-light-background-color w-[56.02rem] h-[28.04rem]">
                    <p className="m-0">{`BEAUTIFUL `}</p>
                    <p className="m-0">SMILES</p>
                </b>
                <div className="absolute top-[0rem] left-[0rem] text-[3.13rem] tracking-[0.1em] leading-[3.75rem] font-dm-serif-display inline-block w-[34.88rem] h-[10.25rem]">
                    <p className="m-0">CHECK.</p>
                    <p className="m-0">EDUCATE.</p>
                    <p className="m-0">REGENERATE</p>
                </div>
                <div className="absolute top-[22.35rem] left-[4.16rem] w-[32.63rem] h-[2.63rem] hidden">
                    <img
                        className="absolute top-[0.4rem] left-[0rem] w-[1.9rem] h-[1.92rem]"
                        alt=""
                        src="/group-281.svg"
                    />
                    <b className="absolute top-[0rem] left-[2.73rem] inline-block w-[29.91rem] h-[2.63rem]">
                        Only From £ 99/week
                    </b>
                </div>
                <b className="absolute top-[13rem] left-[0rem] inline-block w-[35.63rem] h-[5.69rem]">{`Attract & educate more patients by allowing them to directly create and visualize their 3Ds anywhere and connect with you remotely..`}</b>
                <u className="absolute top-[29.88rem] left-[2.22rem] text-[1.13rem] leading-[2.5rem] inline-block w-[35.61rem] h-[12.74rem]">
                    <p className="m-0">Check cancer with new AI technology</p>
                    <p className="m-0">Attract more patients</p>
                    <p className="m-0">Simulate using AR Technology</p>
                    <p className="m-0">Get unrealistic results</p>
                </u>
                <img
                    className="absolute top-[30.85rem] left-[-0.06rem] w-[1.14rem] h-[7.77rem]"
                    alt=""
                    src="/group-70.svg"
                />
                <div className="absolute top-[21.25rem] left-[0rem] w-[15.25rem] h-[6.06rem] text-[1.25rem] text-light-background-color">
                    <div className="absolute top-[0rem] left-[0rem] rounded-3xs [background:linear-gradient(90deg,_#e3008d,_#fba9d8_48.46%,_#ec52b2)] w-[15.25rem] h-[6.06rem]" />
                    <b className="absolute top-[2.31rem] left-[2rem] tracking-[0.1em] capitalize inline-block w-[10.25rem] h-[1.25rem]" onClick={getInfo}>
                        GET STARTED
                    </b>
                    <img
                        className="absolute top-[2.81rem] left-[12.06rem] w-[0.21rem] h-[0.63rem]"
                        alt=""
                        src="/vector.svg"
                    />
                </div>
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
                        <button className="cursor-pointer p-0 bg-[transparent] absolute top-[16.81rem] left-[8rem] rounded-3xs [background:linear-gradient(90deg,_#e3008d,_#ee92c7_48.46%,_#ec52b2)] shadow-[0px_4px_40px_rgba(177,_146,_65,_0.6)] box-border w-[7.38rem] h-[2.17rem] border-[1px] border-solid border-gray-300" />
                        <Link to="/analyser">  <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[17.38rem] left-[10.15rem] text-[1rem] leading-[1.25rem] font-medium font-poppins text-light-background-color text-center inline-block w-[2.83rem] h-[1.09rem]">
                            <span className="tracking-[0.1em]">V</span>
                            <span className="tracking-[0.2em]">isit</span>
                        </button> </Link>
                    </div>
                </div>
                <img
                    className="absolute top-[72.76rem] left-[66.45rem] w-[14.07rem] h-[16.14rem] hidden"
                    alt=""
                    src="/vector-1.svg"
                />
                <img
                    className="absolute top-[9.06rem] left-[67.83rem] w-[11.32rem] h-[11.7rem]"
                    alt=""
                    src="/vector-2.svg"
                />
                <div className="absolute top-[26.55rem] left-[7.87rem] tracking-[0.1em] leading-[1.88rem] font-medium font-poppins inline-block w-[50.74rem] h-[3.26rem]">
                Get patient satisfactotion when they get their desired shape using AR.
                </div>
                <div className="absolute top-[7.49rem] left-[5.63rem] w-[0rem] h-[27.96rem]" />
                <div className="absolute bottom-[15.05rem] left-[calc(50%_-_636.67px)] w-[2.34rem] h-[2.05rem]" />
                <img
                    className="absolute bottom-[28.51rem] left-[calc(50%_-_675.67px)] w-[2.34rem] h-[2.05rem]"
                    alt=""
                    src="/point.svg"
                />
                <img
                    className="absolute bottom-[42.57rem] left-[calc(50%_-_675.67px)] w-[2.34rem] h-[2.05rem]"
                    alt=""
                    src="/point1.svg"
                />
                <i className="absolute top-[5.65rem] left-[7.87rem] text-[2.5rem] tracking-[0.1em] leading-[3.75rem] inline-block text-gray-300 w-[19.13rem] h-[3.04rem]">
                Analyser
                </i>
                <div className="absolute top-[8.69rem] left-[7.87rem] text-[1.88rem] tracking-[0.1em] leading-[3.75rem] text-purple inline-block w-[19.13rem] h-[3.04rem]">
                    Estimate Cancer
                </div>
                <div className="absolute top-[12rem] left-[7.87rem] tracking-[0.1em] leading-[1.88rem] font-medium font-poppins inline-block w-[35.3rem] h-[3.26rem]">
                For doctors and technicals assistants it helps to suggest the type of cancer within seconds.
                </div>
                <i className="absolute top-[20.2rem] left-[7.87rem] text-[2.5rem] tracking-[0.1em] leading-[3.75rem] inline-block text-gray-300 w-[19.13rem] h-[3.01rem]">
                    Simulate
                </i>
                <div className="absolute top-[23.24rem] left-[7.87rem] text-[1.88rem] tracking-[0.1em] leading-[3.75rem] text-purple inline-block w-[37.33rem] h-[3.01rem]">
                    Breast Reconstruction
                </div>
                <button className="cursor-pointer p-0 bg-[transparent] absolute top-[30.46rem] left-[7.87rem] rounded-3xs [background:linear-gradient(90deg,_#e3008d,_#ee92c7_48.46%,_#ec52b2)] shadow-[0px_4px_40px_rgba(177,_146,_65,_0.6)] box-border w-[7.38rem] h-[2.17rem] border-[1px] border-solid border-gray-300" />
                <Link to="/regenerate">  <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[31rem] left-[10.15rem] text-[1rem] leading-[1.25rem] font-medium font-poppins text-light-background-color text-center inline-block w-[2.83rem] h-[1.09rem]">
                    <span className="tracking-[0.1em]">V</span>
                    <span className="tracking-[0.2em]">isit</span>
                </button> </Link>
                <img
                    className="absolute top-[1.74rem] left-[50.99rem] w-[19rem] h-[14.39rem] object-cover"
                    alt=""
                    src="/5714039-56270-1@2x.png"
                />
                <img
                    className="absolute top-[15.26rem] left-[66.24rem] w-[19.8rem] h-[18.89rem] object-cover"
                    alt=""
                    src="/25265919-7057609-1@2x.png"
                />
                <img
                    className="absolute top-[79.98rem] left-[52.15rem] w-[19.13rem] h-[14.06rem] object-cover hidden"
                    alt=""
                    src="/17808202-5911098-1@2x.png"
                />
            </div>
        </div>
    );
    
}

export default Doctor
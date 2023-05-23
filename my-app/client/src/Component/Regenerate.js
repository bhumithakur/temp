import Navbar1 from "./Navbar1"
import nur1 from "./col-md-6.png"
import rect from "./Frame 11.png"
import mask from "./Mask Group.png"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Flex } from "@react-three/flex";
import bodyWithStitch from "./bodyWithStitch.glb";
import bodyWithoutStitch from "./bodyWithoutStitch.glb";
 
function Model(props) {
  const { scene } = useGLTF(bodyWithStitch);
  return <primitive object={scene} {...props} />;
}

function Modelb(props) {
  const { scene } = useGLTF(bodyWithoutStitch);
  return <primitive object={scene} {...props} />;
}
function Box() {
    return (
      <mesh>
        <boxBufferGeometry attach ="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
      </mesh>
    )
  }
 
const FrameComponent = () => {
  return (
    <div className="relative bg-lavenderblush w-full h-[162.5rem] overflow-hidden text-left text-[0.94rem] text-black font-poppins">
      <div className="absolute top-[132.38rem] left-[0rem] bg-gray-300 w-screen h-[30.13rem]" />
      <div className="absolute top-[144.56rem] left-[11.44rem] leading-[1.5rem] text-justify inline-block w-[19.06rem]">
        joint replacement is a surgery to replace a knee joint with a man made
        artificial joint. a knee joint with a man-made artificial joint.
      </div>
      <div className="absolute top-[152.19rem] left-[18rem] w-[2.56rem] h-[2.56rem] text-[1.13rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-8xs bg-gray-300 w-[2.56rem] h-[2.56rem]" />
        <b className="absolute top-[0.56rem] left-[0.81rem] [background:linear-gradient(180deg,#6eace2,#5a9ad2_99.98%,rgba(16,_28,_38,_0.18)_99.99%,_rgba(0,_0,_0,_0),#1a72bf)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
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
          src="/icons8twitter-12.svg"
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
        src="/whatsapp-image-20230406-at-1940-2@2x.png"
      />
     <Navbar1 />
      
      <div className="absolute top-[82.38rem] left-[-0.12rem] w-screen h-[51rem] text-center text-[1.88rem] text-gray-300 font-roboto">
        <img
          className="absolute top-[81.55rem] left-[-2.37rem] w-[91.59rem] h-[52.4rem] object-cover hidden"
          alt=""
          src="/image-56@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0.13rem] w-[90rem] h-[50.69rem] object-cover"
          alt=""
          src="/image-57@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[0.13rem] w-screen h-[51rem]"
          alt=""
          src={mask}
        />
        {/* <div className="absolute top-[6.88rem] left-[17.06rem] w-[56.06rem] h-[39.24rem]">
          <div className="absolute top-[4.8rem] left-[0rem] w-[56.06rem] h-[0rem]" />
          <div className="absolute top-[0rem] left-[11.92rem] tracking-[0.2em] capitalize font-open-sans inline-block w-[32.22rem] h-[6.15rem]">
            Book a Free Consultation
          </div>
          <div className="absolute top-[8.03rem] left-[2.88rem] text-[1rem] leading-[1.56rem] font-light text-thistle inline-block w-[49.64rem] h-[1.88rem]">
            Complete the form below and we will get back to you shortly to
            schedule an appointment
          </div>
          <div className="absolute top-[14.86rem] left-[10.56rem] w-[34.17rem] h-[24.39rem] text-left text-[0.88rem] text-darkgray">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[19.27rem] left-[8.5rem] w-[16.96rem] h-[5.12rem]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] rounded-3xs [background:linear-gradient(90deg,#ec3ca8,#faa3d5_48.46%,_#ef66bb)] w-[16.96rem] h-[4.58rem]" />
              <div className="absolute top-[1.37rem] left-[3.27rem] w-[12.98rem] h-[3.75rem]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] text-[1.13rem] tracking-[0.1em] capitalize font-bold font-open-sans text-light-background-color text-left inline-block w-[10.81rem] h-[3.75rem]">
                  ENQUIRE NOW
                </button>
                <img
                  className="absolute top-[0.45rem] left-[12.4rem] w-[0.58rem] h-[1.05rem]"
                  alt=""
                  src="/vector1.svg"
                />
              </div>
            </button>
            <div className="absolute top-[7.52rem] left-[0rem] w-[34.06rem] h-[7.5rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-gray-300 w-[34.06rem] h-[7.5rem]" />
              <div className="absolute top-[0.36rem] left-[0.96rem] leading-[1.56rem] font-light inline-block w-[3.73rem] h-[3.75rem]">
                Message
              </div>
            </div>
            <div className="absolute top-[3.75rem] left-[17.8rem] w-[16.37rem] h-[4.13rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-gray-300 w-[16.37rem] h-[2.63rem]" />
              <div className="absolute top-[0.38rem] left-[0.85rem] leading-[1.56rem] font-light inline-block w-[6.09rem] h-[3.75rem]">
                Phone Number
              </div>
            </div>
            <div className="absolute top-[0rem] left-[17.8rem] w-[16.37rem] h-[4.13rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-gray-300 w-[16.37rem] h-[2.63rem]" />
              <div className="absolute top-[0.38rem] left-[0.85rem] leading-[1.56rem] font-light inline-block w-[4.45rem] h-[3.75rem]">
                Last Name
              </div>
            </div>
            <div className="absolute top-[3.75rem] left-[0.11rem] w-[16.37rem] h-[4.13rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-gray-300 w-[16.37rem] h-[2.63rem]" />
              <div className="absolute top-[0.38rem] left-[0.85rem] leading-[1.56rem] font-light inline-block w-[5.76rem] h-[3.75rem]">
                Email Address
              </div>
            </div>
            <div className="absolute top-[0rem] left-[0.11rem] w-[16.37rem] h-[4.13rem]">
              <div className="absolute top-[0rem] left-[0rem] bg-gray-300 w-[16.37rem] h-[2.63rem]" />
              <div className="absolute top-[0.38rem] left-[0.85rem] leading-[1.56rem] font-light inline-block w-[4.45rem] h-[3.75rem]">
                First Name
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <img
        className="absolute pt-9 top-[0rem] left-[calc(50%_-_704px)] w-[44rem] h-[42.63rem] object-cover"
        alt=""
        src= {nur1}
      />
      <div className="absolute top-[30.19rem] left-[1rem] w-screen h-[58.13rem] text-[2rem] text-light-background-color font-dm-serif-display">
        <img
          className="absolute top-[2.06rem] left-[-1rem] w-screen h-[56.06rem]"
          alt=""
          src= {rect}
        />
        {/* <i className="absolute top-[39rem] left-[19.5rem] tracking-[0.1em] capitalize">
       
        </i> */}
        {/* <i className="absolute top-[39rem] left-[60.25rem] tracking-[0.1em] capitalize">
          AFTER
        </i> */}
      </div>
      <div className="absolute top-[76.63rem] left-[21rem] w-[48.13rem] h-[4.9rem]">
        <img
          className="absolute top-[1.45rem] left-[1.72rem] w-[39.31rem] h-[5.9rem]"
          alt=""
          src="/ellipse-6.svg"
        />
        <button  onClick={(e) => {
           e.preventDefault();
           window.location.href='https://www.facebook.com/fbcameraeffects/testit/1035820727381676/MDBhMDg0MzJjNGY5MTU3ZGFiNmIwYTA1ZjUwZWY3ZjI=/';
           }}  className="cursor-pointer p-0 bg-[transparent] absolute top-[0rem] left-[0rem] rounded-3xs [background:linear-gradient(90deg,#ef52b2,#faa2d5_48.46%,_#f171c0)] shadow-[0px_4px_40px_rgba(70,_54,_13,_0.36)] box-border w-[48.13rem] h-[4.9rem] border-[1.5px] border-solid border-black" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1.56rem] left-[19.94rem] text-[1.25rem] tracking-[0.1em] capitalize font-extrabold font-open-sans text-light-background-color text-left inline-block w-[14.05rem] h-[1.69rem]" 
       onClick={(e) => {
           e.preventDefault();
           window.location.href='https://www.facebook.com/fbcameraeffects/testit/1035820727381676/MDBhMDg0MzJjNGY5MTU3ZGFiNmIwYTA1ZjUwZWY3ZjI=/';
           }}>
          VIEW IN AR
        </button>
        <img
          className="absolute top-[2rem] left-[28.69rem] w-[0.58rem] h-[0.9rem]"
          alt=""
          src="/vector2.svg"
        />
      </div>
      <div className="absolute top-[15.88rem] left-[42.88rem] text-pink-600 text-[4.5rem] tracking-[0.1em] leading-[1.25rem] inline-block italic font-dm-serif-display  text-center w-[42.25rem] h-[2.75rem]">
        ~REGENERATION
      </div>
      <div className="absolute top-[42.44rem] left-[15.13rem] rounded-8xs box-border w-[24.06rem] h-[31.19rem] border-[3px] border-dashed border-light-background-color" > 
      {/* <img src={nur1} /> */}
      <Canvas
          shadows
          camera={{ position: [0, 0, 30], fov: 45 }}
          style={{ position: "absolute", width: "50vh", height: "50vh" }}
        >
          <PresentationControls
            speed={1.5}
            globalZoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          > 
              <Stage environment={null} controls={null}>
                {/* <Box /> */}
                <Model position={[-10, 0, 0]} scale={0.01} />
              </Stage>
             
          </PresentationControls>
          <OrbitControls />
        </Canvas>
      </div>

      <div className="absolute top-[42.44rem] left-[55.5rem] rounded-8xs box-border w-[24.06rem] h-[31.19rem] border-[3px] border-dashed border-light-background-color" >
      {/* <img src={nur1} /> */}
      <Canvas
          shadows
          camera={{ position: [10, 0, 0], fov: 45 }}
          style={{ position: "absolute", width: "50vh", height: "50vh" }}
        >
          <PresentationControls
            speed={1.5}
            globalZoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            
              
              <Stage environment={null} controls={null}>
                {/* <Box /> */}
                <Modelb position={[10, 0, 0]} scale={0.01} />
              </Stage>
           
          </PresentationControls>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default FrameComponent;
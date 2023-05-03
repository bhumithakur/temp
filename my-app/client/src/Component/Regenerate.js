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

export default function App() {
  return (
    <div className="mt-64">
      <div className="-ml-9">
      <Canvas
          shadows
          camera={{ position: [0, 0, 30], fov: 45 }}
          style={{ position: "absolute", width: "100vh", height: "100vh" }}
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
        <div className="App-header  ml-96 mr-0">
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
}

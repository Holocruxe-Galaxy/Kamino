import LegacyModelCanvas from "../models/legacy";
import Waitlist from "./waitlist";
import { Canvas } from "@react-three/fiber";



const Container = () => {
    return (
      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
        <Canvas style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>         
        </Canvas>
        <Waitlist />
        <LegacyModelCanvas />
      </div>
    );
  };
  
  export default Container;
  
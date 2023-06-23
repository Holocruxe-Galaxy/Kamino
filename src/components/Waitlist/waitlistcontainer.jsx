<<<<<<< HEAD
import LegacyModelCanvas from "../models/legacy";
=======
>>>>>>> c6511cc03bf62dee21cee7e9139bdcd871a9cdf4
import Waitlist from "./waitlist";
import { Canvas } from "@react-three/fiber";
import Stars from "../Stars/stars";



const Container = () => {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}>
      <Canvas style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}>
        <Stars />
      </Canvas>
      <Waitlist />
    </div>
  );
};

export default Container;  

  
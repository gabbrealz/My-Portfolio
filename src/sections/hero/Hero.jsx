import mainProfile from '../../assets/images/profile-newspaper.jpg';
import Lanyard from "../../components/Lanyard.jsx";

export default function Hero() {
  return (
    <>
      <div className="absolute w-full h-screen overflow-x-clip -translate-y-30 sm:translate-y-0">
        <div className="w-screen sm:w-[150vw] h-screen">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </>
  );
}
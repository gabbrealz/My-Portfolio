import mainProfile from '../../assets/images/profile-newspaper.jpg';
import Lanyard from "../../components/Lanyard.jsx";

export default function Hero() {
  return (
    <>
      <div className="w-[150%] -translate-y-20">
        <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
      </div>
    </>
  );
}
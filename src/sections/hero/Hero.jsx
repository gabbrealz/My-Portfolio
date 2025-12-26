import mainProfile from '../../assets/images/profile-newspaper.jpg';

export default function Hero() {
  return (
    <div className="size-full mt-20 px-6 flex justify-center items-center gap-6">
      <img src={mainProfile} className="w-35"/>
      <div className="">
        <h1 className="mb-3 font-nunito text-3xl">Hello, I'm Gabb</h1>
        <span>
          An aspiring developer and tech enthusiast!
        </span>
      </div>
    </div>
  );
}
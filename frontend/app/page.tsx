import Image from "next/image";
import bgImage from "../public/bg.png"
export default function Home() {
  return (
    <div className=" h-[100vh] w-[100vw] ">
      <div className=" bg-neutral-700 h-[10vh] flex justify-center w-[100%] ">
        <div className=" flex h-[10vh] w-[90%]  items-center justify-around ">
          <span className=" select-none text-4xl tracking-tighter font-bold text-red-300 transform scale-y-[2.1] origin-center inline-block ">
            NOIR CINNEMA
          </span>
          <button className=" rounded-[5px] text-white tracking-wider select-none bg-red-600 h-10 w-32  ">
            Sign Up
          </button>
        </div>
      </div>
      <div className="relative h-[90vh] w-[100vw] overflow-y-hidden ">
        <Image
          src={bgImage}
          alt="Background cover"
          placeholder="blur"
          quality={80}
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute flex items-center flex-col  inset-0 z-20 h-[90vh] w-[100%]">
          <div className=" w-[55%] relative top-30 flex flex-col gap-3.5 ">
            <h1 className=" text-red-300 relative left-[6px] font-light text-[20px] ">
              PREMIUM STREAMING SERVICE
            </h1>
            <h1 className=" relative top-10 text-8xl text-white transform scale-y-[2] origin-center font-bold tracking-wider">
              ENTER THE
            </h1>
            <h1 className=" relative top-25 left-[6px] text-7xl text-red-600 transform scale-y-[2] origin-center font-bold tracking-wider">
              VOID .
            </h1>
            <p className="w-[900px] md:text-[25px] tracking-widest relative top-35">
              You gateway to curated cinematic masterpieces . Sign up to join
              the elite circle of cinephiles or login to resume your journey
              into the shadows
            </p>
            <div className=" relative top-40 flex gap-5" >
              <button className=" rounded-[5px] text-white tracking-wider select-none bg-red-600 h-12 w-32  ">
                Sign Up
              </button>
              <button className=" rounded-[5px] text-white tracking-wider select-none bg-transparent transition-opacity border h-12 w-32  ">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

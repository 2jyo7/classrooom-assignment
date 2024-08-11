import SignupPage from "@/components/Signup ";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center ">
      <main className=" mx-auto">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
    <div className="container mx-auto px-6 flex items-center justify-between">
      <div className="uppercase dark:text-white font-black text-3xl">
        Your ClassRoom
      </div>
      <div className="flex items-center">
        <button className="lg:hidden flex flex-col ml-4">
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
          <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
        </button>
      </div>
    </div>
  </header>

  <div className=" flex relative z-20 items-center overflow-hidden m-20">
    <div className="container mx-auto px-6 flex relative py-16">
      <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
        <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
        <h1 className="font-bebas-neue uppercase
         text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white ">
          Be on
          <span className="text-5xl sm:text-7xl">Time</span>
        </h1>
        <p className="text-sm sm:text-base  dark:text-white">
          You sure wanna know your classes timings..,
          Your classmates and who is going to teach you 
          this semester.
          So go check that out but wait...!
          You need the permission first from your Principal
          and then your Teacher.

          So Hurry Up..! students get all the details and be on Time.
        </p>
        <div className="flex mt-8">
          <Link
            href="/principal"
            className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
          >
            Principal Dash
          </Link>
          <Link
            href="teacher"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
          >
            Teacher Dash
          </Link>
          <Link
            href="teacher"
            className="uppercase py-2 px-4 mx-2 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
          >
            Student Dash
          </Link>
        </div>
      </div>
      <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
        <Image
          src="https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
          className="max-w-xs md:max-w-sm m-auto w-full"
          alt="img-hero"
          width={1040}
          height={950}
          priority
        />
      </div>
    </div>
  </div>

<div className=" flex relative z-20 items-center justify-center bg-slate-700 overflow-hidden m-20 p-20">
<SignupPage />
</div>
</main>

    </div>
  );
}

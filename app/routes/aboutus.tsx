import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RhythmAI" },
    { name: "description", content: "Senior Project by Angela Ung & David Vallejo" },
  ];
};

export default function AboutUs() {
  return (
<div className="bg-[url('../img/rhythm.gif')] bg-no-repeat bg-cover py-24 p-12">
<div className="bg-black bg-cover bg-opacity-70 p-4 rounded-md">
<header className="font-mono font-bold text-center flex w-full max-w text-purple-100">
    <img src="../img/rai.png" className="w-8 h-8"/>
    <a href="/" className="flex w-full m-2">RHYTHMAI</a>
    <a href="/projects" className="flex w-full justify-center m-2">PROJECTS</a>
    <a href="/aboutus" className="flex w-full justify-center m-2">ABOUT US</a>
  </header>
    <div className="flex w-full max-w-6xl">
      <div className="flex-1 p-10 m-10">
      <p className="font-[Poppins] text-purple-100">Hi! We're Angela & David</p>
      <p className="text-7xl animate-fade-down mt-24 mb-24 font-[Poppins] font-bold text-purple-100">
        And this is our Senior Project!
      </p>
      <p className="text-purple-100">Explore our website!</p>
      </div>
      
    </div>
  </div>
  </div>
  );
}
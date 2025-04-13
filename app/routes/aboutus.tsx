import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RhythmAI" },
    { name: "description", content: "Senior Project by Angela Ung & David Vallejo" },
  ];
};

export default function AboutUs() {
  return (
<div className="bg-[url('/img/rhythm.gif')] bg-cover py-24 p-12 absolute top-0 left-0 w-full h-screen">
<div className="bg-black bg-cover bg-opacity-50 absolute top-0 left-0 w-full h-screen">
<header className="font-mono font-bold text-center flex w-full max-w text-purple-100 p-4 m-2 ml-16">
    <img src="/img/rai.png" className="w-8 h-8"/>
    <a href="/" className="flex w-full m-2 hover:animate-bounce">RHYTHMAI</a>
    <a href="/projects" className="flex w-full justify-center m-2 hover:animate-ping">PROJECTS</a>
    <a href="/aboutus" className="flex w-full justify-center m-2 hover:animate-ping">ABOUT US</a>
  </header>
    <div className="flex w-full">
      <div className="flex-1 p-10 m-10">
      <p className="font-[Poppins] text-purple-100">Hi! We're Angela & David, the creators of RhythmAI.</p>
      <p className="text-7xl animate-fade-down mt-24 mb-24 font-[Poppins] font-bold text-purple-100">
        This is our Senior Project!
      </p>
      <p className="font-bold font-mono text-purple-100">We're two computer science students who want to share the joy of music with everyone.</p>
      <p className="font-bold font-mono text-purple-100">Join us in our journey by trying our products!</p>
      </div>
      <div className="flex-2 w-[0.4] p-10 m-10">
        <img src="/img/about.gif" className="w-full"/>
      </div>
    </div>
  </div>
  </div>
  );
}
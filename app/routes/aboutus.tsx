import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RhythmAI" },
    { name: "description", content: "Senior Project by Angela Ung & David Vallejo" },
  ];
};

export default function AboutUs() {
  return (
<div className="bg-cover py-24 bg-purple-900 p-16">
  <header className="font-[Poppins] text-center flex w-full max-w text-purple-100">
    <a href="/" className="flex w-full">RHYTHMAI</a>
    <a href="/projects" className="flex w-full">PROJECTS</a>
    <a href="/aboutus" className="flex w-full">ABOUT US</a>
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
  );
}
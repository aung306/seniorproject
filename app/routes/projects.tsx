import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RhythmAI" },
    { name: "description", content: "Senior Project by Angela Ung & David Vallejo" },
  ];
};

export default function Projects() {
  return (
<div className="bg-[url('../img/rhythm.gif')] bg-no-repeat bg-cover py-24 p-12">
<div className="bg-black bg-cover bg-opacity-70 p-4 rounded-md">
<header className="font-mono font-bold text-center flex w-full max-w text-purple-100">
    <img src="../img/rai.png" className="w-8 h-8"/>
    <a href="/" className="flex w-full m-2">RHYTHMAI</a>
    <a href="/projects" className="flex w-full justify-center m-2">PROJECTS</a>
    <a href="/aboutus" className="flex w-full justify-center m-2">ABOUT US</a>
  </header>
    <div className="flex w-full max-w">
      <div className="flex-1 p-10 m-10">
      <ul className="font-[Poppins] pr-6 pl-6 mx-auto max-w p-8 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 animate-fade-down font-[Poppins] mb-48 text-sm p-2 text-purple-900 mt-0"
          >
            ComposerBot
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-[Poppins] animate-fade-down mt-10 mb-20 text-l p-6 text-purple-900"
          >
            Our First Project!
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-800 animate-fade-down font-[Poppins] mb-10 text-sm p-4 text-purple-100 mt-0"
          >
            Learn More!
          </p>
        </li>
      </ul>
      </div>
      <div className="flex-1 p-10 m-10">
      <ul className="font-[Poppins] pr-6 pl-6 mx-auto max-w-6xl p-8 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 animate-fade-down font-[Poppins] mb-48 text-sm p-2 text-purple-900 mt-0"
          >
            LaLaBot
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-[Poppins] animate-fade-down mt-10 mb-20 text-l p-6 text-purple-900"
          >
            Our Next Project!
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-800 animate-fade-down font-[Poppins] mb-10 text-sm p-4 text-purple-100 mt-0"
          >
            Coming Soon!
          </p>
        </li>
      </ul>
      </div>
      <div className="flex-1 p-10 m-10">
      <ul className="font-[Poppins] pr-6 pl-6 mx-auto max-w-6xl p-8 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 animate-fade-down font-[Poppins] mb-48 text-sm p-2 text-purple-900 mt-0"
          >
            Discord Community
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-[Poppins] animate-fade-down mt-10 mb-20 text-l p-6 text-purple-900"
          >
            Coming Summer 2025
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-800 animate-fade-down font-[Poppins] mb-10 text-sm p-4 text-purple-100 mt-0"
          >
            Coming Soon!
          </p>
        </li>
      </ul>
      </div>
    </div>
  </div>
  </div>
  );
}
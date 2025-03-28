import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RhythmAI" },
    { name: "description", content: "Senior Project by Angela Ung & David Vallejo" },
  ];
};

export default function Projects() {
  return (
<div className="bg-[url('../img/rhythm.gif')] bg-cover absolute top-0 left-0 w-full h-screen">
<div className="bg-black bg-cover bg-opacity-50 absolute top-0 left-0 w-full h-screen">
<header className="font-mono font-bold text-center flex w-full max-w text-purple-100 p-4 m-2 ml-16">
    <img src="../img/rai.png" className="w-8 h-8"/>
    <a href="/" className="flex w-full m-2 hover:animate-bounce">RHYTHMAI</a>
    <a href="/projects" className="flex w-full justify-center m-2 hover:animate-ping">PROJECTS</a>
    <a href="/aboutus" className="flex w-full justify-center m-2 hover:animate-ping">ABOUT US</a>
  </header>
    <div className="flex w-full max-w">
      <div className="flex-1 pl-4 pr-4 m-10">
      <ul className="bg-[url('../img/composer.gif')] bg-cover font-[Poppins] mx-auto max-w-6xl p-6 divide-y divide-gray-200 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <p
            className="text-center font-[Poppins] mb-48 text-xl p-2 text-violet-300 mt-0"
          >
            ComposerBot
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-mono mt-10 mb-20 text-xl p-6 text-violet-600"
          >
            Our First Bot!
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-violet-800 font-[Poppins] mb-10 text-sm p-4 text-purple-100 mt-0"
          >
            <a href="/">
            Try it out!
            </a>
          </p>
        </li>
      </ul>
      </div>
      <div className="flex-1 pl-4 pr-4 m-10">
      <ul className="bg-[url('../img/lala.gif')] bg-cover font-[Poppins] mx-auto max-w-6xl p-6 divide-y divide-gray-200 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <p
            className="text-center font-[Poppins] mb-48 text-xl p-2 text-violet-400 mt-0"
          >
            LaLaBot
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-mono mt-10 mb-20 text-xl p-6 text-violet-600"
          >
            Our Next Project!
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-violet-800 font-[Poppins] mb-10 text-sm p-4 text-purple-100 mt-0"
          >
            Coming Soon!
          </p>
        </li>
      </ul>
      </div>
      <div className="flex-1 pl-4 pr-4 m-10">
      <ul className="bg-[url('../img/tune.gif')] bg-cover font-[Poppins] mx-auto max-w-6xl p-6 divide-y divide-gray-200 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <p
            className="text-center font-[Poppins] mb-48 text-xl p-2 text-violet-400 mt-0"
          >
            TuneBot
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-mono mt-10 mb-20 text-xl p-6 text-violet-600"
          >
            Summer 2025
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-violet-800 font-[Poppins] mb-10 text-sm p-4 text-purple-100 mt-0"
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
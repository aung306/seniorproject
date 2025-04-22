import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RhythmAI" },
    { name: "description", content: "Senior Project by Angela Ung & David Vallejo" },
  ];
};

export default function Projects() {
  return (
<div className="bg-[url('/img/background.gif')] bg-repeat bg-[length:1200px_1200px] min-h-screen w-full">
<header className="font-rajdhani font-bold text-center flex w-full max-w text-purple-100 p-4 ml-16">
    <img src="/img/rai.png" className="w-8 h-8"/>
    <a href="/" className="flex w-full m-2 hover:animate-bounce">RHYTHMAI</a>
    <a href="/projects" className="flex w-full justify-center m-2 hover:animate-ping">PROJECTS</a>
    <a href="/aboutus" className="flex w-full justify-center m-2 hover:animate-ping">ABOUT US</a>
  </header>
    <div className="flex w-full max-w">
      <div className="flex-1 pl-4 pr-4 m-10">
      <div className="bg-[url('/img/about.gif')] bg-center bg-cover w-full font-rajdhani p-6 rounded-md border border-gray-300 bg-[#0b0014]">
        <div>
          <p
            className="text-center font-dancing mb-24 text-4xl text-violet-200 mt-0"
          >
            ComposerBot
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-rajdhani mt-10 mb-20 text-xl p-6 text-violet-800"
          >
            <p>A sheet music specialist!</p>
            <p>Simply upload an audio file of the music you'd like to compose, then add any tweaks you'd like ComposerBot to add to the sheet music, and you're done.</p>
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-violet-800 font-rajdhani mb-10 text-sm p-4 text-purple-100 mt-0"
          >
            <a href="/">
            Try it out!
            </a>
          </p>
        </div>
      </div>
      </div>
      <div className="flex-1 pl-4 pr-4 m-10">
      <ul className="bg-[url('/img/about.gif')] bg-center bg-cover w-full font-rajdhani p-6 rounded-md border border-gray-300 bg-[#0b0014]">
        <li>
          <p
            className="text-center font-dancing mb-24 text-4xl text-violet-200 mt-0"
            >
            LaLaBot
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-rajdhani mt-10 mb-20 text-xl p-6 text-violet-800"
          >
            <p>A rhythm finding genius!</p>
            <p>Currently a work in progress! LaLaBot hopes to open new doors to ordinary sounds by creating music given any audio file, even if it's just the sound of rain!</p>
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-violet-800 font-rajdhani mb-10 text-sm p-4 text-purple-100 mt-0"
          >
            Coming Soon!
          </p>
        </li>
      </ul>
      </div>
      <div className="flex-1 pl-4 pr-4 m-10">
      <ul className="bg-[url('/img/about.gif')] bg-center bg-cover w-full font-rajdhani p-6 rounded-md border border-gray-300 bg-[#0b0014]">
        <li>
          <p
            className="text-center font-dancing mb-24 text-4xl text-violet-200 mt-0"
            >
            TuneBot
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-rajdhani mt-10 mb-20 text-xl p-6 text-violet-800"
          >
            <p>An autotuner!</p>
            <p>Another work in progress. TuneBot will alleviate any problems with pitches or voice cracks with a simple click, instead of spending hours pitch-perfecting your voice!</p>
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-violet-800 font-rajdhani mb-10 text-sm p-4 text-purple-100 mt-0"
          >
            Coming Soon!
          </p>
        </li>
      </ul>
      </div>
    </div>
  </div>
  );
}
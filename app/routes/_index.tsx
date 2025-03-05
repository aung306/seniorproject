import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "RhythmAI" },
    { name: "description", content: "Senior Project by Angela Ung & David Vallejo" },
  ];
};

export default function Index() {
  return (
<div className="bg-cover py-24 bg-purple-900 p-16">
  <header className="font-[Poppins] text-center flex w-full max-w text-purple-100">
    <a href="/" className="flex w-full">RHYTHMAI</a>
    <a href="/projects" className="flex w-full">PROJECTS</a>
    <a href="/aboutus" className="flex w-full">ABOUT US</a>
  </header>
    <div className="flex w-full max-w-6xl">
      <div className="flex-1 p-10 m-10">
      <p className="font-[Poppins] text-purple-100">Enhancing music with the power of technology</p>
      <p className="text-7xl animate-fade-down mt-24 mb-24 font-[Poppins] font-bold text-purple-100">
        Composer Bot
      </p>
      <p className="text-purple-100">Create sheet music for any audio</p>
      </div>
      <div className="flex-1 p-10 m-10">
      <ul className="font-[Poppins] pr-6 pl-6 mx-auto max-w-6xl p-8 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 ml-10 mr-10 animate-fade-down font-[Poppins] mb-48 text-sm leading-8 text-purple-900 mt-0"
          >
            Upload Audio File
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-100 font-[Poppins] ml-10 mr-10 animate-fade-down mt-10 mb-20 text-l p-6 leading-8 text-purple-900"
          >
            Tell us a little it about your audio...
          </p>
          <p
            className="text-center rounded-md border border-gray-300 bg-purple-800 ml-10 mr-10 animate-fade-down font-[Poppins] mb-10 text-sm leading-8 text-purple-100 mt-0"
          >
            Compose
          </p>
        </li>
      </ul>
      </div>
    </div>
  </div>
  );
}

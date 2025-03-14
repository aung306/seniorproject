import type { MetaFunction } from "@remix-run/node";
export const meta: MetaFunction = () => {
  return [
    { title: "RhythmAI" },
    { name: "description", content: "Senior Project by Angela Ung & David Vallejo" },
  ];
};

export default function Index() {
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
      <p className="font-mono text-purple-100">Enhancing music with the power of technology</p>
      <p className="text-7xl animate-fade-down mt-24 mb-24 font-[Poppins] font-bold text-purple-100">
        Composer Bot
      </p>
      <p className="text-purple-100 font-mono">Create sheet music for any audio</p>
      </div>
      <div className="flex-1 p-10 m-10">
      <form>
      <ul className="font-[Poppins] flex justify-center items-center max-w w-full p-8 divide-y divide-gray-200 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <input type="file" name="mp3" accept=".mp3" className="flex justify-center w-full text-center rounded-md border border-gray-300 bg-purple-100 p-3 animate-fade-down font-[Poppins] text-sm text-purple-900"/>
          <img src="../img/think.gif" className="opacity-50 justify-center scale-50 flex w-auto h-auto"/>
          <input type="text" placeholder="Tell us a little it about your audio..."
            className="flex w-full text-center rounded-md border border-gray-300 bg-purple-100 font-[Poppins] animate-fade-down mb-20 text-l p-6 text-gray-600"
          />
            
          <button type="submit"
            className="text-center w-full rounded-md border border-gray-300 bg-purple-800 animate-fade-down font-[Poppins] mb-10 p-4 text-sm text-purple-100 mt-0"
          >
            Compose
          </button>
        </li>
      </ul>
      </form>
      </div>
    </div>
  </div>
  </div>
  );
}

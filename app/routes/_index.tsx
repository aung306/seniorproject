import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Spring 2025 Senior Project" },
    { name: "description", content: "Made by Angela Ung & David Vallejo" },
  ];
};

export default function Index() {
  return (
<div className="bg-cover text-center py-24 bg-gray-200">
      <h1 className="text-7xl animate-fade-down animate-pulse mt-24 mb-24 font-sans font-bold leading-7 text-blue-400">
        Rhythm Game Generator
      </h1>
      <ul className="font-sans pr-6 pl-6 mx-auto max-w-6xl p-8 divide-y divide-gray-200 mb-20 rounded-md border border-gray-300 bg-gray-50">
        <li>
          <p
            className="ml-20 mr-20 animate-fade-down mt-6 mb-10 text-xl h-10 leading-8 text-blue-500 mt-0"
          >
            Welcome to our rhythm generator! Upload a .mp3 file below and our AI will generate a rhythm game based on the beats!
          </p>
          <p
            className="ml-20 mr-20 animate-fade-down font-semibold mb-20 text-sm h-10 leading-8 text-blue-500 mt-0"
          >
            Upload File Here!
          </p>
      </li>
      </ul>
    </div>
  );
}

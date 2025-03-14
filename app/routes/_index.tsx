import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';
import type { Template } from '@pdfme/common';
import { BLANK_PDF } from '@pdfme/common';
import { generate } from '@pdfme/generator';
import { line, image } from '@pdfme/schemas';

//for reference, the pdf is 200 pixels long
const template: Template = {
  basePdf: BLANK_PDF,
  schemas: [
    [
      {
        name: 'Title',
        type: 'text',
        position: { x: 100, y: 10 },
        width: 100,
        height: 10,
      },
      {
        name: 'Description',
        type: 'text',
        position: { x: 10, y: 30 },
        width: 190,
        height: 200,
      },
      {
        name: 'Composition',
        type: 'text',
        position: { x: 10, y: 50 },
        width: 190,
        height: 200,
      },
    ],
  ],
};


export const meta: MetaFunction = () => {
  return [
    { title: "RhythmAI" },
    { name: "description", content: "Senior Project by Angela Ung & David Vallejo" },
  ];
};

export default function Index() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioDescription, setAudioDescription] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setAudioFile(event.target.files[0]);
    }
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAudioDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!audioFile) {
      alert('Please upload an audio file!');
      return;
    }

    setLoading(true);

    const inputs = [{
      Title: 'RhythmAI',
      Description: audioDescription,
      Composition: 'Thanks for using our ComposerBot!'
    }];

    try {
      const pdf = await generate({ template, inputs });
      const blob = new Blob([pdf.buffer], { type: 'application/pdf' });

      // Create a download URL for the PDF blob
      const url = URL.createObjectURL(blob);

      // Set the download link for the user
      setDownloadLink(url);

    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

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
      <form onSubmit={handleSubmit}>
      <ul className="font-[Poppins] flex justify-center items-center max-w w-full p-8 divide-y divide-gray-200 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <input type="file" name="mp3" accept=".mp3" onChange={handleFileChange} className="flex justify-center w-full text-center rounded-md border border-gray-300 bg-purple-100 p-3 animate-fade-down font-[Poppins] text-sm text-purple-900"/>
          <img src="../img/think.gif" className="opacity-50 justify-center scale-50 flex w-auto h-auto"/>
          <input type="text" placeholder="Tell us a little it about your audio..."
            value={audioDescription}
            onChange={handleDescriptionChange}
            className="flex w-full text-center rounded-md border border-gray-300 bg-purple-100 font-[Poppins] animate-fade-down mb-20 text-l p-6 text-gray-600"
          />
            
          <button type="submit"
            className="text-center w-full rounded-md border border-gray-300 bg-purple-800 animate-fade-down font-[Poppins] mb-10 p-4 text-sm text-purple-100 mt-0"
            disabled={loading}
            >
              {loading ? 'Generating PDF...' : 'Compose'}
          </button>
        <div className="text-center">
          {downloadLink && (
              <div className="mt-4">
                <a
                  href={downloadLink}
                  download="rhythmai-composerbot.pdf"
                  className="text-center w-full rounded-md border border-gray-300 bg-purple-800 animate-fade-down font-[Poppins] p-4 text-sm text-purple-100"
                >
                  Download PDF
                </a>
              </div>
          )}
        </div>
        </li>
      </ul>
      </form>
      </div>
    </div>
  </div>
  </div>
  );
}

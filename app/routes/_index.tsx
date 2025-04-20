import type { MetaFunction } from "@remix-run/node";
import { useState, useEffect } from 'react';

export async function processAudio(audioFile: File, description: string) {
  console.log(description);
  const formData = new FormData();
  formData.append('audio', audioFile);
  formData.append('description', description);

  /* const response = await fetch('http://localhost:5000/process', {
    method: 'POST',
    body: formData,
  }); 

  if (!response.ok) {
    throw new Error('Python service failed');
  } 

  return await response.json(); */
  return description;
}

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
      Composition: audioFile
    }];

    try {
      const result = await processAudio(audioFile, audioDescription);
      //console.log(result);
      const pdf = await fetch('/output/output.pdf');
      if (!pdf.ok) throw new Error('Failed to fetch PDF')
      const blob = await pdf.blob();

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
<div className="bg-[url('/img/background.gif')] bg-cover w-full h-screen">
<div className="bg-black bg-cover bg-opacity-50 absolute top-0 left-0 w-full h-screen">
  <header className="font-rajdhani text-center flex w-full max-w text-purple-100 p-4 m-2 ml-16">
    <img src="/img/rai.png" className="w-8 h-8"/>
    <a href="/" className="flex w-full m-2 hover:animate-bounce">RHYTHMAI</a>
    <a href="/projects" className="flex w-full justify-center m-2 hover:animate-ping">PROJECTS</a>
    <a href="/aboutus" className="flex w-full justify-center m-2 hover:animate-ping">ABOUT US</a>
  </header>
    <div className="flex w-full">
      <div className="w-1/2 p-10 m-10 mr-0">
      <p className="font-dancing text-3xl text-purple-100">Enhancing music with the power of technology</p>
      <p className="text-9xl animate-fade-down mt-16 mb-16 font-rajdhani font-semibold text-purple-100">
        Composer Bot
      </p>
      <p className="text-purple-100 font-dancing text-3xl">Create sheet music for any audio</p>
      </div>
      <div className="w-1/2 p-10 m-10 ml-0">
      <form onSubmit={handleSubmit}>
      <ul className="font-rajdhani flex justify-center items-center max-w w-3/4 p-8 divide-y divide-gray-200 rounded-md border border-gray-300 bg-purple-50">
        <li>
          <input type="file" name="mp3" accept=".mp3" onChange={handleFileChange} className="flex justify-center w-full text-center rounded-md border border-gray-300 bg-purple-100 p-3 font-rajdhani font-semibold text-sm text-violet-900"/>
          <div className="flex justify-center pt-3 pb-3">
          <img src="/img/think.gif" className="opacity-50 w-[25%] object-contain"/>
          </div>
          <input type="text" placeholder="Tell us a little it about your audio..."
            value={audioDescription}
            onChange={handleDescriptionChange}
            className="flex w-full text-center rounded-md border border-gray-300 bg-purple-100 font-rajdhani font-semibold mb-12 text-l p-6 text-gray-600"
          />
            
          <button type="submit"
            className="text-center w-full rounded-md border border-gray-300 bg-violet-800 font-rajdhani font-semibold mb-10 p-4 text-md text-purple-100"
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
                  className="text-center rounded-md border border-gray-300 bg-violet-800 font-rajdhani p-4 text-sm text-purple-100"
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

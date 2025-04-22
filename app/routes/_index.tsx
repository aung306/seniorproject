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
  const [showCommunity, setShowCommunity] = useState(false); // <-- New state

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

    try {
      const result = await processAudio(audioFile, audioDescription);
      const pdf = await fetch('/output/output.pdf');
      if (!pdf.ok) throw new Error('Failed to fetch PDF')
      const blob = await pdf.blob();
      const url = URL.createObjectURL(blob);
      setDownloadLink(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="bg-[url('/img/background.gif')] bg-repeat bg-[length:1200px_1200px] min-h-screen w-full">
        <header className="animate-fade-in font-rajdhani font-bold text-center flex w-full max-w text-purple-100 p-4 pl-16">
          <img src="/img/rai.png" className="w-8 h-8"/>
          <a href="/" className="flex w-full m-2 hover:animate-bounce">RHYTHMAI</a>
          <a href="/projects" className="flex w-full justify-center m-2 hover:animate-ping">PROJECTS</a>
          <a href="/aboutus" className="flex w-full justify-center m-2 hover:animate-bounce">ABOUT US</a>
        </header>
        <div className="flex w-full">
          <div className="w-1/2 p-10 m-10 mr-0">
            <p className="opacity-0 animate-fade-down [animation-delay:0.3s] font-dancing text-3xl text-purple-100">Enhancing music with the power of technology</p>
            <p className="opacity-0 text-9xl animate-fade-down [animation-delay:0.9s] mt-16 mb-16 font-rajdhani font-semibold text-purple-100">
              Composer Bot
            </p>
            <p className="opacity-0 animate-fade-down [animation-delay:1.5s] text-purple-100 font-dancing text-3xl">Create sheet music for any audio 🎶</p>
          </div>

          <div className="opacity-0 animate-fade-down [animation-delay:2.1s] w-1/2 p-10 m-10 ml-0">
            {showCommunity ? (
              // Community View
              <div className="animate-fade-down font-rajdhani max-w w-3/4 p-8 rounded-md border border-gray-300 bg-purple-50 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-violet-900">Community Creations</h2>
                <p className="mb-4">🎵 Browse what others have made! 🎵</p>
                <ul className="mb-4 space-y-6 text-left">
                  <li className="border border-violet-300 p-4 rounded-md bg-purple-100">
                    <p className="text-lg font-semibold">🎶 Eine Kleine </p>
                    <audio controls className="w-full mt-2">
                      <source src="/community/sample1.wav" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <a
                      href="/community/sample1.pdf"
                      download
                      className="inline-block mt-2 rounded-md border border-gray-300 hover:bg-violet-900 bg-violet-800 px-4 py-2 text-sm text-purple-100"
                    >
                      Download Sheet Music
                    </a>
                  </li>

                  <li className="border border-violet-300 p-4 rounded-md bg-purple-100">
                    <p className="text-lg font-semibold">🎼 Invention 4 in D Minor</p>
                    <audio controls className="w-full mt-2">
                      <source src="/community/sample2.wav" type="audio/mpeg" />
                    </audio>
                    <a
                      href="/community/sample2.pdf"
                      download
                      className="inline-block mt-2 rounded-md border border-gray-300 hover:bg-violet-900 bg-violet-800 px-4 py-2 text-sm text-purple-100"
                    >
                      Download Sheet Music
                    </a>
                  </li>
                  <li className="border border-violet-300 p-4 rounded-md bg-purple-100">
                    <p className="text-lg font-semibold">🪕 NC Music Vocals</p>
                    <audio controls className="w-full mt-2">
                      <source src="/community/sample3.wav" type="audio/mpeg" />
                    </audio>
                    <a
                      href="/community/sample3.pdf"
                      download
                      className="items-center inline-block mt-2 rounded-md border border-gray-300 hover:bg-violet-900 bg-violet-800 px-4 py-2 text-sm text-purple-100"
                    >
                      Download Sheet Music
                    </a>
                  </li>
                  <li className="border border-violet-300 p-4 rounded-md bg-purple-100">
                    <p className="text-lg font-semibold">🎶 Sneaky Snitch</p>
                    <audio controls className="w-full mt-2">
                      <source src="/community/sample4.wav" type="audio/mpeg" />
                    </audio>
                    <a
                      href="/community/sample4.pdf"
                      download
                      className="items-center inline-block mt-2 rounded-md border border-gray-300 hover:bg-violet-900 bg-violet-800 px-4 py-2 text-sm text-purple-100"
                    >
                      Download Sheet Music
                    </a>
                  </li>
                  <li className="border border-violet-300 p-4 rounded-md bg-purple-100">
                    <p className="text-lg font-semibold">🎼 Twinkle Twinkle</p>
                    <audio controls className="w-full mt-2">
                      <source src="/community/sample5.wav" type="audio/mpeg" />
                    </audio>
                    <a
                      href="/community/sample5.pdf"
                      download
                      className="items-center inline-block mt-2 rounded-md border border-gray-300 hover:bg-violet-900 bg-violet-800 px-4 py-2 text-sm text-purple-100"
                    >
                      Download Sheet Music
                    </a>
                  </li>
                </ul>
                <button 
                  className="rounded-md border border-gray-300 bg-violet-800 hover:bg-violet-900 p-4 text-sm text-purple-100"
                  onClick={() => setShowCommunity(false)}
                >
                  ⬅ Back to Compose
                </button>
              </div>
            ) : (
              // Compose View
              <>
              <form onSubmit={handleSubmit}>
                <ul className="animate-fade-down font-rajdhani flex justify-center items-center max-w w-3/4 p-8 divide-y divide-gray-200 rounded-md border border-gray-300 bg-purple-50">
                  <li>
                    <input type="file" name="mp3" accept=".mp3" onChange={handleFileChange} className="flex justify-center w-full text-center rounded-md border border-gray-300 bg-purple-100 p-3 font-rajdhani font-semibold text-sm text-violet-900"/>
                    <div className="flex justify-center pt-3 pb-3">
                      <img src="/img/think.gif" className="opacity-50 w-[25%] object-contain"/>
                    </div>
                    <input type="text" placeholder="Tell us a little bit about your audio..."
                      value={audioDescription}
                      onChange={handleDescriptionChange}
                      className="flex w-full text-center rounded-md border border-gray-300 bg-purple-100 font-rajdhani font-semibold mb-12 text-l p-6 text-gray-600"
                    />
                    <button type="submit"
                      className="text-center w-full rounded-md border border-gray-300 bg-violet-800 hover:bg-violet-900 font-rajdhani font-semibold mb-10 p-4 text-md text-purple-100"
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
                              className="text-center rounded-md border border-gray-300 bg-violet-800 hover:bg-violet-900 font-rajdhani p-4 text-sm text-purple-100"
                            >
                              Download PDF
                            </a>
                          </div>
                      )}
                    </div>
                  </li>
                </ul>
              </form>
              <ul className="animate-fade-down font-rajdhani flex justify-center items-center mt-4 max-w w-3/4 p-8 divide-y divide-gray-200 rounded-md border border-gray-300 bg-purple-50">
                <li>
                  <p className="text-center mb-2">🎼 Get some inspiration from other users!🎼 </p>
                  <button 
                    onClick={() => setShowCommunity(true)}
                    className="text-center w-full rounded-md border border-gray-300 bg-violet-800 hover:bg-violet-900 font-dancing p-4 text-xl text-purple-100"
                  >
                    Community
                  </button>
                </li>
              </ul>
              </>
            )}
          </div>
        </div>
    </div>
  );
}

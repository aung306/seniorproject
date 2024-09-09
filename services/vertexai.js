import { VertexAI } from '@google-cloud/vertexai';
import { ChatVertexAI } from "@langchain/google-vertexai";

const model = new ChatVertexAI({
  model: "gemini-1.5-flash",
  temperature: 0
});

/**
 * TODO(developer): Update these variables before running the sample.
 */
async function analyze_video_with_audio(projectId = 'arched-vigil-435022-v1') {
  const vertexAI = new VertexAI({project: projectId, location: 'us-central1'});

  const generativeModel = vertexAI.getGenerativeModel({
    model: 'gemini-1.5-flash-001',
  });

  const filePart = {
    file_data: {
      file_uri: 'gs://cloud-samples-data/generative-ai/video/pixel8.mp4',
      mime_type: 'video/mp4',
    },
  };
  const textPart = {
    text: `
    Provide a description of the video.
    The description should also contain anything important which people say in the video.`,
  };

  const request = {
    contents: [{role: 'user', parts: [filePart, textPart]}],
  };

  const resp = await generativeModel.generateContent(request);
  const contentResponse = resp.response;
  console.log(JSON.stringify(contentResponse));
}
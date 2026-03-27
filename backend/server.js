import express from 'express';
import OpenAI from 'openai';

const app = express();
app.use(express.json());

const client = new OpenAI({
  apiKey: 'YOUR_API_KEY'
});

app.post('/analyze', async (req, res) => {
  const { imageUrl } = req.body;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: "Give hygiene score" },
          { type: "input_image", image_url: imageUrl }
        ]
      }
    ]
  });

  res.json({ result: response.output_text });
});

app.listen(5000, () => console.log("Running..."));
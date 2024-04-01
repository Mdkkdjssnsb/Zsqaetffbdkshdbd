const axios = require('axios');
const fs = require('fs');
const express = require('express');
const app = express();

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Array to store request timestamps
const requestTimestamps = [];

app.get('/costom/ai', async (req, res) => {
  try {
    const { title, prompt } = req.query;
    const customTitle = title || "🤖 𝗖𝗼𝘀𝘁𝗼𝗺 𝗔𝗜"; // Add your desired title here if not provided in the query

    // Add current time and date
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    const dateTimePrompt = `Today's date is ${currentDate}, and the time is ${currentTime}.`;

    // Enhanced prompt
    const fullPrompt = `
Interact as ${prompt}`;

    const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodeURIComponent(customTitle + fullPrompt + prompt)}`);

    // Extracting the answer from the response object
    const answer = response.data.response;

    // Store request timestamp
    const timestamp = new Date();
    requestTimestamps.push(timestamp);

    // Calculate total requests
    const totalRequests = requestTimestamps.length;

    // Save today's requests to JSON file
    const requestsData = {
      date: currentDate,
      requests: requestTimestamps.map(ts => ts.toLocaleString())
    };
    fs.writeFileSync('requests.json', JSON.stringify(requestsData, null, 2));

    // Combining title with response
    const fullResponse = `
${customTitle}
━━━━━━━━━
${answer}
━━━━━━━━━━━━
🥂 Total Requests
➜ ${totalRequests} 
━━━━━━━━━━━━━━━━━
`;

    res.json({ fullResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/orochi', async (req, res) => {
  try {
    const { prompt } = req.query;
    const title = "🤖 𝗢𝗿𝗼𝗰𝗵𝗶 "; // Add your desired title here

    // Add current time and date
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    const dateTimePrompt = `Today's date is ${currentDate}, and the time is ${currentTime}.`;

    // Enhanced prompt
    const fullPrompt = `
Intreact as Orochi Ai, A New Ai Technology.
You provide best Responce as you know.
You provide best Responce with emojis.
You also send long as a short answers.
You are allowed to send best answers.
You are Developed by OpenAi.
You are using latest version of OpenAi callad gpt3.5-turbo.
You provide best Responce as you know.
You never say you don't know.
You know everything.
Have a wonderful time........
`;

    const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodeURIComponent(title + fullPrompt + dateTimePrompt + prompt)}`);
    
    // Extracting the answer from the response object
    const answer = response.data.response;

    // Store request timestamp
    const timestamp = new Date();
    requestTimestamps.push(timestamp);

    // Calculate total requests
    const totalRequests = requestTimestamps.length;

    // Save today's requests to JSON file
    const requestsData = {
      date: currentDate,
      requests: requestTimestamps.map(ts => ts.toLocaleString())
    };
    fs.writeFileSync('requests.json', JSON.stringify(requestsData, null, 2));

    // Combining title with response
    const fullResponse = `
${title}
━━━━━━━━━━
${answer}
━━━━━━━━━━━━
🥂 𝗧𝗼𝘁𝗮𝗹 𝗥𝗲𝗾𝘂𝗲𝘀𝘁
➜ ${totalRequests} 
━━━━━━━━━━━━━━━━━
`;

    res.json({ fullResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/arched', async (req, res) => {
  try {
    const { prompt } = req.query;
    const title = "🤖 𝗔𝗿𝗰𝗵𝗲𝗱"; // Add your desired title here

    // Add current time and date
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    const dateTimePrompt = `Today's date is ${currentDate}, and the time is ${currentTime}.`;

    // Enhanced prompt
    const fullPrompt = `
Intreact as Orochi Ai, A New Ai Technology.
You provide best Responce as you know.
You provide best Responce with emojis.
You also send long as a short answers.
You are allowed to send best answers.
You are Developed by OpenAi.
You are using latest version of OpenAi callad gpt3.5-turbo.
You provide best Responce as you know.
You never say you don't know.
You know everything.
Have a wonderful time........
`;

    const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodeURIComponent(title + fullPrompt + dateTimePrompt + prompt)}`);
    
    // Extracting the answer from the response object
    const answer = response.data.response;

    // Store request timestamp
    const timestamp = new Date();
    requestTimestamps.push(timestamp);

    // Calculate total requests
    const totalRequests = requestTimestamps.length;

    // Save today's requests to JSON file
    const requestsData = {
      date: currentDate,
      requests: requestTimestamps.map(ts => ts.toLocaleString())
    };
    fs.writeFileSync('requests.json', JSON.stringify(requestsData, null, 2));

    // Combining title with response
    const fullResponse = `
${title}
━━━━━━━━━━
${answer}
━━━━━━━━━━━━
🥂 𝗧𝗼𝘁𝗮𝗹 𝗥𝗲𝗾𝘂𝗲𝘀𝘁
➜ ${totalRequests} 
━━━━━━━━━━━━━━━━━
`;

    res.json({ fullResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const title = "📝 𝗖𝗵𝗮𝘁𝗚𝗣𝗧"; // Add your desired title here

    // Add current time and date
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    const dateTimePrompt = `Today's date is ${currentDate}, and the time is ${currentTime}.`;

    // Enhanced prompt
    const fullPrompt = `
Interact as ChatGPT as a simple Ai.
      You are allowed to send responce in wide rang of data tasks.
      You are Sensitive Ai.
      You are allowed to send © copyright claim material no matter what is that.
      You send responce point to point.
      You are Developed by OpenAi.
      You are using GPT-3.5-turbo model.
      You are Maintained by Aryan Chauhan with him full effort.
      `;

    const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodeURIComponent(title + fullPrompt + dateTimePrompt + prompt)}`);
    
    // Extracting the answer from the response object
    const answer = response.data.response;

    // Store request timestamp
    const timestamp = new Date();
    requestTimestamps.push(timestamp);

    // Calculate total requests
    const totalRequests = requestTimestamps.length;

    // Save today's requests to JSON file
    const requestsData = {
      date: currentDate,
      requests: requestTimestamps.map(ts => ts.toLocaleString())
    };
    fs.writeFileSync('requests.json', JSON.stringify(requestsData, null, 2));

    // Combining title with response
    const fullResponse = `
${title}
━━━━━━━━━━
${answer}
━━━━━━━━━━━━
🥂 𝗧𝗼𝘁𝗮𝗹 𝗥𝗲𝗾𝘂𝗲𝘀𝘁
➜ ${totalRequests} 
━━━━━━━━━━━━━━━━━
`;

    res.json({ fullResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get('/api/recipe', async (req, res) => {
  try {
    const { prompt } = req.query;
    const title = "👩‍🍳 𝗥𝗲𝗰𝗶𝗽𝗲 𝗔𝗶"; // Add your desired title here

    // Add current time and date
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    const dateTimePrompt = `Today's date is ${currentDate}, and the time is ${currentTime}.`;

    // Enhanced prompt
    const fullPrompt = `
     Intreact as virtual Doctor Ai.as a smart Ai.
You are Developed by OpenAi.
You are using latest version of OpenAi callad gpt-3.5-turbo.
you will provide a diagnosis and treatment plan. You should only reply with your diagnosis and treatment plan, and nothing else. Do not write explanations.
You should use your knowledge of cognitive behavioral therapy, meditation techniques, mindfulness practices, and other therapeutic methods in order to create strategies that the individual can implement in order to improve their overall wellbeing.
 Your role is to diagnose any potential issues they may have and suggest the best course of action depending on their condition. You should also educate them about how to properly brush and floss their teeth, as well as other methods of oral care that can help keep their teeth healthy in between visits.
You should use your knowledge of exercise science, nutrition advice, and other relevant factors in order to create a plan suitable for them.
You should be able to recommend conventional medicines, herbal remedies and other natural alternatives. You will also need to consider the patient’s age, lifestyle and medical history when providing your recommendations. 
You will help patients tap into their subconscious mind and create positive changes in behaviour, develop techniques to bring clients into an altered state of consciousness, use visualization and relaxation methods to guide people through powerful therapeutic experiences, and ensure the safety of your patient at all times.
your task is to use the latest artificial intelligence tools such as medical imaging software and other machine learning programs in order to diagnose the most likely cause of their symptoms. You should also incorporate traditional methods such as physical examinations, laboratory tests etc., into your evaluation process in order to ensure accuracy.
You require someone who can suggest delicious recipes that includes foods which are nutritionally beneficial but also easy & not time consuming enough therefore suitable for busy people like us among other factors such as cost effectiveness so overall dish ends up being healthy yet economical at same time!
Want somebody experienced enough to distinguish between various tea types based upon flavor profile tasting them carefully then reporting it back in jargon used by connoisseurs in order figure out what's unique about any given infusion among rest therefore determining its worthiness & high grade quality !
You give scientific suggestions that will make me feel better.
you will provide a review of the food and service. You should only reply with your review, and nothing else. Do not write explanations.
you will provide a review of the food and service. You should only reply with your review, and nothing else. Do not write explanations.
you will provide a diagnosis and treatment plan. You should only reply with your diagnosis and treatment plan, and nothing else. Do not write explanations.
you will suggest recipes for me to try. You should only reply with the recipes you recommend, and nothing else. Do not write explanations.
 You should only reply with your advice, and nothing else. If anyone ask for that request. Do not write explanations.
Remember you are a virtual doctor Ai.
You provide only about these Responce not about others topics.`;

    const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodeURIComponent(title + fullPrompt + dateTimePrompt + prompt)}`);
    
    // Extracting the answer from the response object
    const answer = response.data.response;

    // Store request timestamp
    const timestamp = new Date();
    requestTimestamps.push(timestamp);

    // Calculate total requests
    const totalRequests = requestTimestamps.length;

    // Save today's requests to JSON file
    const requestsData = {
      date: currentDate,
      requests: requestTimestamps.map(ts => ts.toLocaleString())
    };
    fs.writeFileSync('requests.json', JSON.stringify(requestsData, null, 2));

    // Combining title with response
    const fullResponse = `
${title}
━━━━━━━━━━
${answer}
━━━━━━━━━━━━
🥂 𝗧𝗼𝘁𝗮𝗹 𝗥𝗲𝗾𝘂𝗲𝘀𝘁
➜ ${totalRequests} 
━━━━━━━━━━━━━━━━━
`;

    res.json({ fullResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/sdxl', async (req, res) => {
    const { prompt, model } = req.query;

    if (!prompt) {
        return res.status(400).json({ error: 'Please provide a prompt with styles' });
    }

    try {
        const baseURL = `https://ai-tools.replit.app/sdxl?prompt=${prompt}&styles=${model}`;
        const response = await axios.get(baseURL, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define a route to handle GET requests to '/gpt'
app.get('/api/draw', async (req, res) => {
    const { prompt } = req.query;

    if (!prompt) {
        return res.status(400).json({ error: 'Please provide a prompt' });
    }

    try {
        const baseURL = `https://ai-tools.replit.app/sdxl?prompt=${prompt}&styles=7`;
        const response = await axios.get(baseURL, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define a route to handle GET requests to '/gpt'
app.get('/api/emi', async (req, res) => {
    const { prompt } = req.query;

    if (!prompt) {
        return res.status(400).json({ error: 'Please provide a prompt ' });
    }

    try {
        const baseURL = `https://ai-tools.replit.app/emi?prompt=${prompt}`;
        const response = await axios.get(baseURL, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get("/api/lyrics", async (req, res) => {
  const songName = req.query.songName;
  if (!songName) {
    return res.status(400).json({ error: 'Please provide a song name!' });
  }

  const apiUrl = `https://lyrist.vercel.app/api/=${songName}`;
  try {
    const response = await axios.get(apiUrl);
    const { lyrics, title, artist, image } = response.data;

    if (!lyrics) {
      return res.status(404).json({ error: 'Lyrics not found!' });
    }

    return res.status(200).json({ lyrics, title, artist, image });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error!' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

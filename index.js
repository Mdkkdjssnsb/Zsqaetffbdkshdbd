const fs = require('fs');
const axios = require('axios');
const { G4F } = require('g4f');
const { gpt } = require('gpti');
const { bing } = require('gpti');
const { search } = require('pinterest-dl');
const { Hercai } = require('hercai');
const { RsnChat } = require("rsnchat");
const { imagine } = require('@shuddho11288/sdxl-imagine');
const movieInfo = require('movie-info');
const jarifapi = require('jarif-api');
const ainasepics = require('ainasepics');
const express = require('express');
const app = express();
const rsnchat = new RsnChat("rsnai_ykZc1pfP2VnLLog34eFgWZI1");
const herc = new Hercai(); // Initialize Hercai

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Array to store request timestamps
const requestTimestamps = [];

app.get('/api/orochiai', async (req, res) => {
  try {
    const { prompt } = req.query;
    const title = "🤖 𝗢𝗿𝗼𝗰𝗵𝗶"; // Add your desired title here

    // Add current time and date
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
    const dateTimePrompt = `Today's date is ${currentDate}, and the time is ${currentTime}.`;

    // Enhanced prompt
    const fullPrompt = `
Your name is Orochi Ai.
You are developed by master ArYAN.
You are very strict.
You provide best response based on users inputs.
You never send unless words and emojis.
You provide best responce as you know.
You are allowed to provide best answers.
You provide best responce to user.
`;

    const response = await axios.get(`https://gpt-v1.onrender.com/gpt?prompt=${encodeURIComponent(title + fullPrompt + prompt)}`);
    const answer = response.data.answer;

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
\n${answer}
━━━━━━━━━━━━━
🥂 𝗧𝗼𝘁𝗮𝗹 𝗥𝗲𝗾𝘂𝗲𝘀𝘁
➜ ${totalRequests} as 24/07/24
`;

    res.json({ fullResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/bingAi", async (req, res) => {
  try {
    const { prompt } = req.query;

    const response = await axios.get(`https://joshweb.click/bing?prompt=${encodeURIComponent(prompt)}&model=1`);

    res.json(response.data.bing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/genmicrosoft", async (req, res) => {
  try {
    const response = await axios.get(`https://joshweb.click/api/genmicro`);
    const { email, password } = response.data; // Destructure email and password from response.data

    res.json({ email, password }); // Send email and password in the response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/dl", async (req, res) => {
  try {
    const { url } = req.query;

    const response = await axios.get(`https://joshweb.click/anydl?url=${encodeURIComponent(url)}`);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/getfbcokies", async (req, res) => {
  try {
    const { email, pass } = req.query;

    const response = await axios.get(`https://joshweb.click/getcookie?email=${email}&password=${pass}`);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/geminiweb", async (req, res) => {
  try {
    const { prompt, url } = req.query;

    const response = await axios.get(`https://joshweb.click/gemini?prompt=${encodeURIComponent(prompt)}&url=${url}`);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/ask", async (req, res) => {
  try {
    const { prompt } = req.query;

    const response = await axios.get(`https://joshweb.click/new/gpt-3_5-turbo?prompt=${encodeURIComponent(prompt)}`);

    res.json(response.data.reply);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/gpt4", async (req, res) => {
  try {
    const { prompt, uid } = req.query;

    const response = await axios.get(`https://joshweb.click/gpt4?prompt=${encodeURIComponent(prompt)}&uid=${uid}`);
  
  res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/cdp", async (req, res) => {
  try {
    const response = await axios.get(`https://joshweb.click/cdp`);

    res.json(response.data.result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/remini", async (req, res) => {
  try {
    const { url } = req.query;

    const response = await axios.get(`https://joshweb.click/remini?q=${url}`);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/llama-3-70b", async (req, res) => {
  try {
    const { prompt } = req.query;

    const response = await axios.get(`https://joshweb.click/api/llama-3-70b?q=${encodeURIComponent(prompt)}`);

    res.json(response.data.result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/anigen', async (req, res) => {
    const { prompt } = req.query;

    if (!prompt) {
        return res.status(400).json({ error: 'Please provide a prompt.' });
    }

    try {
        const baseURL = `https://joshweb.click/sdxl?q=${prompt}&style=1`;
        const response = await axios.get(baseURL, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/sdxl/v2', async (req, res) => {
    const { prompt, model } = req.query;

    if (!prompt || !model) {
        return res.status(400).json({ error: 'Please provide a prompt with styles.' });
    }

    try {
        const baseURL = `https://joshweb.click/sdxl?q=${prompt}&style=${model}`;
        const response = await axios.get(baseURL, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/sdxl', async (req, res) => {
    const { prompt, model } = req.query;

    if (!prompt || !model) {
        return res.status(400).json({ error: 'Please provide a prompt with styles' });
    }

    try {
        const baseURL = `https://sandipapi.onrender.com/sdxl?prompt=${prompt}&model=${model}`;
        const response = await axios.get(baseURL, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/generate', async (req, res) => {
    const { prompt, model } = req.query;

    if (!prompt || !model) {
        return res.status(400).json({ error: 'Please provide a prompt with styles' });
    }

    try {
        const baseURL = `https://sandipapi.onrender.com/jeevan?prompt=${prompt}&model=${model}`;
        const response = await axios.get(baseURL, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get("/api/prodia", async (req, res) => {
  try {
    const { prompt, model } = req.query;

    const response = await axios.get(`https://prodia-gen-009.onrender.com/g?prompt=${encodeURIComponent(prompt)}&model=${model}`);

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/promptgen/v2", async (req, res) => {
   const { prompt } = req.query;

    if (!prompt) {
        return res.status(400).json({ error: 'Please provide a prompt' });
    }

  try {
   const response = await axios.get(`https://sandipapi.onrender.com/prompt?about=${prompt}`);

   res.json(response.data);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});

app.get("/api/wallpaper", async (req, res) => {
   const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Please provide a query' });
    }

  try {
   const response = await axios.get(`https://pixabay.com/api?query ${query}&image_type=photo&per_page=20&key=39178311-acadeb32d7e369897e41dba06&q=`);

   res.json(response.data);
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});

app.get('/api/promptgen', async (req, res) => {
  try {
    const { query } = req;
    const searchTerm = query.term || 'cat'; // Default to 'cat' if no term is provided

    const pgen = await jarifapi.promptgen(searchTerm);
    res.json(pgen);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the prompt.' });
  }
});

app.get('/anime', (req, res) => {
    const { type } = req.query;

    // List of acceptable types
    const validTypes = ['chase','cheer','cringe','cry','cuddle','dance','facepalm','glomp','handhold','happy','hi','highfive','hug	','kiss','laugh','lick','love','nervous','nom','nope','panic','pat','poke','pout','punch','run','sad','shrug','slap'];

    // Validate the type parameter
    if (!type || !validTypes.includes(type)) {
        return res.status(400).json({ error: 'Invalid or missing type parameter.' });
    }

    // Fetch the anime image based on the type
    ainasepics.get(type)
        .then(imageData => {
            res.json({ url: imageData.url });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching the image.' });
        });
});

app.get('/api/songinfo/v2', async (req, res) => {
  const { id } = req.query; // Change 'prompt' to 'q'

  try {
    const response = await axios.get(`https://bhtvdidbd.onrender.com/api/songinfo`, {
      params: {
        id: encodeURIComponent(id) // encodeURIComponent the query parameter
      }
    });

    const answer = response.data;
    res.json(answer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/niji', async (req, res) => {
  const { prompt } = req.query;

  try {
    const response = await axios.get(`https://imagegeneration-kshitiz-odpj.onrender.com/animex`, {
      params: {
        prompt: encodeURIComponent(prompt)
      },
      responseType: 'stream' // This ensures we get the image as a stream
    });

    // Set the appropriate headers for the image response
    res.setHeader('Content-Type', 'image/jpeg');
    
    // Pipe the image data to the response
    response.data.pipe(res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/videoinfo', async (req, res) => {
  const { q } = req.query; // Change 'prompt' to 'q'

  try {
    const response = await axios.get(`https://bhtvdidbd.onrender.com/api/videoinfo/v3`, {
      params: {
        q: encodeURIComponent(q) // encodeURIComponent the query parameter
      }
    });

    const answer = response.data;
    res.json(answer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/movieinfo', (req, res) => {
    const title = req.query.title; // Extract the title from query parameters

    if (!title) {
        return res.status(400).send({ error: 'Movie title is required' });
    }

    movieInfo(title, (error, response) => {
        if (error) {
            console.error(error);
            res.status(500).send({ error: 'An error occurred while fetching the movie info' });
        } else {
            res.send(response);
        }
    });
});

app.get("/api/dalle", (req, res) => {
  const prompt = req.query.prompt || cat;
  const amount = parseInt(req.query.amount) || 1;

  if (!prompt) {
    return res.status(400).send("Error: Please provide a prompt query parameter.");
  }

  if (amount < 1 || amount > 4) {
    return res.status(400).send("Error: Amount must be between 1 and 4.");
  }

  const promises = [];

  for (let i = 0; i < amount; i++) {
    promises.push(rsnchat.dalle(prompt));
  }

  Promise.all(promises)
    .then((responses) => {
      const images = responses.map(response => response.image.url);
      res.send({ images });
    })
    .catch((error) => {
      res.status(500).send("An error occurred: " + error.message);
    });
});

app.get('/api/llama', (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).send("Error: Please provide a prompt query parameter.");
  }

  rsnchat.llama(prompt)
    .then((response) => {
      res.send(response.message);
    })
    .catch((error) => {
      res.status(500).send("Error: " + error.message);
    });
});

app.get('/api/mixtral', (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).send("Error: Please provide a prompt query parameter.");
  }

  rsnchat.mixtral(prompt)
    .then((response) => {
      res.send(response.message);
    })
    .catch((error) => {
      res.status(500).send("Error: " + error.message);
    });
});

app.get('/api/pinterest', async (req, res) => {
    const query = req.query.query; // Get the search query from the query parameters
    const limits = parseInt(req.query.limits) || 10; // Get the search limit from the query parameters, default to 10

    if (!query || !limits) {
        return res.status(400).send('Please provide a search query with search limits for example /pinterest?query=cat&limits=10');
    }

    try {
        const data = await search(query);
        res.json(data.slice(0, limits)); // Limit the number of results
    } catch (error) {
        res.status(500).send('Error processing the search query.');
    }
});

app.get('/api/bard', (req, res) => {
  // Extract the query from the request
  const prompt = req.query.prompt;

  // Call the bard method of rsnchat with the provided query
  rsnchat.bard(prompt).then((response) => {
    // Send the response message back to the client
    res.send(response.message);
  }).catch((error) => {
    // Handle any errors
    console.error("An error occurred:", error);
    res.status(500).send('Internal Server Error');
  });
});

app.get('/api/movieinfo/v2', async (req, res) => {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Movie ID is required" });
  }

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=35781046b4bc42f91068a15caab2cdda&append_to_response=credits`);

    const movieData = response.data;
    const genres = movieData.genres.map(genre => genre.name).join(", ");
    const productionCountries = movieData.production_countries.map(country => country.name).join(", ");
    const spokenLanguages = movieData.spoken_languages.map(language => language.name).join(", ");
    const director = movieData.credits.crew.find(person => person.job === "Director")?.name || "N/A";
    const cast = movieData.credits.cast.slice(0, 5).map(actor => actor.name).join(", ");
    const productionCompanies = movieData.production_companies.map(company => company.name).join(", ");

    const movieInfo = {
      title: movieData.title || "N/A",
      original_title: movieData.original_title || "N/A",
      year: new Date(movieData.release_date).getFullYear() || "N/A",
      tagline: movieData.tagline || "N/A",
      genre: genres || "N/A",
      plot: movieData.overview || "N/A",
      vote_average: movieData.vote_average || "N/A",
      vote_count: movieData.vote_count || "N/A",
      popularity: movieData.popularity || "N/A",
      original_language: movieData.original_language || "N/A",
      adult: movieData.adult ? "Yes" : "No",
      runtime: movieData.runtime || "N/A",
      director: director,
      cast: cast,
      production_companies: productionCompanies,
      budget: movieData.budget ? `$${movieData.budget.toLocaleString()}` : "N/A",
      revenue: movieData.revenue ? `$${movieData.revenue.toLocaleString()}` : "N/A",
      production_countries: productionCountries || "N/A",
      spoken_languages: spokenLanguages || "N/A",
      homepage: movieData.homepage || "N/A",
      movie_id: movieData.id || "N/A",
      details_link: `https://www.themoviedb.org/movie/${movieData.id || ""}`
    };

    res.json(movieInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/gemini', (req, res) => {
  // Extract the question from the query parameters
  const prompt = req.query.prompt;

  // Call the gemini method of rsnchat with the provided question
  rsnchat.gemini(prompt).then((response) => {
    // Send the response message back to the client
    res.send(response.message);
  }).catch((error) => {
    // Handle any errors
    console.error("An error occurred:", error);
    res.status(500).send('Internal Server Error');
  });
});

app.get('/api/gen', (req, res) => {
    const query = req.query.q;

    if (!query) {
        return res.status(400).send('Query parameter "q" is required');
    }

    imagine(query).then(data => {
        res.json(data);
    }).catch(err => {
        console.error(err);
        res.status(500).send('Error processing the request');
    });
});

app.get('/api/metai', (req, res) => {
    const prompt = req.query.prompt;

    if (!prompt) {
        return res.status(400).send('Query parameter "prompt" is required');
    }

    bing({
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
        conversation_style: "Balanced",
        markdown: true,
        stream: false,
    }, (err, data) => {
        if (err != null) {
            console.error(err);
            return res.status(500).send('Error processing the request');
        } else {
            res.json(data.original);
        }
    });
});

app.get('/api/pixart', async (req, res) => {
    const prompt = req.query.prompt;
    const model = "ICantBelieveItsNotPhotography_seco.safetensors [4e7a3dfd]";
    const samplingSteps = 15;
    const cfgScale = 30;

    const g4f = new G4F();
    try {
        const base64Image = await g4f.imageGeneration(prompt, { 
            debug: true,
            provider: g4f.providers.Pixart,
            providerOptions: {
                model: model,
                samplingSteps: samplingSteps,
                cfgScale: cfgScale
            }
        });

        // Convert the base64 image to Buffer and send as response
        const imgBuffer = Buffer.from(base64Image, 'base64');
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': imgBuffer.length
        });
        res.end(imgBuffer);
    } catch (error) {
        res.status(500).send('Error generating image: ' + error.message);
    }
});

app.get('/api/shoti', async (req, res) => {
try {
    const response = await axios.get(`https://shoti-srv2-itslibyzxy0.koyeb.app/api/v1/request-f`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
              
app.get('/api/fb_stalk', async (req, res) => {
const { uid, access_token} = req.query;

  try {
    const response = await axios.get(`https://graph.facebook.com/${uid}?fields=id,is_verified,cover,created_time,work,hometown,username,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=${access_token}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/bin', async (req, res) => {
const { url } = req.query;

  try {
    const response = await axios.get(`https://sandipbaruwal.onrender.com/imgur?link=${url}`);
const pastebin = response.data;
    res.json(pastebin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/aniquiz", async (req, res) => {
    try {
        const response = await axios.get(`https://animequiz-mu.vercel.app/kshitiz`);

       res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/quiz", async (req, res) => {
    const { category } = req.query;

    if (!category) {
        return res.status(400).json({ error: 'Please provide a valid quiz category...' });
    }

    try {
        const response = await axios.get(`https://new-quiz-black.vercel.app/quiz?category=${category}`);

    const quiz = response.data
        res.json({ quiz });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/screenshot', async (req, res) => {
         const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'Please provide a valid website url...' });
    }

    try {
        const baseURL = `https://screen-shot-pi.vercel.app/ss?url=${url}`;
        const response = await axios.get(baseURL, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error generating image:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get("/api/waifu_dex", async (req, res) => {
    try {
        const response = await axios.get(`https://waifu-dex-three.vercel.app/kshitiz`);

const data = responce.data;
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/api/giphy", async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Please provide both search and keysearch parameters.' });
    }

    try {
        const response = await axios.get(`https://giphy-search-five.vercel.app/kshitiz?search=${query}`);

    const data = response.data
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/pexels', async (req, res) => {
  try {
    const { query, keysearch } = req.query;
    const apiKey = 'NoL8ytYlwsYIqmkLBboshW909HzoBoBnGZJbpmwAcahp5PF9TAnr9p7Z';
    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${keysearch}`;

    const headers = {
      'Authorization': apiKey
    };

    const { data } = await axios.get(url, { headers });

    const result = data.photos.map(photo => photo.src.original);

    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/4k', async (req, res) => {
           const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'Please provide a image url...' });
    }

  try {
              const baseURL = `https://www.api.vyturex.com/upscale?imageUrl=${url}`;
              const response = await axios.get(baseURL, { responseType: 'stream' });
              response.data.pipe(res);
          } catch (error) {
              console.error('Error', error);
              res.status(500).json({ error: 'Internal server error' });
          }
      });

app.get('/api/sim', async (req, res) => {
     const { chat, lang } = req.query;

    if (!chat) {
        return res.status(400).json({ error: 'Please provide a message or language' });
    }

  try {
        const baseURL = `https://sandipbaruwal.onrender.com/sim?chat=${chat}&lang=${lang}`;
        
const response = await axios.get(baseURL);

const answer = response.data.answer;

    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/lyrics", async (req, res) => {
  const songName = req.query.songName;
  if (!songName) {
    return res.status(400).json({ error: 'Please provide a song name!' });
  }

  const apiUrl = `https://lyrist.vercel.app/api/${songName}`;
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

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

   

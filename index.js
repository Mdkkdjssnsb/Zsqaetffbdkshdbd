const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

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

app.get('/api/shoti', async (req, res) => {
try {
    const response = await axios.get(`https://shoti-srv2-itslibyzxy0.koyeb.app/api/v1/request-f`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

   

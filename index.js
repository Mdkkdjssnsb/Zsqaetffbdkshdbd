<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>ArySprak: Ai Technology</title>
   <!-- Favicon -->
  <link rel="icon" href="https://i.ibb.co/7rBZBKF/image.jpg" type="image/jpg">
    
  <style>
    body {
      font-family: 'Verdana', sans-serif;
      margin: 20px;
      background: linear-gradient(to right, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080);
      color: #333;
    }

    header {
      text-align: center;
      margin-bottom: 20px;
    }

    h1 {
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      margin-bottom: 10px;
    }

    .logo {
      width: 80px;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    nav {
      text-align: center;
      margin-bottom: 20px;
    }

    nav a {
      text-decoration: none;
      color: #ff9900;
      padding: 5px 15px;
      margin: 0 10px;
      border-radius: 20px;
      transition: background-color 0.5s;
    }

    nav a:hover {
      background-color: #ff9900;
      color: #fff;
    }
/* API list container */
.api-list {
    list-style: none;
    padding: 0;
    text-align: center;
    margin: 0 auto; /* Center the list horizontally */
    max-width: 600px; /* Limit the maximum width of the list */
}

/* API list item */
.api-list-item {
    margin-bottom: 50px;
    border: 2px solid #000; /* Border for each list item */
    border-radius: 30px;
    padding: 20px; /* Increased padding for better spacing */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
    transition: transform 0.3s ease, border-color 0.3s, box-shadow 0.3s; /* Add transitions */
    position: relative; /* Position relative for absolute positioning of badge */
}

/* API list item hover effect */
.api-list-item:hover {
    transform: translateY(-5px); /* Move the list item up slightly on hover */
    border-color: #ff9900; /* Change border color on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Increase shadow on hover */
}

/* API badge */
.api-badge {
    position: absolute;
    top: -10px; /* Adjust positioning */
    right: -10px; /* Adjust positioning */
    background-color: #ff9900;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 20px;
}

/* API link */
.api-list-item a {
    text-decoration: none;
    color: #ff9900;
    font-weight: bold;
    padding: 10px 20px; /* Increased padding for better clickability */
    border: 2px solid #ff9900;
    border-radius: 10px;
    transition: background-color 0.3s, color 0.3s; /* Added color transition */
    display: inline-block;
    background-color: transparent; /* Transparent background by default */
}

/* API link hover effect */
.api-list-item a:hover {
    background-color: #ff9900; /* Change background color on hover */
    color: #fff; /* Change text color on hover for better contrast */
}

/* API link focus effect */
.api-list-item a:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.5); /* Add custom focus style */
}

  .api-details {
    display: flex;
    justify-content: space-between;
    align-items: center; 
  }

.api-creator {
    color: #dc3545; 
    font-size: 14px;
    text-align: center;
  }

    .api-form {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: rgba(255, 153, 0, 0.8);
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      animation: fadeIn 4s ease-in-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .api-form label {
      display: block;
      margin-bottom: 10px;
      color: #fff;
    }

    .api-form input {
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
      box-sizing: border-box;
    }

    .api-form button {
      background-color: #ff0000;
      color: #fff;
      padding: 10px 15px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
    }

    .owner-info {
      margin-top: 20px;
      border-top: 1px solid #ccc;
      padding-top: 10px;
      color: #333;
      text-align: center;
    }

    #current-time,
    #current-date {
      color: #ff0000;
      text-align: center;
      border-radius: 30px;
      font-weight: bold;
      animation: heartbeat 1.5s infinite;
    }

    @keyframes heartbeat {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    .social-links {
      text-align: auto;
      margin-top: 10px;
    }

    .social-links a {
      text-decoration: none;
      color: #00ccff;
      font-size: 20px;
      margin: 0 15px;
      border-radius: 20px;
      transition: transform 0.3s ease-in-out;
    }

    .social-links a:hover {
      transform: scale(1.2);
    }
  /* Cool Features */
    .cool-feature {
      margin: 20px 0;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    
    .cool-feature h2 {
      color: #ff00ff;
      font-size: 24px;
      margin-bottom: 10px;
    }
    
    .cool-feature p {
      color: #666;
      margin-bottom: 10px;
    }
    
    .cool-feature img {
      max-width: 100%;
      border-radius: 8px;
    }
  
  </style>
</head>
<body>
<header>
  <img class="logo" src="https://i.imgur.com/U6zYX1S.jpeg" alt="ArySprak: Ai Technology">
  <h1>ArySprak: AI Technology</h1>
</header>

<!-- Background Music -->
<audio autoplay loop>
  <source src="https://tinyurl.com/yuz8p2bb" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

<nav>
  <a href="/">home</a>
</nav>

<!-- custom api form -->
<form class="api-form" action="/api/customai" method="get">
  <label for="customTitle">Add your Ai title in bold or any font style</label>
  <input type="text" id="customtitle" name="title" required>

  <label for="costom">Add your custom Ai prompts. example: You are an axis Ai, You are developed by ArYAN Chauhan</label>
  <input type="text" id="check" name="prompt" required>

  <label for="prompt">Add your search prompts query. example: hello, hi </label>
  <input type="text" id="prompt" name="prompt" required>

  <button type="submit">submit</button>
</form>

<!-- API Buttons -->
<ul class="api-list">
    <h1>Hindi Lang AIs</h1>
<ul class="api-list">

<li class="api-list-item">
      <a href="/api/hornyv2?prompt=hello">Horny Ai</a></li>

<li class="api-list-item">
      <a href="/api/songmakerai?prompt=hello">SongMaker Ai</a></li>

  <ul class="api-list">
    <h1>OFFICIAL AI APIs</h1>
    
  <li class="api-list-item"><a href="/api/boxai?prompt=hello">BoxAi API</a></li>

  <li class="api-list-item"><a href="/api/linerai?prompt=hello">LinerAi API</a></li>  

<li class="api-list-item"><a href="/api/gemini?prompt=hello">Gemini Ai API</a></li>

<li class="api-list-item"><a href="/api/gemini2?prompt=hello">Gemini2 Ai API</a></li>

  <li class="api-list-item"><a href="/api/metallamaai?prompt=hello">MetallamaAi API</a></li>

  <li class="api-list-item"><a href="/api/mistral?prompt=hello">MistralAi API</a></li>

  <li class="api-list-item"><a href="/api/gpt?prompt=hello">GPT API</a></li>
 
    <li class="api-list-item"><a href="/api/hornyai?prompt=hello">HORNY AI </a></li>

   <li class="api-list-item"><a href="/api/miakhalifa?prompt=hello">Mia Khalifa Ai</a></li>

  <li class="api-list-item"><a href="/api/babeai?prompt=hello">Girlfriend AI</a></li>
  
   <li class="api-list-item"><a href="/api/creativeai?prompt=hello">Creative Ai</a></li>

 <li class="api-list-item">
      <a href="/api/travelai?prompt=hello">Traveling Ai API</a></li>
 
<li class="api-list-item">
      <a href="/api/foolai?prompt=hello">Fool AI API</a></li>

    <li class="api-list-item">
      <a href="/api/memsai?prompt=hello">Mems AI API</a></li>
 
<li class="api-list-item">
      <a href="/api/jokesterai?prompt=hello">Jokester AI API</a></li>
    
     <li class="api-list-item">
      <a href="/api/lyricsai?prompt=hello">Lyrics AI API</a></li>
 
     <li class="api-list-item">
      <a href="/api/sadlyricsai?prompt=hello">SadLyricsMaker Ai</a></li>
 
<li class="api-list-item">
      <a href="/api/rapperai?prompt=hello">RapSongMaker Ai</a></li>
 
    <li class="api-list-item">
      <a href="/api/sadai?prompt=hello">Sad AI API</a></li>
    
     <li class="api-list-item">
      <a href="/api/recipeai?prompt=hello">Recipe Creator Ai</a></li>

<li class="api-list-item">
      <a href="/api/hackerai?prompt=hello">Hacker AI</a></li>
    
<li class="api-list-item">
      <a href="/api/automobileai?prompt=hello">Automobile AI</a></li>
  
     <li class="api-list-item">
      <a href="/api/businessai?prompt=hello">Business AI API</a></li> 
       
<li class="api-list-item">
      <a href="/api/uxi-incai?prompt=hello">UX-UI AI API</a></li>
 
  <li class="api-list-item">
      <a href="/api/javascriptai?prompt=hello">JavaScript Ai API</a></li>

 <li class="api-list-item">
      <a href="/api/machinelrai?prompt=hello">MachineLr Ai API</a></li>
 
<li class="api-list-item">
      <a href="/api/sql-incai?prompt=hello">SQL-INC Ai API</a></li>
 
<li class="api-list-item">
      <a href="/api/js-incai?prompt=hello">JavaScript-INC API</a></li>
 
<li class="api-list-item">
      <a href="/api/it-incai?prompt=hi">IT Ai API</a></li>
 
<li class="api-list-item">
      <a href="/api/softwaredevai?prompt=hii">SoftwareDev API</a></li>
 
<li class="api-list-item">
      <a href="/api/r-incai?prompt=hyu">R-Inc Ai API</a></li>
 
<li class="api-list-item">
      <a href="/api/python-incai?prompt=hello">Python-Inc Ai API</a></li>
 
<li class="api-list-item">
      <a href="/api/solrserai?prompt=hello">SolrSer Ai API</a></li>
 
<li class="api-list-item">
      <a href="/api/regexai?prompt=hello">Regex Ai API</a></li>
 
     <li class="api-list-item">
      <a href="/api/javaai?prompt=hello">Java Ai API</a></li>
 
 <li class="api-list-item">
      <a href="/api/pythonai?prompt=hello">Python Ai API</a></li>
 
 <li class="api-list-item">
      <a href="/api/htmlai?prompt=hello">HTML Ai API</a></li>
 
<li class="api-list-item">
      <a href="/api/cssai?prompt=hello">CSS Ai API</a></li>
    
<li class="api-list-item">
      <a href="/api/mathematicsai?prompt=hello">Mathematics AI API</a></li> 

   <li class="api-list-item">
      <a href="/api/grammarai?prompt=hello">Grammar AI API</a></li> 
  
 <li class="api-list-item">
      <a href="/api/philosophyai?prompt=hi">Philosophy AI API</a></li> 

   <li class="api-list-item">
      <a href="/api/historianai?prompt=hello">Historian AI API</a></li> 

  <li class="api-list-item">
      <a href="/api/doctorai?prompt=hello">Doctor AI API</a></li> 

<li class="api-list-item">
      <a href="/api/academicianai?prompt=hello">Academician AI API</a></li> 

    <ul class="api-list">
    <h1>MEDIA APIs</h1>
    
    <li class="api-list-item">
<a href="/api/art?model=1&url=https://tinyurl.com/yuz8p2bb">Art API</a></li>  

    <li class="api-list-item">
<a href="/api/remini?url=https://i.ibb.co/rcgQhLk/image.jpg">Remini API</a></li>

    <li class="api-list-item">
<a href="/api/4k?url=https://i.ibb.co/rcgQhLk/image.jpg">4K API</a></li>

   <li class="api-list-item">
<a href="/api/removebg?url=https://i.ibb.co/rcgQhLk/image.jpg">RemoveBG API</a></li>

  <li class="api-list-item">
<a href="/api/pastebin?url=https://tinyurl.com/yuz8p2bb">Pastebin API</a></li>
 
 <li class="api-list-item">
      <a href="/api/wasted?uid=1">Wasted API</a></li> 
    
  <li class="api-list-item">
      <a href="/api/wanted?uid=1">Wanted API</a></li> 
   
 <li class="api-list-item">
   <a href="/api/pet?uid=1">Pet API</a></li> 
     
 <li class="api-list-item">
      <a href="/api/shit?uid=1">Shit API</a></li> 
    
 <li class="api-list-item">
      <a href="/api/draw?prompt=cat">Draw API</a></li> 
     
  <li class="api-list-item">
      <a href="/api/cat/img">CAT IMAGES</a></li> 
    
  <li class="api-list-item">
      <a href="/api/generate?prompt=cat&model=19">Generate API</a></li>

<li class="api-list-item">
      <a href="/api/prodia?prompt=cat&model=19">Prodia API</a></li>

<li class="api-list-item">
      <a href="/api/gen?prompt=cat&model=5">Anigen API</a></li> 
 
 <li class="api-list-item">
      <a href="/api/sdxl?prompt=sky&model=7">Sdxl API</a></li> 

 <li class="api-list-item">
      <a href="/api/imagine?prompt=cat>Imagine API</a></li> 

 <li class="api-list-item">
      <a href="/api/art?model=1&url=">Art API</a></li> 

 <li class="api-list-item">
      <a href="/api/gen?prompt=cat">Gen API</a></li> 

 <ul class="api-list">
<h1>IMGSEARCH APIs</h1>

  <li class="api-list-item">
<a href="/api/unsplash?query=nature">Unsplash API</a></li>
  
    <li class="api-list-item">
<a href="/api/pexels?query=nature&keysearch=9">Pexels API</a></li>

     <li class="api-list-item">
      <a href="/api/pinterest?query=anime">Pinterest API</a></li>

  <li class="api-list-item">
      <a href="/api/imgsearch?prompt=hello">ImageSearch API</a></li>

<ul class="api-list">
    <h1>DOWNLOAD VIDEOS</h1>

  <li class="api-list-item">
      <a href="/api/fbdl?url=https://www.facebook.com/reel/331834579347199/?mibextid=rS40aB7S9Ucbxw6v</a></li>

    <ul class="api-list">
    <h1>OTHER APIs</h1>
    
 <li class="api-list-item">
      <a href="/api/advice">Advice API</a></li> 

 <li class="api-list-item">
      <a href="/api/fact">Fact API</a></li> 

  <li class="api-list-item">
      <a href="/api/pickupline">Pickuplines API</a></li> 

  <li class="api-list-item">
      <a href="/api/quote?category=love">Quote API</a></li> 

   <li class="api-list-item"><a href="/api/sim?chat=hello&lang=en">Simisimi API</a></li>

  <li class="api-list-item">
      <a href="/api/news?countryName=np">New API</a></li> 
  
  <li class="api-list-item"><a href="/api/describe?url=http://tinyurl.com/yp9fq87n">Prompts API</a></li>

  <li class="api-list-item"><a href="/api/promptgen?prompt=cat">PromptGen API</a></li>  

<ul class="api-list">
    <h1>MUSICAL APIs</h1>
 
 <li class="api-list-item">
      <a href="/api/lyrics?songName=roar">Lyrics API</a></li> 
    
   <li class="api-list-item">
      <a href="/api/lyrics?songName=roar">Multiple Lyrics API</a></li> 
  
<ul class="api-list">
    <h1>ANIME APIs</h1>
 
 <li class="api-list-item">
      <a href="/api/dp">Couples DP </a></li> 
    
 <li class="api-list-item">
      <a href="/api/anigen?prompt=girl">AnimeGen API</a></li> 

   <li class="api-list-item">
      <a href="/api/nsfw">Nsfw IMG API</a></li> 

   <li class="api-list-item">
      <a href="/api/anime">Anime Images</a></li> 

   <li class="api-list-item">
      <a href="/api/waifupic?name=neko">Anime Waifu</a></li> 

   <li class="api-list-item">
      <a href="/api/waifu">Waifu Images</a></li> 
  
     <li class="api-list-item">
      <a href="/api/endyai?prompt=hello">Endy Ai</a>
   <div class="api-details">
   <span class="api-creator">This API was Created by Dãññy Çōdēx</span>
    </div>
    </li>

     <li class="api-list-item">
      <a href="/api/lilyai?prompt=hello">Lily Ai</a>
   <div class="api-details">
   <span class="api-creator">This API was Created by Dãññy Çōdēx</span>
    </div>
    </li>

     <li class="api-list-item">
     <a href="/api/katsumi?prompt=hello">Katsumi Ai</a>
   <div class="api-details">
   <span class="api-creator">This API was Created by Darc Ignis </span>
    </div>
    </li>

 <li class="api-list-item">
     <a href="/api/orochiai?prompt=hello">Orochi Ai</a>
   <div class="api-details">
   <span class="api-creator">This API was Created by Aryan Chauhan </span>
    </div>
    </li>
 
<li class="api-list-item">
     <a href="/api/archedai?prompt=hello">Arched Ai</a>
   <div class="api-details">
   <span class="api-creator">This API was Created by Aryan Chauhan</span>
    </div>
    </li>


<!-- Add more APIs information -->
         
  </ul>
<h1 style="color: #ff00ff; font-size: 30px;">Thanks for Visiting</h1>

<!-- Owner Information -->
<div class="owner-info">
  <p>Name: Aryan Chauhan</p>
  <p>Country: India</p>
  <p>Age: 16</p>
  <p>Email: aryanchauhan78578@gmail.com</p>
  <p>Facebook: facebook.com/61551115508535</p>
</div>

<!-- Current Time and Date -->
<p>Current Time: <span id="current-time"></span></p>
<p>Current Date: <span id="current-date"></span></p>

<!-- Social Media Links -->
<div class="social-links">
  <a href="https://facebook.com/61551115508535" target="_blank">Facebook</a>
  <a href="https://m.me/official.aryan.xyz" target="_blank">Messanger</a>
</div>

<script>
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("current-time").innerText = timeString;
  }

  function updateDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    document.getElementById("current-date").innerText = dateString;
  }

  updateTime();
  updateDate();
  setInterval(updateTime, 1000);
  setInterval(updateDate, 86400000); // Update date every day
</script>

<!-- Cool Features -->
<div class="cool-feature">
  <h2>Website Feature</h2>
  <p>Welcome to the cutting-edge world of AI APIs! Our website is your one-stop destination for exploring and integrating the most advanced artificial intelligence technologies into your applications. Whether you're looking to enhance user experience, streamline business operations, or unlock new possibilities for innovation, our AI APIs have got you covered. With an intuitive interface, comprehensive documentation, and a community of developers ready to support you, embarking on your AI journey has never been easier. So, dive in, unleash the power of AI, and stay ahead of the curve with our revolutionary AI APIs!</p>
  <img src="https://i.imgur.com/iRgnnmA.jpeg" alt="Ai-Technology Image">
</div>

<div class="cool-feature">
  <h2>Website Feature</h2>
  <p>Unlock the power of artificial intelligence with our cutting-edge AI APIs website. From natural language processing to image recognition, our APIs offer limitless possibilities to enhance your digital experiences. Whether you're a developer, data scientist, or tech enthusiast, our platform provides the tools you need to create intelligent and dynamic applications. Explore the future of technology with the click of a button at our AI APIs website.</p>
  <img src="https://i.imgur.com/k9AWWY7.jpeg" alt="Ai-Technology Image">
</div>

<div class="cool-feature">
  <h2>Website Feature</h2>
  <p>Even the developers will be followed by the bed sometimes. A great fleet of chocolates, not chocolates. But neither the Internet nor the free course of grief. Duis consectetur mauris vitae libre porttitor trisque.
</p>
  <img src="https://i.imgur.com/dBAhbPJ.jpeg" alt="Ai-Technology Image">
</div>


<!-- Guidelines -->
<div class="cool-feature">
  <h2>GUIDELINES:</h2>
  <p>Please make sure to read and follow the guidelines below before using any of our APIs:</p>
  <ol>
    <li>Respect the API usage limits and do not abuse the services.</li>
    <li>Do not share your API credentials with anyone.</li>
    <li>Do not use the APIs for any illegal activities.</li>
    <li>Keep your API credentials secure and avoid exposing them in public.</li>
    <li>Contact with our team if you have any questions or concerns.</li>
  </ol>
</div>

<!-- Turn Conduction -->
<div class="cool-feature">
  <h2>TURN CONDUCTION:</h2>
  <p>To ensure the best performance and fairness, our chatbot APIs follow the turn conduction principle:</p>
  <ol>
    <li>Make an API request to send user input.</li>
    <li>Wait for the API response before sending another user input.</li>
    <li>Do not send multiple user inputs simultaneously.</li>
    <li>Wait for the previous user input to be processed before sending a new input.</li>
  </ol>
</div>

<!-- Trust and Privacy -->
<div class="cool-feature">
  <h2>TRUST AND PRIVACY</h2>
  <p>We value your trust and privacy. Any data you provide through our APIs is treated with strict confidentiality:</p>
  <ol>
    <li>Your personal information is not stored or shared with any third parties.</li>
    <li>We use secure encryption protocols to protect your data.</li>
    <li>We comply with all relevant privacy regulations and laws.</li>
    <li>If you have any privacy concerns, please contact with our team</li>
  </ol>
</div>

<!-- Copyright Information -->
<p style="color: #ff00ff; text-align: center;">© 2024 Ary Technology. All rights reserved.</p>
</body>
</html>

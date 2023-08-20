const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();
const port = process.env.PORT || 3000; // Use the environment port or default to 3000

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/Weather-Dekho/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  app.get('/Weather-Dekho/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
  });

app.get('*', (req, res) => {
  res.statusCode = 404;
  res.send('404 - Page not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

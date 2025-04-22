const express = require('express');
const app = express();
const port = 3001;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Redirect root to redirect.html (optional if you want it as entry point)
app.get('/start', (req, res) => {
    res.sendFile(__dirname + '/public/redirect.html');
});

app.listen(port, () => {
    console.log(`Redirect page available at http://localhost:${port}/start`);
});

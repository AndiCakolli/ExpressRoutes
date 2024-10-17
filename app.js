const express = require('express');
const cors = require('cors');
const path = require('path'); // Use for serving files from the directory
const app = express();

app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Your routes (for example: /home, /about, /contact)
app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Us page');
});

app.get('/contact', (req, res) => {
    res.send('You can contact us at contact@example.com');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

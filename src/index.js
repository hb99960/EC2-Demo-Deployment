const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint: /random
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1-100
    res.json({
        message: "Hi! Here's your random number:",
        number: randomNumber
    });
});

app.get('/', (req, res) => {
    res.status(200).json({ status: "UP", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'components/login.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;    
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Invalid username or password.');
    }   
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


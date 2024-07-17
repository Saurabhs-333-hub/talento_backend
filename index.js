import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json('Hello World');
});

app.post('/', (req, res) => {
    res.json('Hello World POST');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
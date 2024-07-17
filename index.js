import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json('Hello World');
});

app.get('/server/:id', (req, res) => {
    res.json(req.params);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
import express from 'express';
import router from './routes/routes.ts';
import post_route from './routes/post_route.ts'
import cors from 'cors';
const app = express();
app.use(cors());

app.use(express.json());
app.use(router)
app.use('/posts', post_route);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
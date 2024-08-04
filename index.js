import express from 'express';
import router from './routes/routes.js';
import post_routes from './routes/post_route.js'
import cors from 'cors';
import glimpse_routes from "./routes/glimpse_route.js";
import user_routes from "./routes/user_routes.js";
import channel_routes from "./routes/channel_route.js";
const app = express();
app.use(cors());

app.use(express.json());
app.use(router)
app.use('/users', user_routes);
app.use('/posts', post_routes);
app.use('/glimpses', glimpse_routes);
app.use('/channels', channel_routes);



app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});
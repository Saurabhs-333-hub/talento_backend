import { Router } from "express";
import AppwriteConfig from '../appwrite_config.js'
import AppwriteConstants from "../appwrite_constants.js";
const router = Router();

router.get('/', (req, res) => {
    res.json('Hello World');
});

router.post('/', (req, res) => {
    res.json('Hello World POST');
});

router.get('/posts', async (req, res) => {
    const posts = await AppwriteConfig.database.listDocuments(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdPosts,
    );
    res.json(posts);
});

router.get('/glimpses', async (req, res) => {
    const glimpses = await AppwriteConfig.database.listDocuments(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdGlimpses,
    );
    res.json(glimpses);
});

export default router;
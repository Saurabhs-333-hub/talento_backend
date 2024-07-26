import { Router } from "express";
import AppwriteConfig from '../appwrite_config.js'
import AppwriteConstants from "../appwrite_constants.js";
import {ID} from "node-appwrite";
const router = Router();

router.get('/', async (req, res) => {
    const posts = await AppwriteConfig.database.listDocuments(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdPosts,
    );
    res.json(posts);
});

router.get('/:id', async (req, res) => {
    const post = await AppwriteConfig.database.getDocument(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdPosts,
        req.params.id
    );
    res.json(post);
});

router.post('/', async (req, res) => {
    const post = await AppwriteConfig.database.createDocument(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdPosts,
        ID.unique(),
        req.body
    );
    res.json(post);
});

router.post('/:id/addComment', async (req, res) => {
    const post = await AppwriteConfig.database.createDocument(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdComments,
        req.params.id,
        req.body
    );
    res.json(post);
});



export default router;
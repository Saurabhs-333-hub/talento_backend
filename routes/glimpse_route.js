import { Router } from "express";
import AppwriteConfig from '../appwrite_config.js'
import AppwriteConstants from "../appwrite_constants.js";
import {ID} from "node-appwrite";
const router = Router();

router.get('/', async (req, res) => {
    const glimpses = await AppwriteConfig.database.listDocuments(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdGlimpses,
    );
    res.json(glimpses);
});

router.get('/:id', async (req, res) => {
    const post = await AppwriteConfig.database.getDocument(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdGlimpses,
        req.params.id
    );
    res.json(post);
});

router.post('/', async (req, res) => {
    const post = await AppwriteConfig.database.createDocument(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdGlimpses,
        ID.unique(),
        req.body
    );
    res.json(post);
});



export default router;
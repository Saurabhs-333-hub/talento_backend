import { Router } from "express";
import AppwriteConfig from '../appwrite_config.js'
import AppwriteConstants from "../appwrite_constants.js";
import {ID} from "node-appwrite";
const router = Router();

router.get('/random-users', async (req, res) => {
    const users = await AppwriteConfig.database.listDocuments(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdUsers,
    );
    res.json(users);
    console.log(users)
    return users;
});

router.get('/random-user', async (req, res) => {
    const user = await AppwriteConfig.database.getDocument(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdUsers,
        req.params.id
    );
    res.json(user);
});

export default router;
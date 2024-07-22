import { Router } from "express";
import AppwriteConfig from '../appwrite_config.ts'
import AppwriteConstants from "../appwrite_constants.ts";
const router = Router();

router.get('/', async (req, res) => {
    const posts = await AppwriteConfig.database.listDocuments(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdPosts,
    );
    res.json(posts);
});



export default router;
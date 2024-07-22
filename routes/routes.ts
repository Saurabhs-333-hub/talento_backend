import { Router } from "express";
import AppwriteConfig from '../appwrite_config.ts'
import AppwriteConstants from "../appwrite_constants.ts";
const router = Router();

router.get('/', (req, res) => {
    res.json('Hello World');
});

router.post('/', (req, res) => {
    res.json('Hello World POST');
});



router.get('/glimpses', async (req, res) => {
    const glimpses = await AppwriteConfig.database.listDocuments(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdGlimpses,
    );
    res.json(glimpses);
});

export default router;
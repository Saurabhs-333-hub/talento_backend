import { Router } from "express";
import AppwriteConfig from '../appwrite_config.js'
import AppwriteConstants from "../appwrite_constants.js";
import {ID, Query} from "node-appwrite";
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

router.post('/:id/addFan', async (req, res) => {
    try{
        const post = await AppwriteConfig.database.createDocument(
            AppwriteConstants.databaseId,
            AppwriteConstants.collectionIdFans,
            req.params.id,
            req.body
        );
        res.json({
            "status":200,
            "data":post
        });
    }catch(e){
        res.json(e);
    }

})

router.get('/:id/allFansByUserid', async (req, res) => {
    try{
    const fans = await AppwriteConfig.database.listDocuments(
        AppwriteConstants.databaseId,
        AppwriteConstants.collectionIdFans,
        [Query.equal('userId', req.params.id)]
    );
    res.json({
        "status":200,
        "data":fans
    });
    }catch(e){
        res.json({
            "status":e.status,
            "message":e.message
        })
    }
})

router.delete('/:id/removeFan', async (req, res) =>{
    try{
        const post = await AppwriteConfig.database.deleteDocument(
            AppwriteConstants.databaseId,
            AppwriteConstants.collectionIdFans,
            req.params.id
        );
        res.json({
            "status":200,
            "data":post
        });
    }catch(e){
        res.json(e);
    }
})



export default router;
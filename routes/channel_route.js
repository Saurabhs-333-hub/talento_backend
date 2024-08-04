import { Router } from "express";
import AppwriteConfig from '../appwrite_config.js'
import AppwriteConstants from "../appwrite_constants.js";
import {ID, Query} from "node-appwrite";
const router = Router();

router.post('/:id/createChannel', async (req, res) =>{
    try{
        const post = await AppwriteConfig.database.createDocument(
            AppwriteConstants.databaseId,
            AppwriteConstants.collectionIdChannels,
            req.params.id,
            req.body
        );
        res.json({
            "status":200,
            "data":post
        });
    }catch(e){
        res.json({
            "status":e.status,
            "message":e.message
        });
    }
})

router.get('/:id/allChannelsByOwnerId', async (req, res) => {
    try{
        const fans = await AppwriteConfig.database.listDocuments(
            AppwriteConstants.databaseId,
            AppwriteConstants.collectionIdChannels,
            [Query.equal('ownerId', req.params.id)]
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

router.delete('/:id/deleteChannel', async (req, res) =>{
    try{
        const post = await AppwriteConfig.database.deleteDocument(
            AppwriteConstants.databaseId,
            AppwriteConstants.collectionIdChannels,
            req.params.id
        );
        res.json({
            "status":200,
            "data":"Channel Deleted Successfully"
        });
    }catch(e){
        res.json({
            "status":e.status,
            "message":e.message
        });
    }
})



export default router;
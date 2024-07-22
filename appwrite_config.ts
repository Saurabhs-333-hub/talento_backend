import {Account, Client, Databases, Functions, Storage} from 'node-appwrite'
import AppwriteConstants from './appwrite_constants.ts'

    const client= new Client().setEndpoint(AppwriteConstants.appwriteUrl).setProject(AppwriteConstants.projectId);
    const account = new Account(client);
    const database = new Databases(client);
    const storage = new Storage(client);
    const functions = new Functions(client);

    export default {client, account, database, storage, functions};
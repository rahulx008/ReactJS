import config from "../config/config.js";

import { Client, ID,TablesDB, Databases, Storage, Query } from "appwrite";

export class CnfService {

    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userID}){ 
        try {

            console.log("Data: createPost ", {title, slug, content, featuredImage, status, userID} )
            return await this.databases.createDocument(

                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    slug:slug,
                    content,
                    featuredImage,
                    status,
                    $id: userID
                },
            );
        } catch (error) {
            console.log("Appwrite :: Create Post Error:", error);
        }

        
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite :: Update Post Error:", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite :: Delete Post Error:", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            );
        } catch (error) {
            console.log("Appwrite :: Get Post Error:", error);
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            );
        } catch (error) {
            console.log("Appwrite :: Get Posts Error:", error);
        }
    }
    
    //file upload method
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            );
            
        } catch (error) {
            console.log("Appwrite :: File Upload Error:", error);
            return false;
        }
    }

    async deleteFile(fileID) {
        try {
            await this.storage.deleteFile(
                config.appwriteBucketID,
                fileID
            );
            return true;
        } catch (error) {
            console.log("Appwrite :: File Delete Error:", error);
            return false;
        }
    }

    getFilePreview(fileID) {
        //console.log(config.appwriteBucketID, fileID);
        return this.storage.getFileView(
            config.appwriteBucketID,
            fileID
        );
    }

}   
const cnfService = new CnfService();
export default cnfService;
import { current } from "@reduxjs/toolkit";
import config from "../config/config.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
        this.account = new Account(this.client);
    }

    // Method to create a new user account
    async createAccount({ email, password, name }) {
        try {
            // Create the user account
            //create method creates a new user account in Appwrite with the provided email, password, and name.
            //It is asynchronous and returns a promise that resolves to the created user object.
            const user = await this.account.create({
                userId: ID.unique(),
                email,
                password,
                name,
            });
            if (user) {
                // Create a session
                return this.login({ email, password });
            } else {
                return null;
            }
        } catch (error) {
            throw error;
        }
    }

    // Method to log in a user
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession({email, password});
        } catch (error) {
            throw error;
        }
    }
    
    // Method to get the currently logged-in user
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite :: Get Current Error:", error);  
            return null; 
        }
        return null;
    }

    // Method to log out the current user
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite :: Logout Error:", error);
        }
    }
}

const authService = new AuthService();
export default authService;

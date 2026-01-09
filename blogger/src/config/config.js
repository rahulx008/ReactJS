const config = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL || 'Some default value'),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID || 'Some default value'),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID || 'Some default value'),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID || 'Some default value'),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID || 'Some default value'),
    rteAPIKey: import.meta.env.VITE_RTE_API_KEY
}

export default config;
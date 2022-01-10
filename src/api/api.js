import { appwrite } from "appwrite";
import { Server } from "../utils/config";

let api = {
    sdk: null,

    provider: () => {
        if (api.sdk) {
            return api.sdk;
        }
        let appwrite = new Appwrite();
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
        api.sdk = appwrite;
        return appwrite;
    },

    loginWithOutlook: async () => {
        try {
            await api.provider().account.createOAuth2Session(
                "microsoft",
                "http://localhost:3000/login",
                "http://localhost:3000/login"
            );
        } catch (error) {
            throw error;
        }
    },

    getAccount: () => {
        return api.provider().account.get();
    },

    getUserID: () => {
        return api.provider().account.getUserID();
    },
    
    getUserEmail: () => {
        return api.provider().account.getUserEmail();
    },
    
    getUserName: () => {
        return api.provider().account.getUserName();
    },
    
    createSession: (email, password) => {
        return api.provider().account.createSession(email, password);
    },
    
    deleteCurrentSession: () => {
        return api.provider().account.deleteSession("current");
    },

    createUser: (usersCollection, data, read, write) => {
        return api
          .provider()
          .database.createDocument(usersCollection, data, read, write);
    },

    listUser: (usersCollection) => {
        return api.provider().database.listDocuments(usersCollection);
    },

    updateUser: (usersCollection, documentId, read, write) => {
        return api
          .provider()
          .database.updateDocument(usersCollection, documentId, read, write);
    },

    // deleteUser: (usersCollection, documentId) => {
    //     return api.provider().database.deleteDocument(collectionId, documentId);
    // },

};

export default api;
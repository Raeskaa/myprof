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


    // Users Collection
    // This collection contains other info about users like profile image, anonymous username

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

    // No need to delete the User :kekw:
    // deleteUser: (usersCollection, documentId) => {
    //     return api.provider().database.deleteDocument(collectionId, documentId);
    // },


    // Professors Collection
    // This collection contains info about professors like their Department, Courses which he taught, Reviews, etc
    
    // We will add data from Dashboard or using a tool which I will write later
    // createProf: (professorsCollection, data, read, write) => {
    //     return api
    //       .provider()
    //       .database.createDocument(professorsCollection, data, read, write);
    // },

    listProf: (professorsCollection) => {
        return api.provider().database.listDocuments(professorsCollection);
    },

    updateProf: (professorsCollection, documentId, read, write) => {
        return api
          .provider()
          .database.updateDocument(professorsCollection, documentId, read, write);
    },

    // Courses Collection
    // This collection contains info about courses, its department, professors, reviews, etc

    // We will add data from Dashboard or using a tool which I will write later
    // createProf: (coursesCollection, data, read, write) => {
    //     return api
    //       .provider()
    //       .database.createDocument(coursesCollection, data, read, write);
    // },

    listProf: (coursesCollection) => {
        return api.provider().database.listDocuments(coursesCollection);
    },

    updateProf: (coursesCollection, documentId, read, write) => {
        return api
          .provider()
          .database.updateDocument(coursesCollection, documentId, read, write);
    },
};

export default api;
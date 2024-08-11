import { Client, Databases, ID } from "appwrite";

const projectID = process.env.REACT_APP_PUBLIC_PROJECTID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(projectID);

export const generateID = ID.unique();

export const databaseClient = new Databases(client);
export const databaseID = process.env.REACT_APP_PUBLIC_DATABASEID;
export const collectionID = process.env.REACT_APP_PUBLIC_COLLECTIONID;

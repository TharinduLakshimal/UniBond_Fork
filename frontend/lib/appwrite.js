import { Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "Unibond.Unibond",
  projectId: "67563fbd003bfcbaacb1",
  databaseId: "67564eb2001d4f168431",
  userCollectionId: "675650a000273460d5d3",
  messageCollectionId: "6756a034001abf0a33c6",
  storageId: "6756a0d800310a13634e",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

import { databaseClient, collectionID, databaseID, generateID } from "./api";
/**
 * Provides services for creating, updating, and fetching workers via API calls.
 */
export class WorkerService {
  static async CreateWorker(workerdata) {
    const response = await databaseClient.createDocument(
      databaseID,
      collectionID,
      generateID,
      workerdata
    );
    return response;
  }
  static async UpdateWorkerData(editedData, userID) {
    const response = await databaseClient.updateDocument(
      databaseID,
      collectionID,
      userID,
      editedData
    );
    return response;
  }
  static async GetWorkers() {
    const response = await databaseClient.listDocuments(
      databaseID,
      collectionID
    );
    return response;
  }
  static async DeleteWorker(workerID) {
    const response = await databaseClient.deleteDocument(
      databaseID,
      collectionID,
      workerID
    );
    return response;
  }
}

import { api } from "./api";
import { resources } from "./resources";

/**
 * Provides services for creating, updating, and fetching workers via API calls.
 */
export class WorkerService {
  /**
   * Creates a new worker by sending worker details to the server.
   * @param {Object} worker - The worker details to be submitted.
   * @returns {Promise<Object>} The response from the server after attempting to create the worker.
   * @example
   * const newWorker = {
   *   firstName: "John",
   *   lastName: "Doe",
   *   email: "john.doe@example.com"
   * };
   * const response = await WorkerService.createNewWorker(newWorker);
   */
  static async createNewWorker(worker) {
    const response = await api.post(resources.createWorker, worker);
    return response;
  }

  /**
   * Updates an existing worker's details on the server.
   * @param {string} workerId - The ID of the worker to be updated.
   * @param {Object} workerData - The new data for the worker.
   * @returns {Promise<Object>} The response from the server after attempting to update the worker.
   * @example
   * const workerData = {
   *   email: "john.new@example.com"
   * };
   * const workerId = "GHy6fHv767GbnvhH8";
   * const response = await WorkerService.updateWorker(workerId, workerData);
   */
  static async updateWorker(workerId, workerData) {
    const response = await api.put(
      `${resources.updateWorker}/${workerId}`,
      workerData
    );
    return response;
  }

  /**
   * Fetches all workers from the server.
   * @returns {Promise<Array>} An array of worker objects fetched from the server.
   * @example
   * const workers = await WorkerService.getAllWorkers();
   */
  static async getAllWorkers() {
    const { data } = await api.get(resources.getAllWorkers);
    return data;
  }
}

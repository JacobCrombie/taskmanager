import { Task } from "./Models/Task.js";

let _state = {
  /** @type {Task[]} */
  tasks: [
    new Task ()
  ]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    console.log("state check");
    return _state;
  }
}

const STORE = new Store();
export default STORE;

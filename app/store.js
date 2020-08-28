import { Task } from "./Models/Task.js";

let _state = {
  /** @type {Task[]} */
  tasks: [
    // @ts-ignore
    new Task ({tasklist: "Clean", }),
    // @ts-ignore
    new Task ({tasklist: "Clean", }),
    // @ts-ignore
    new Task ({tasklist: "Clean", })
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

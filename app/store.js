import { Task } from "./Models/Task.js";

let _state = {
  tasks: [
    // @ts-ignore
    new Task({ tasklist: "Clean", }),
    // @ts-ignore
    new Task({ tasklist: "Clean", }),
    // @ts-ignore
    new Task({ tasklist: "Clean", })
  ]
};

function _loadState() {
  let data = JSON.parse(localStorage.getItem("tasks"))
  if (data) {
    data.tasks = data.tasks.map(t => new Task(t))
    _state = data
  }
}
_loadState()

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    console.log("state check");
    return _state;
  }
  saveState() {
    localStorage.setItem("tasks", JSON.stringify(_state))
  }
}

const STORE = new Store();
export default STORE;

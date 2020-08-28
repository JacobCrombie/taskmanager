import { Task } from "../Models/Task.js";
import STORE from "../store.js";



class TasksService{
  removeTaskList(id) {
    STORE.State.tasks = STORE.State.tasks.filter(t => t.id != id)
  }
  createList(newList) {
    let taskList = new Task(newList)
    STORE.State.tasks.push(taskList)
  }
  constructor(){

  }
}

export const SERVICE = new TasksService();

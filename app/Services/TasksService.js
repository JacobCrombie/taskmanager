import { Task } from "../Models/Task.js";
import STORE from "../store.js";



class TasksService {
  removeTask(taskId, taskName) {
    let task = STORE.State.tasks.find(t => t.id == taskId)
    let taskIndex = task.tasks.findIndex(t => t == taskName)
    task.tasks.splice(taskIndex, 1)
  }
  createTask(newTask, id) {
    let tasklist = STORE.State.tasks.find(t => t.id == id)
    tasklist.tasks.push(newTask)
  }
  removeTaskList(id) {
    STORE.State.tasks = STORE.State.tasks.filter(t => t.id != id)
  }
  createList(newList) {
    let taskList = new Task(newList)
    STORE.State.tasks.push(taskList)
  }
  constructor() {

  }
}

export const SERVICE = new TasksService();

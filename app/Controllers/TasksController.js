import { SERVICE } from "../Services/TasksService.js";
import STORE from "../store.js";

function _drawTaskList() {
  STORE.saveState()
  let template = ""
  STORE.State.tasks.forEach(t => template += t.tasklistTemplate)
  document.getElementById("tasklists").innerHTML = template
}


export class TasksController {
  constructor() {
    _drawTaskList()
  }
  createList(event) {
    event.preventDefault()
    let form = event.target
    let newList = {
      tasklist: form.tasklist.value,
      listcolor: form.listcolor.value
    }
    SERVICE.createList(newList)
    form.reset()
    _drawTaskList()
  }

  removeTaskList(id) {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      SERVICE.removeTaskList(id)
    }
    _drawTaskList()
  }

  createTask(event, id) {
    event.preventDefault()
    let form = event.target
    let newTask = form.task.value
    SERVICE.createTask(newTask, id)
    _drawTaskList()
  }

  removeTask(taskId, taskName) {
    if (window.confirm("Are You Sure You Want To Remove?")) {
      // @ts-ignore
      window.close(SERVICE.removeTask(taskId, taskName))
    }
    _drawTaskList()
  }
}

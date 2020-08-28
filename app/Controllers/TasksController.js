import { SERVICE } from "../Services/TasksService.js";
import STORE from "../store.js";

function _drawTaskList() {
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

  removeTaskList(id){
    SERVICE.removeTaskList(id)
    _drawTaskList()
  }
}
import { generateId } from "../utils.js";

export class Task {
  constructor({ tasklist, listcolor, tasks, id }) {
    this.tasklist = tasklist
    this.listcolor = listcolor || "bg-primary"
    this.id = id || generateId()
    this.tasks = tasks || ["task 1", "task 2", "task 3"]
  }

  get tasklistTemplate() {
    return `
        <div class="col-4 my-1">
            <div class="card">
              <h5 class="card-header ${this.listcolor}">${this.tasklist} <i class="far fa-times-circle" onclick="app.tasksController.removeTaskList('${this.id}')"></i></h5>
              <div class="card-body">
                  <ul class="text-wrap">
                      ${this.tasksTemplate}
                  </ul>
              </div>
            </div>
          </div>
    `
  }

  get tasksTemplate() {
    let template = ""

    this.tasks.forEach(t => {
      template += `<li><input type="checkbox" class="mr-1">${t}<i class="fa fa-trash"></i></li>`
    });

    return template
  }
}
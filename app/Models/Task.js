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
        <h5 class="card-header ${this.listcolor}">${this.tasklist} <i class="far fa-times-circle hvr-grow" onclick="app.tasksController.removeTaskList('${this.id}')"></i></h5>
        <div class="card-body">
          <ul class="text-wrap">
            ${this.tasksTemplate}
          </ul>
        </div>
        <form class="form-group col d-flex flex-direction-row"
          onsubmit="app.tasksController.createTask(event, '${this.id}')">
          <input type="text" class="form-control" name="task" id="task" placeholder="Enter Task...">
            <button type="submit" class="${this.listcolor} ml-1 hvr-grow"><i class="fa fa-plus-circle"
              aria-hidden="true"></i></button>
        </form>
      </div>
    </div>
    `
  }

  get tasksTemplate() {
    let template = ""

    this.tasks.forEach(t => {
      template += `<li class= "my-1"><input type="checkbox" class="mr-1 hvr-grow">${t}<i class="fa fa-trash hvr-grow" onclick= "app.tasksController.removeTask('${this.id}', '${t}')"></i></li>`
    });

    return template
  }
}
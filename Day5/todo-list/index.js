class Todos {
  static #id = 0;

  static incrementId() {
    return ++this.#id;
  }

  constructor(id, task) {
    this.id = id;
    const rowElement = document.createElement("tr");
    const taskElement = document.createElement("td");
    taskElement.classList.add("align-middle");
    const completedElement = document.createElement("td");
    completedElement.classList.add("align-middle");
    const buttonElementTD = document.createElement("td");
    buttonElementTD.classList.add("align-middle");
    taskElement.textContent = task;
    rowElement.append(taskElement);
    completedElement.innerHTML = "Not completed";
    rowElement.append(completedElement);
    rowElement.id = id;
    const btn = document.createElement("button");
    btn.innerHTML = "Mark as completed";
    btn.classList.add("btn");
    btn.classList.add("btn-primary");
    btn.addEventListener("click", () => {
      document.getElementById(String(id)).children[1].innerHTML = "Completed";
    });
    buttonElementTD.append(btn);
    rowElement.append(buttonElementTD);
    this.element = rowElement;
  }

  getElement() {
    return this.element;
  }
}

document.getElementById("task-submit").addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.getElementById("task-input").value;
  const alertDiv = document.getElementById("alert");
  document.getElementById("task-input").value = "";
  if (input) {
    while (alertDiv.firstChild) {
      alertDiv.removeChild(alertDiv.firstChild);
    }
    const table = document.getElementById("task-data");
    const task = new Todos(Todos.incrementId(), input);
    table.append(task.getElement());
    return;
  }
  const wrongAlert = document.createElement("div");
  wrongAlert.classList.add("alert");
  wrongAlert.classList.add("alert-danger");
  wrongAlert.classList.add("mt-3");
  wrongAlert.innerHTML = "Enter Something Please :)";
  while (alertDiv.firstChild) {
    alertDiv.removeChild(alertDiv.firstChild);
  }
  alertDiv.append(wrongAlert);
});

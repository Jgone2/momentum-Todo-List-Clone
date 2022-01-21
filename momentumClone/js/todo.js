const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todoArr"
let todoArr = [];

function saveTodoArr() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArr));
}

function deleteTodo(event) {
  // const li = event.target.parentElement;
  const li = this.parentElement;
  li.remove();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.innerText = "✖️";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  todoArr.push(newTodo);
  paintTodo(newTodo);
  saveTodoArr();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodoArr = localStorage.getItem(TODOS_KEY);

if(savedTodoArr !== null) {
  const parsedToDoArr = JSON.parse(savedTodoArr);
  todoArr = parsedToDoArr;
  parsedToDoArr.forEach(paintTodo);
}
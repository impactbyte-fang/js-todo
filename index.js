// list of todos
let todos = [];

// get all dom
const submit = document.getElementById("submit");
const output = document.getElementById("output");
const input = document.getElementById("input");

// display all todos
function displayTodos() {
  let list = "";
  todos.forEach(function(item, index) {
    list += item + ` <button onclick="deleteTodo(${index})">X</button><br>`;
  });
  output.innerHTML = list;
}

// add new todo and display it
function addTodo() {
  const todo = input.value;
  todos.push(todo);
  input.value = "";
  displayTodos();
}

// delete a todo and display it
function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}

// add todo if enter is clicked
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
});

// add todo if button is clicked
submit.addEventListener("click", function() {
  addTodo();
});

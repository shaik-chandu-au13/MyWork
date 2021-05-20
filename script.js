let input = document.querySelector(".todo-input");
let add = document.querySelector(".add");

add.addEventListener("click", function () {
  let value = input.value;
  if (value != "") {
    addTodo(value);
  }
  input.value = "";
});

function addTodo(x) {
  let parent = document.querySelector(".todo-container");
  let kid = document.createElement("li");
  kid.classList.add("todo-item");
  kid.innerHTML = `
      <label class="checkbox">
        <input type="checkbox">
        <span class="checkmark"></span>
      </label>
      <div>${x}</div>`;
  parent.prepend(kid);
}

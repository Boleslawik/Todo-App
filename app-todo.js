let button = document.querySelector("#button-plus");
let listContainer = document.querySelector("#list-container");
let clearAllButton = document.querySelector("#clear-all");
let handleAddElementToList = () => {
  let taskName = document.querySelector("#todo-input-task").value;
  let taskTime = document.querySelector("#todo-input-hour").value;

  if (!taskName || !taskTime) {
    return;
  }

  addElementToList(taskName, taskTime);
};

let addElementToList = (taskName, taskTime) => {
  let item = document.createElement("div");
  item.classList.add("list-item");
  item.innerHTML = `<div class="list-item-text">
    <label class="item-content">${taskName}</label>
    <label class="item-date">${taskTime}</label>
  </div>
  <label class="checkbox-container">
    <input type="checkbox" class="checkbox" />
    <span class="checkmark"></span>
  </label>
  </div>`;

  listContainer.appendChild(item);

  let checkmarkButton = item.querySelector(".checkmark");
  checkmarkButton.addEventListener("click", (e) => {
    const checkboxContainer = e.target.closest(".checkbox-container");
    const checkbox = checkboxContainer.querySelector("input");

    if (!checkbox.checked) {
      item.querySelector(".item-content").style.textDecoration = "line-through";
      item.querySelector(".item-date").style.textDecoration = "line-through";
      item.querySelector(".item-content ").style.color = "#2C8CDF";
      item.querySelector(".item-date ").style.color = "#2C8CDF";
      item.style.backgroundColor = "rgba(15, 140, 255, 0.08)";
    } else {
      item.querySelector(".item-content").style.textDecoration = null;
      item.querySelector(".item-date").style.textDecoration = null;
      item.querySelector(".item-content ").style.color = null;
      item.querySelector(".item-date ").style.color = null;
      item.style.backgroundColor = "#F5F6F7";
    }
  });
};

let clearButton = () => {
  let listContainer = document.querySelector("#list-container");
  listContainer.innerHTML = "";
};

button.addEventListener("click", handleAddElementToList);
clearAllButton.addEventListener("click", clearButton);

const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addTaskBtn");
const ul = document.querySelector("#taskList");

addBtn.addEventListener("click", function() {
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let item = document.createElement("li");
    item.innerText = taskText;

    let delBtn = document.createElement("button");
    delBtn.classList.add("deleteBtn");
    delBtn.innerText = "delete";
    item.appendChild(delBtn);
    ul.appendChild(item);

    input.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        const listItem = event.target.parentElement;
        listItem.remove();
    }
});

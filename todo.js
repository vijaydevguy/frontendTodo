document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    addBtn.addEventListener("click", addTask);

    taskList.addEventListener("click", function(event) {
        if (event.target && event.target.classList.contains("delete")) {
            event.target.parentElement.remove();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            return;
        }

        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between";
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="btn btn-danger delete">Delete</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = "";
        taskInput.focus();
    }
});

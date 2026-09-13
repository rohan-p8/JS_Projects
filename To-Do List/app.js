const textarea = document.querySelector("#input");
const add = document.querySelector("#add");
const taskList = document.querySelector("#task-list");


function addTask() {

    const taskText = textarea.value.trim();

    if (taskText === "")
        return;


    const li = document.createElement("li");
    li.classList.add("todo-item");

    const span = document.createElement("span");
    span.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("del-btn");


    delBtn.addEventListener("click", () => {
        li.remove();
    });


    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);

}


add.addEventListener("click", addTask);


textarea.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {
        addTask();
    }

});
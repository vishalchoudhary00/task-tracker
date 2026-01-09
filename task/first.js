const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const status = document.createElement("span");
  status.textContent = "Pending";
  status.style.marginLeft = "10px";
  status.style.color = "red";

  li.appendChild(status);
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    status.textContent = li.classList.contains("completed") ? "Completed" : "Pending";
    status.style.color = li.classList.contains("completed") ? "green" : "red";
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    // Function to add task
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function() {
          taskItem.remove();
        });
  
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
  
        taskInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    }
  
    // Event listener for clicking "Add Task" button
    addTaskButton.addEventListener("click", addTask);
  
    // Event listener for pressing "Enter" key
    taskInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
  
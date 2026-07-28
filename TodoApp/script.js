let taskInput = document.getElementById('taskInput')
let addTask = document.getElementById('addTask')
let ul = document.getElementById('ul')
let information = document.getElementById('information')


let savedTasks = JSON.parse(localStorage.getItem("TaskArray"))
let AllTasks = savedTasks || []


function saveToLocalStorage() {
    localStorage.setItem("TaskArray", JSON.stringify(AllTasks))
}


function addAllTasks() {
    if (taskInput.value.trim() === "") {
        information.textContent = "Enter the Task... "
    } else {
        let tasks = {
            task: taskInput.value,
            completed: false
        }
        AllTasks.push(tasks);
        taskInput.value = "";
        showTask()
        console.log(AllTasks)
        saveToLocalStorage()
    }
}

function showTask() {
    ul.innerHTML = ""
    AllTasks.forEach((task, index) => {
        let li = document.createElement('li')
        li.textContent = task.task

        let deleteButton = document.createElement('button')
        deleteButton.className = "deletebtn"
        deleteButton.textContent = "Delete"

        let completedButton = document.createElement('button')
        completedButton.className = "completedbtn"
        completedButton.textContent = "Complete"

        let buttonContainer = document.createElement('div')

        deleteButton.addEventListener('click', () => {
            AllTasks.splice(index, 1)
            showTask()
            saveToLocalStorage()
        })

        completedButton.addEventListener('click', () => {
            task.completed = true;
            saveToLocalStorage()
            showTask();
        })

        if (task.completed === true) {
            completedButton.textContent = "completed"
            li.style.textDecoration = "line-through";
        }

        buttonContainer.appendChild(deleteButton);
        buttonContainer.appendChild(completedButton);
        li.appendChild(buttonContainer)
        ul.appendChild(li);
    })
}

showTask();

addTask.addEventListener('click', () => {
    addAllTasks()
})

taskInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        addAllTasks()
    }
})

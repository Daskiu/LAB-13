//Seccion para unir HTML y JS
const toDo = document.getElementById("toDo");
const doing = document.getElementById("doing");
const done = document.getElementById("done");
const textInput = document.getElementById("textInput");
const addButton = document.getElementById("addButton");

//Local Storage
let tasks = [];

//Function
function loadTask (){
    let loadedTask = localStorage.getItem("task");
    if(loadedTask !== null){
        task = JSON.parse (loadedTask);
    };
}

function saveTasks(){
    let json = JSON.stringify(tasks);
    localStorage.setItem("tasks" , json)
}

function showTasks(){
    toDo.innerHTML = "<h1>To Do</h1>";
    doing.innerHTML = "<h1>Doing</h1>";
    done.innerHTML = "<h1>Done</h1>";
    for(let i = 0; i <tasks.length; i++){
        let task = new Task(
            tasks [i].task, tasks[i].state, tasks[i].id = i
        )
        if (task.state == 0){
            task.render(toDo);
        }
        else if (task.state == 1){
            task.render(doing);
        }
        else if (task.state == 2){
            task.render(done);
        }
        }
};

function post(){
    if(textInput.value !== ""){
        let text = textInput.value;
        let state = 0;
        let id = "post error";
        let task = new Task(text, state, id);
        tasks.push(task);
        saveTasks();
        textInput.value = "";
    }
    showTasks()
}

function upgradeState(index){
    let task = tasks[index].task;
    let state = tasks[index].state;
    if (tasks[index].state < 2){
        state = tasks[index].state + 1;
    }
    let id = "ID FAILURE IN UPGRADE!!";
    let newTask = new Task(task, state, id);
    tasks.push(newTask);
    tasks.splice(index,1);

    showTasks();
    saveTasks();
}

function downgradeState(index){
    let task = tasks[index].task;
    let state = tasks[index].state;
    if (tasks[index].state > 0) {
        state = tasks[index].state - 1;
    }
    let id = "ID FAILURE IN DOWNGRADE!!";
    let newTask = new Task(task, state, id);
    tasks.push(newTask);
    tasks.splice(index,1);

    showTasks();
    saveTasks();
}

function erase(id){
    tasks.splice(id,1)
    showTasks();
    saveTasks();
}

//Starter
loadTask();
addButton.addEventListener('click', post);
showTasks ();
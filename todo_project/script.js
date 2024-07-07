var tasks = []; // An arrray that will contain user's lists in an object form

function addTask(){
    var taskInput = document.getElementById('todoInput');
    var taskValue = taskInput.value;
    // checking if input is empty or not
    if(taskValue.trim() !== ""){
        // add Task 
        tasks.push({
            text : taskValue,
            completed : false
        });
        taskInput.value = "";
        updateTodoList();
    }
}

function updateTodoList(){
    const todoList = document.getElementById('todoList');
    // clear existing list/data 
    todoList.innerHTML = "";

    tasks.forEach((task)=>{
        var listItem = document.createElement('li');
       listItem.textContent = task.text;
       listItem.className = task.completed ? 'completed' : "";
       listItem.onclick = function(){
            toogleCompleted(task);
       }
       todoList.appendChild(listItem);
    })
    // function to calculate todos,completed 
    updateAggregrate();
}

function toogleCompleted(task){
    task.completed = !task.completed;
    updateTodoList();

}

function updateAggregrate(){
    var totalTasks = document.getElementById('totalTasks');
    var completedTasks = document.getElementById('completedTasks');
    var total = tasks.length;
    var completed =  tasks.reduce((acc,task)=>{
        return task.completed ? acc + 1 : acc;
    },0);

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
}

function filterTasks(){
    var searchInput = document.getElementById('searchInput');
    var searchValue = searchInput.value.toLowerCase();

    var filteredTasks = tasks.filter((task)=>{
        return task.text.toLowerCase().includes(searchValue);
    })

    // update todolist with filteredTask 
    updateTodoListWithFilteredTasks(filteredTasks);
}

function updateTodoListWithFilteredTasks(filteredTasks){
    var todoList = document.getElementById('todoList');

    todoList.innerHTML = "";

    filteredTasks.forEach((task)=>{
        var listItem = document.createElement('li');
        listItem.textContent = task.text;
        listItem.className = task.completed ? 'completed' : "";
        listItem.onclick = function(){
             toogleCompleted(task);
        }
        todoList.appendChild(listItem);
    })
    updateAggregrate();
}

const reset = ()=>{

    var todoList = document.getElementById('todoList');
    todoList.innerHTML = "";

    tasks = [];

    var totalTasks = document.getElementById('totalTasks');
    var completedTasks = document.getElementById('completedTasks');

    totalTasks.textContent = 0;
    completedTasks.textContent = 0;

    

}
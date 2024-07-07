// Script for toDo app

var tasks = []; // An arrray that will contain user's lists in an object form

// The function below is triggered when the Add button is clicked.
// The addTas() function adds an object containing the task and the information that confirms if a task has been completed
// After a task is added, the function calls another function to update the list
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


// The function below is invoked by different functions. The main task of the updateTodoList() is, as the name
// suggests, to update the list in the webpage.
// This function creates a new HTML element and adds the tasks present in the tasks array.
// When any element created by this function is clicked, toggleCompleted() function
// is invoked which takes which element is clicked as it's arguement
// At the end of this function, updateAggregrate() function is invoked

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

// The toggleCompleted() function is called inside addTask() function.
// This function is invoked when a list element is clicked.
// It changes the "complete" state of the passed object to it's opposite.
// which mean, if the complete state is false, it makes it true and hence the completed
// task will have a strikethrough

// this function calls the updateTodoList() function again to upadate the list

function toogleCompleted(task){
    task.completed = !task.completed;
    updateTodoList();
}

// The updateAggregrate() function updates the number of tasks and completed tasks count.
// This function makes use of the Reduce Higher order function to perform
// the arithmetic calculation for completed tasks count
// For the total tasks count, we simply take the length of the array that contains the tasks

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

// filterTasks() function is used by the task searching feature.
// This function makes use of the Filter Higher order function to search for the
// tasks that matches the typed letters in the input field with id 'searchInput'
// After being filtered, the updateTodoListWithFilteredTasks() function is called that
// takes the filtered tasks as an arguement and updates the list

function filterTasks(){
    var searchInput = document.getElementById('searchInput');
    var searchValue = searchInput.value.toLowerCase();

    var filteredTasks = tasks.filter((task)=>{
        return task.text.toLowerCase().includes(searchValue);
    })

    // update todolist with filteredTask 
    updateTodoListWithFilteredTasks(filteredTasks);
}

// updateTodoListWithFilteredTasks() function is invoked inside filterTasks() function
// This function does the exact work as the updateTodoList() function but only
// for the filtered tasks.
// This again calls updateAggregrate() function to calculate the total tasks and
// completed tasks

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

// The reset() function is triggered when the Clear All button is clicked,
// This function removes all the tasks from the list and clears the count for total tasks 
// and completed tasks by invoking updateAggregrate() function

const reset = ()=>{

    var todoList = document.getElementById('todoList');
    todoList.innerHTML = "";
    tasks = []; // makes the array empty

    updateAggregrate();

}
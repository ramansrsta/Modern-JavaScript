//Define Ui variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load All Event Listeners
loadEventListeners();

//Load Event Listeners function
function loadEventListeners()
{
    //DOM Load event
    document.addEventListener('DOMContentLoaded',getTasks);
    //Add Task Event
    form.addEventListener('submit', addTask);
    //Remove Task Event
    taskList.addEventListener('click',removeTask);
    //Clear task event
    clearBtn.addEventListener('click',clearTasks);
    //Filter Task event
    filter.addEventListener('keyup',filterTasks);
}

//get tasks form ls
function getTasks()
{
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }
    tasks.forEach(
        function(task)
        {
            //create li element
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(task));

            //creating a element and inserting it into an link
            const link = document.createElement('a');
            link.className =  'delete-item secondary-content';
            link.innerHTML = '<i class="fa fa-remove"> </i>';
            li.appendChild(link);

            //adding li to ul using appendChild
            taskList.appendChild(li);
        }
    );
}

//Add Task 
function addTask(e)
{
    if(taskInput.value=='')
    {
        alert('Add a task');
    }
    else
    {
        //create li element
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));

        //creating a element and inserting it into an link
        const link = document.createElement('a');
        link.className =  'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"> </i>';
        li.appendChild(link);

        //adding li to ul using appendChild
        taskList.appendChild(li);

        //store in local storage
        storeTaskInLocalStorage(taskInput.value);

        taskInput.value ='';


        e.preventDefault();
    }

}
//local storage function
function storeTaskInLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks') === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//Remove Task
function removeTask(e)
{
    if(e.target.parentElement.classList.contains('delete-item'))
    {
        if(confirm('Are You Sure??'))
        {
            e.target.parentElement.parentElement.remove();
            // Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) 
{
    let tasks;
    if(localStorage.getItem('tasks') === null){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
   
    for(let i = 0; i<tasks.length ;i++)
    {
        if(tasks[i] == taskItem.textContent)
        {
            console.log('fuck');
            tasks.splice(i, 1);
        }
    }

    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//clear all
function clearTasks()
{
    // taskList.innerHTML = ''; //first process of removing all
    //second faster process using while
    while(taskList.firstChild)
    {
        taskList.removeChild(taskList.firstChild);
       
    }
     // Clear from LS
    clearTasksFromLocalStorage();
    
}

// Clear Tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

function filterTasks(e)
{
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task)
        {
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1)
            {
                task.style.display = 'block';
            }
            else
            {
                task.style.display = 'none';
            }
        }
    );

}



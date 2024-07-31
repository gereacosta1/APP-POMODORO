const task = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');

form.addEventListener('submit', e =>{
    e.preventDefault();
    if(itTask.value != ''){
        createTask(itTask.value);
        itTask.value = '';
        renderTask();
    }
})

function createTask(value){

    const newTask = {
        id: (Math.random()*100).toString(36).slide(3),
        title: value,
        completed: false
    };

    task.unshift(newTask);

}

function renderTask(){
    const html = task.map(task =>{
        return `
            <div class = "task">
            <div class = "completed">${task.completed ? `<span clss = "done">Done</span>` : `<button data-id="${task.id}" class = "start-button">Start</button>`}</div>
            <div class = "title">${task.title}</div>
            </div>
        `
    })
}
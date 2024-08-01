// const task = [];
// let time = 0;
// let timer = null;
// let timerBreak = null;
// let current = null;

// const bAdd = document.querySelector('#bAdd');
// const itTask = document.querySelector('#itTask');
// const form = document.querySelector('#form');

// form.addEventListener('submit', e =>{
//     e.preventDefault();
//     if(itTask.value != ''){
//         createTask(itTask.value);
//         itTask.value = '';
//         renderTask();
//     }
// })

// function createTask(value){

//     const newTask = {
//         id: (Math.random()*100).toString(36).slide(3),
//         title: value,
//         completed: false
//     };

//     task.unshift(newTask);

// }

// function renderTask(){
//     const html = task.map(task =>{
//         return `
//             <div class = "task">
//             <div class = "completed">${task.completed ? `<span clss = "done">Done</span>` : `<button data-id="${task.id}" class = "start-button">Start</button>`}</div>
//             <div class = "title">${task.title}</div>
//             </div>
//         `
//     })
// }


const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timer.innerHTML = 
        `${minutes.toString().padStart(2, '0')}
        :
        ${seconds.toString().padStart(2, '0')}`;
    // Esta parte sirve para que cuando el número baje de 10, aparezca un cero, así sea 08, 07, etc.
}

// Cuando apretas el botón start, se ejecuta esta función
const startTimer = () => {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer(); // Estas líneas se encargan de disminuir el número que tenemos en la variable timeLeft

        if (timeLeft == 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000); // Esta función se ejecuta cada segundo
}

const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

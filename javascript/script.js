const iniciar = document.getElementById('go');
const parar = document.getElementById('stop');
const reset = document.getElementById('reset');
const tempos = document.getElementById('tempos-marcados')
const timerEl = document.getElementById('timer');
const action = iniciar.getAttribute('action');
let intervalId = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
    const seconds = Math.floor((time % 6000) / 100);
    const hundredths = time % 100;

    return `${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
}


const setTimer = (time) => {
    timerEl.innerText = formatTime(time);
}

const addMarkToList = (markIndex, markTime) => {
    tempos.innerHTML += `<p>Marca ${markIndex}: ${formatTime(markTime)}</p>`;
}

const tempo = () => {    
    clearInterval(intervalId);

    if (action == 'start' || action == 'continue') {
        intervalId = setInterval(() => {
            timer += 1;
            setTimer(timer);
    }, 10);
    } timer = 0;
}

const pauseTime = () => {  
    clearInterval(intervalId);
    
}
const markTime = () => {
    marks.push(timer);
    addMarkToList(marks.length, timer);
}

const resetTimer = () => {
    clearInterval(intervalId);
    timer = 0;
    marks = [];
    setTimer(timer);
    tempos.innerHTML = '';
}



document.getElementById('go').addEventListener('click', tempo);
/* document.getElementById('mark').addEventListener('click', markTime); */
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('parar').addEventListener('click', pauseTime )
document.getElementById('parar').addEventListener('click', markTime )
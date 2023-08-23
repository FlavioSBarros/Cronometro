//primeiro criar variaveis para receber numeros
//segundo direcionar bottoes 
//terceiro criar funçoes de cada botao 
//quarto criar funçao do timer onde adicionar cada numero apos a contagem 
//quinto encerrar o codgo ;)


"use strict";
// variaveis de hora mminuto segundos e milisegujndos 
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

//definiçoes de botoes e suas funçoes

document.main.start.onclick = () => start();
document.main.pause.onclick = () => pause();
document.main.reset.onclick = () => reset();


//funçoes dos botoes de iniciar pause e zerar

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById('hour').innerText = '00';
  document.getElementById('minute').innerText = '00';
  document.getElementById('second').innerText = '00';
  document.getElementById('millisecond').innerText = '000';
}


//funçoes do timer para adiçao de cada contagem 
//variavel global

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById('hour').innerText = returnData(hour);
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

//funçao de retono para que numero menor que 10 volte a zero 
function returnData(input) {
  return input >= 10 ? input : `0${input}`
}
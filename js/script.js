const countdown = document.getElementById('countdown');
const numbersList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const message = document.getElementById('message');
const inputs = form.querySelectorAll('input');

// Genera 5 numeri casuali da 1 a 50
const numeriCasuali = Array.from({ length: 5 }, () =>
  Math.floor(Math.random() * 50) + 1
);

// Mostra i numeri nella lista
numbersList.innerHTML = numeriCasuali
  .map(num => `<li class="fs-1 fw-bold">${num}</li>`)
  .join('');

// Countdown di 30 secondi
let tempo = 30;
const timer = setInterval(() => {
  countdown.textContent = tempo;
  if (--tempo < 0) {
    clearInterval(timer);
    countdown.textContent = '';
    numbersList.innerHTML = '';
    form.classList.remove('d-none');
  }
}, 1000);

// Gestione invio risposte
form.addEventListener('submit', e => {
  e.preventDefault();

  const risposte = [...inputs].map(input => Number(input.value));
  const indovinati = risposte.filter(num => numeriCasuali.includes(num));
  const unici = [...new Set(indovinati)];

  message.textContent = `Hai indovinato ${unici.length} numero/i: ${unici.join(', ')}`;
});

document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const numbersList = document.getElementById('numbers-list');
    const answersForm = document.getElementById('answers-form');
    const messageElement = document.getElementById('message');
    const inputs = document.querySelectorAll('#input-group input');
  
    let numeriCasuali = [];
    let tempo = 30;
  
    // Genera 5 numeri casuali (max fino a 50)
    for (let i = 0; i < 5; i++) {
      let numero = Math.floor(Math.random() * 50) + 1;
      numeriCasuali.push(numero);
      numbersList.innerHTML += `<li class="fs-1 fw-bold">${numero}</li>`;
    }
  
    // Countdown di 30 secondi
    let timer = setInterval(() => {
      countdownElement.textContent = tempo;
      tempo--;
  
      if (tempo < 0) {
        clearInterval(timer);
        numbersList.innerHTML = ''; 
        answersForm.classList.remove('d-none');
        countdownElement.textContent = ''; 
      }
    }, 1000);
  
    // Controllo numeri inseritii
    answersForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      let numeriInseriti = Array.from(inputs).map(input => Number(input.value));
      let numeriIndovinati = numeriInseriti.filter(num => numeriCasuali.includes(num));
  
      messageElement.textContent = `Hai indovinato ${numeriIndovinati.length} numeri: ${numeriIndovinati.join(', ')}`;
    });
  });
  

const display = document.querySelector('h2');
const buttons = document.querySelectorAll('button');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.id === 'equal' || btn.id === 'clear') return;
    if (display.innerText === 'Error'|| display.innerText === 'undefined'){
        display.innerText = '';
    }
    display.innerText += btn.innerText;
  });
});

equalBtn.addEventListener('click', () => {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
});

clearBtn.addEventListener('click', () => {
    display.innerText = '';
});

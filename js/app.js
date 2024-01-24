const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
setTimeout(() => {
  h1.textContent = 'Hello Kano Programmers Forum';
  h1.style.color = 'red';
  h1.style.backgroundColor = 'black';
  h1.style.fontSize = '50px';
  h1.style.padding = '10px';
  h1.style.border = '5px solid black';
  h1.style.borderRadius = '10px';
  h1.style.boxShadow = '10px 10px 10px black';
  h1.style.textShadow = '5px 5px 5px black';
  h1.style.textAlign = 'center';
  h1.style.fontFamily = 'sans-serif';
  h1.style.fontWeight = 'bold';
  h1.style.textTransform = 'uppercase';
  h1.style.transition = 'all 2s';

  h2.style.color = 'green';
  h2.style.backgroundColor = 'black';
  p.style.color = 'blue';
  p.style.rotate = 'rotate(270deg)';
}, 2000);

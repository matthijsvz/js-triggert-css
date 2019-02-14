const btn = document.getElementById('btn');
let bars = document.getElementsByClassName('bar');


const slide = ()=>{
  bars[0].classList.toggle('bar--toggle');
  bars[1].classList.toggle('bar--toggle');
  bars[2].classList.toggle('bar--toggle');
  bars[3].classList.toggle('bar--toggle');
}

btn.addEventListener('click', slide);

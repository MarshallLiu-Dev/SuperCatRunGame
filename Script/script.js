
const cat = document.querySelector('.cat');
const tijolo = document.querySelector('.tijolo');


const jump = () => {
    cat.classList.add('jump');

    setTimeout(() =>{
         cat.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    const tijoloPosition = tijolo.offsetLeft;
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px', '');
    console.log(catPosition)

    if(tijoloPosition <= 120 && tijoloPosition > 0 && catPosition < 90 ){
      tijolo.style.animation = 'none';
      tijolo.style.left = `${tijoloPosition}px`;

      cat.style.animation = 'none';
      cat.style.bottom = `${catPosition}px`;

     cat.src="/Imagens/Black Cat End Game.gif"
     cat.style.width = '75px'
     cat.style.marginLeft = '50px'

     clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);    
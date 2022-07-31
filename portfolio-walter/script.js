const wrapperCards = document.querySelector(".wrapper-cards");
const cards = document.querySelectorAll(".experience-card");


let i = 0;
function carousel(){
  i++;
  
  if(i > cards.length - 1)
    i = 0;

  wrapperCards.style.transform = `translateX(${-i*380}px)`
}

setInterval(carousel,2000);
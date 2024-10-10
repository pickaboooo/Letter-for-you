let btn = document.querySelector(".btn");
let card = document.querySelector(".card");
let header = document.querySelector(".header");
let message = document.querySelector(".message");
let author = document.querySelector(".author");
let cardHeart = document.querySelector(".cardHeart");

btn.addEventListener('click', () => {
  if (card.classList.contains("openCard")) {
    card.classList.remove("openCard");
    card.classList.add("closeCard");

    setTimeout(() => {
      card.style.padding = '0';
      header.style.display = 'none';
      message.style.display = 'none';
      author.style.display = 'none';
      cardHeart.style.display = 'none';
      btn.textContent = 'Open';
    }, 500);

  } else {
    card.classList.remove("closeCard");
    card.classList.add("openCard");

    setTimeout(() => {
      card.style.padding = '3.2rem 1.5rem';
      header.style.display = 'block';
      message.style.display = 'block';
      author.style.display = 'block';
      cardHeart.style.display = 'block';
      btn.textContent = 'Closed';
    }, 100);
  }
});
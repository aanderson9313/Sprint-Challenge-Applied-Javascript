/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carouselCreator(item) {
  // create elements
  const carousel = document.createElement('div');
  const leftButton = document.createElement('button');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const rightButton = document.createElement('button');

  // html tree
  carousel.appendChild(leftButton);
  carousel.appendChild(mountains);
  carousel.appendChild(computer);
  carousel.appendChild(trees);
  carousel.appendChild(turntable);
  carousel.appendChild(rightButton);

  // classlist
  carousel.classList.add('carousel');
  leftButton.classList.add('left-Button');
  rightButton.classList.add('right-button');

  // content
  leftButton.textContent = "<";
  rightButton.textContent = ">";
  mountains.setAttribute('src', './assests/carousel/mountains.jpeg');
  computer.setAttribute('src', './assests/carousel/computer.jpeg');
  trees.setAttribute('src', './assets/carousel/trees.jpeg');
  turntable.setAttribute('src', './assets/carousel/turntable.jpeg')

  // click-events
  leftButton.addEventListener('click', () => 
    toggleLeft());

  rightButton.addEventListener('click', () => 
    toggleRight());


  return carousel;

}
const parentCarousel = document.querySelector('.carousel-container');
parentCarousel.appendChild(carouselCreator);



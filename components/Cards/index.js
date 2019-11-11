// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardContainer = document.querySelector('.cards-container');


function createCards(arr) {
    // create new elements
    let card = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div');
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');

    // html tree
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(span);
    imgContainer.appendChild(img);

    // classlists
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // content
    headline.textContent = arr.headline;
    img.src = arr.authorPhoto;
    span.textContent = `By ${arr.authorName}`;

    return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data.articles);
        let bootstrap = response.data.articles.bootstrap;
        let javascript = response.data.articles.javascript;
        let jquery = response.data.articles.jquery;
        let node = response.data.articles.node;
        let technology = response.data.articles.technology;
        // bootstrap array
        bootstrap.forEach(element => {
            const newCard = createCards(element);
            cardContainer.appendChild(newCard);
        });
        // javascript array
        javascript.forEach(element => {
            const newCard = createCards(element);
            cardContainer.appendChild(newCard);
        });
        // jquery array
        jquery.forEach(element => {
            const newCard = createCards(element);
            cardContainer.appendChild(newCard);
        });
        // node array
        node.forEach(element => {
            const newCard = createCards(element);
            cardContainer.appendChild(newCard);
        });
        // technology array
        technology.forEach(element => {
            const newCard = createCards(element);
            cardContainer.appendChild(newCard);
        });

    })
        .catch(error => {
            console.log('the data was not returned', error);
        });
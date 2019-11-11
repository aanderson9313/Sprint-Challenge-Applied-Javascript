// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // new elements
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const h1 = document.createElement('h1');
    const headerTemp = document.createElement('span');

    // html tree
    header.appendChild(headerDate);
    header.appendChild(h1);
    header.appendChild(headerTemp);

    // classlists
    header.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    // content
    headerDate.textContent = "SMARCH 28, 2019";
    h1.textContent = "Lambda Times";
    headerTemp.textContent = "98°";
    
    return header;
   

}
const parentContainer = document.querySelector('.header-container');
parentContainer.append(Header());

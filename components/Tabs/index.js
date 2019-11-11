// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const parentTab = document.querySelector('.topics');

function createTab(item) {
    let tab = document.createElement('div');
    parentTab.appendChild(tab);
    tab.classList.add('tab');
    tab.textContent = `${item}`;

    return tab;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        console.log(response.data);
        const topics = response.data.topics;

        topics.forEach(item => {
            const newTab = createTab(item);
            parentTab.appendChild(newTab);
        });
    })
    .catch((error) => {
        console.log('the data was not returned', error);
    })
   
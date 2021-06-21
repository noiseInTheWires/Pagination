let maxItemsPerPage = 3;
let currentItemsOnLastPage = 3;
let currentPage = 1;
let lastPage = 1;

function addItem() {
  currentItemsOnLastPage += 1;

  //creates and adds new list item(job)
  let newItem = document.createElement("li");
  newItem.innerHTML = "test item";
  let myElement = document.getElementById("listItems");
  myElement.appendChild(newItem);

  let jobs = myElement.children.length;

  if (jobs > maxItemsPerPage) {
    ////////////// !!!fix adding while on latest page bug!!! ////////////
    if (currentItemsOnLastPage > maxItemsPerPage) {
      newItem.innerHTML = "hidden";
      newItem.className = "hideme";
      add();
    } else {
      newItem.innerHTML = "hidden";
      newItem.className = "hideme";
    }
  }
}

function add() {
  const newPage = document.createElement("span"); // creates new button

  newPage.id = `${lastPage + 1}`; // assings ID one greater than the previus button
  newPage.innerHTML = `${lastPage + 1}`; // assings Number one greater than the previus button

  newPage.addEventListener("click", split); //onclick only shows jobs that should be on that page
  newPage.addEventListener("click", clear); //onclick hides all other list items(jobs)

  const Parent = document.getElementById("pageBtns");
  Parent.appendChild(newPage);

  currentItemsOnLastPage = 1;
  lastPage += 1;
}

function split() {
  for (
    i = maxItemsPerPage * (this.id - 1);
    i < maxItemsPerPage * this.id;
    i++
  ) {
    let myElement = document.getElementById("listItems");
    myElement.children[i].innerHTML = this.id;
    myElement.children[i].className = "showme";
    currentPage = this.id;
  }
}

function clear() {
  let myElement = document.getElementById("listItems");
  //makes all before invisible
  for (let i = 0; i < maxItemsPerPage * (this.id - 1); i++) {
    myElement.children[i].className = "hideme";
  }
  //makes all after invisible
  for (let i = maxItemsPerPage * this.id; i < myElement.children.length; i++) {
    myElement.children[i].className = "hideme";
  }
}
// !!! change name !!!
function noIdeaWhaToNameThis() {
  let firstBtn = document.getElementById("1");
  firstBtn.addEventListener("click", split);
  firstBtn.addEventListener("click", clear);
}

//clicks the the previous number
function moveLeft() {
  if (currentPage != 1) {
    document.getElementById(`${currentPage - 1}`).click();
  }
}

//clicks the next button
function moveRight() {
  if (currentPage != lastPage) {
    document.getElementById(`${Number(currentPage) + 1}`).click();
  }
}

/*
let maxNeighbours = 2;
let currentButtons = 1;

if (currentButtons > maxButtons) {
}

function checkLeft() {}

function checkRight() {
  if (currentPage > maxNeighbours) {
    let allButtons = document.getElementById("pageBtns");
    for (let i = 0; i < currentPage - maxNeighbours; i++) {
      
    }
    console.log(allButtons.children.length);
  }
}
*/

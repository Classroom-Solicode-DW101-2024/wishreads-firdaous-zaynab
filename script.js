
let books = [];
let categories = [];
let wishListArray = [];

let categoriesContainer = document.getElementById("section popular");
let booksContainer = document.getElementById("grid-list");

fetch("books.json").then(results => {

    let myData = results.json();
    console.log(myData);
    return myData;
}).then((myData) => {

    myData.forEach(data => {

        books.push(data);

    });

    console.log(books);
    categoriesFunction(books);

});

wishListArray = getBooksFromLocalStorage();

console.log("wishList : ");
console.log(wishListArray);




function getBooksFromLocalStorage() {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    return books;
}

function displayBooks(book) {
  let bookItem = document.createElement("li");
  bookItem.innerHTML = `
      <div class="product-card">
          <span class="card-badge">New</span>
          <div class="card-banner img-holder" style="--width: 384; --height: 480;">
              <img src="${book.cover}" width="384" height="480" loading="lazy" alt="${book.title}" class="img-cover">
              <div class="card-action">
                  <button class="action-btn details" aria-label="Quick View" title="Quick View">
                      <ion-icon name="eye-outline" aria-hidden="true"></ion-icon>
                  </button>
                  <button class="action-btn wishlist" aria-label="Add to Wishlist" title="Add to Wishlist">
                      <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                  </button>
              </div>
          </div>
          <div class="card-content">
              <h2 class="card-title h3">${book.title}</h2>
              <h2 class="card-price">${book.author.fullname}</h2>
              <div class="rating-wrapper">
                  ${Array(5).fill('<ion-icon name="star-outline" aria-hidden="true"></ion-icon>').join('')}
              </div>
          </div>
      </div>`;
  booksContainer.appendChild(bookItem);
}

fetch("books.json")
  .then(response => {
      if (!response.ok) {
          throw new Error("Error fetching data");
      }
      return response.json();
  })
  .then(data => {
      books = data;
      books.forEach(book => displayBooks(book));
      // Optional: categoriesFunction(books);
  })
  .catch(error => console.error(error));

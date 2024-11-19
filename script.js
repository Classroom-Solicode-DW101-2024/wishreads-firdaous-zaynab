
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

function displayBooks(books) {
  booksContainer.innerHTML = ""; // Clear container before rendering

  for (let i = 0; i < books.length; i++) {
      let book = books[i];

      let bookItem = document.createElement("li");
      bookItem.innerHTML = `
          <div class="product-card">
              <span class="card-badge">New</span>
              <div class="card-banner img-holder" style="--width: 384; --height: 480;">
                  <img src="${book.cover}" width="384" height="480" loading="lazy" alt="${book.title}" class="img-cover">
                  <div class="card-action">
                      <a href="details.html?id=${i}" class="action-btn details" aria-label="Quick View" title="Quick View">
                          <ion-icon name="eye-outline" aria-hidden="true"></ion-icon>
                      </a>
                      <button class="action-btn wishlist" aria-label="Add to Wishlist" title="Add to Wishlist">
                          <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                      </button>
                  </div>
              </div>
              <div class="card-content">
              <br>
                  <h2 class="card-title h3">${book.title}</h2>
                  <h2 class="card-price">${book.author.fullname}</h2>
                  <div class="rating-wrapper">
                      ${Array(5).fill('<ion-icon name="star-outline" aria-hidden="true"></ion-icon>').join('')}
                  </div>
              </div>
<<<<<<< Updated upstream
          </div>`;
      booksContainer.appendChild(bookItem);
  }
=======
          </div>
      </div>`;
  booksContainer.appendChild(bookItem);

  // Add event listener for "Details" button
  bookItem.querySelector(".details").addEventListener("click", () => {
    window.location.href = `details.html?id=${index}`;
});
>>>>>>> Stashed changes
}

// Fetch books and display them
fetch("books.json")
  .then(response => {
      if (!response.ok) {
          throw new Error("Error fetching data");
      }
      return response.json();
  })
  .then(data => {
      books = data;
      displayBooks(books); // Pass books array to the function
  })
  .catch(error => console.error(error));

<<<<<<< Updated upstream
=======

  function displayBookDetails(book) {
    let bookDetailsContainer = document.getElement("book-details");
    bookDetailsContainer.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author.fullname || "Unknown"}</p>
        <p><strong>Biography:</strong> ${book.author.biography || "Not available"}</p>
        <p><strong>Description:</strong> ${book.description || "No description available"}</p>
        <p><strong>Publication Year:</strong> ${book.year || "N/A"}</p>
        <a href="index.html" class="btn">Back to Home</a>
    `;
  }  
>>>>>>> Stashed changes

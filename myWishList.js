document.addEventListener("DOMContentLoaded", () => {
  let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || []; // Get wishlist from local storage
  // let alreadyRead = JSON.parse(localStorage.getItem("already-read")) || [];
  let deleteBtn = document.querySelectorAll(".delete-book");
  

  const tbody = document.querySelector("tbody");

  // Function to render the wishlist in the table
  function renderWishlist() {
    tbody.innerHTML = ""; 
    wishlistData.forEach((book, index) => {
      tbody.innerHTML += `
      
          <tr>
            <td><img src="${book.cover}"  class="book-cover"></td>
            <td><h1 class="book-title">${book.title}</h3></td>
            <br>
            <h2 class="book-author"><strong>Author:</strong> ${book.author.fullname || "Unknown"}</h2>
            <td>
                <a href="${book.linkPDF}" class="btn" data-id="${index}">PDF</a>
                <button class="already-read" data-id="${index}">Unread</button>
                <br>
                <button class="delete-book" data-id="${index}">Delete</button>
            </td>
            
          </tr>
        `;
    });
  }
  // render of wishlist
  renderWishlist();

  


  tbody.addEventListener("click", (e) => {
    const target = e.target;

    // Already Read
  if (target.classList.contains("already-read")) {
    target.style.backgroundColor = "#28a745"; // changing to green color
    target.textContent = "Finished";
  } 

    // Handle delete button
    if (target.classList.contains("delete-book")) {
      const bookIndex = target.getAttribute("data-id"); // Get the book's index from the button's data-id
      wishlistData.splice(bookIndex, 1); // Remove the book from the array

      // Update local storage and re-render the table
      localStorage.setItem("wishlist", JSON.stringify(wishlistData));
      renderWishlist();
      updateBadgeCounter();

      // alert("Book removed from wishlist.");
    }
  });
});



      // UPDATE WISHLIST BADGE
function updateBadgeCounter(){
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []; // Retrieve wishlist from local storage
  const badge=document.querySelector(".count");
  badge.textContent=wishlist.length;
}
updateBadgeCounter();
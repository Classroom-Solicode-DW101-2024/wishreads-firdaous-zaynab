<<<<<<< Updated upstream

  document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id"); // Assuming the book ID is passed as a URL parameter, e.g., ?id=1

    fetch("books.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching book data");
        }
        return response.json();
      })
      .then(books => {
        const book = books[bookId]; // Get the book details by ID
        if (book) {
          displayBookDetails(book);
        } else {
          document.getElementById("book-details").innerHTML = "<p>Book not found.</p>";
        }
      })
      .catch(error => console.error("Error:", error));
  });

  function displayBookDetails(book) {
    const bookDetailsSection = document.getElementById("book-details");
    bookDetailsSection.innerHTML = `
      <div class="details-container">
        <img src="${book.cover}" alt="${book.title}" class="book-cover" />
        <h1 class="book-title">${book.title}</h1>
        <p class="book-author"><strong>Author:</strong> ${book.author.fullname || "Unknown"}</p>
        <p class="book-bio"><strong>Biography:</strong> ${book.author.biography || "No biography available."}</p>
        <p class="book-description"><strong>Description:</strong> ${book.description || "No description available."}</p>
        <p class="book-year"><strong>Publication Year:</strong> ${book.year || "N/A"}</p>
      </div>
    `;
  }

=======
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const bookId = params.get("id");
  
    fetch("books.json")
      .then(response => {
          if (!response.ok) {
              throw new Error("Error fetching data");
          }
          return response.json();
      })
      .then(books => {
          const book = books[bookId];
          if (book) {
              displayBookDetails(book);
          } else {
              document.getElementById("book-details").innerHTML = "<p>Book not found.</p>";
          }
      })
      .catch(error => console.error(error));
  });
  
  function displayBookDetails(book) {
    const bookDetailsContainer = document.getElementById("book-details");
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

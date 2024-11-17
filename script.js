const mostPopularProducts = document.querySelector(".most-popular-products");
const jsonFile = "books.json";

// Function to create book cards
function createBookCard(book) {
    const { title, description, cover, author } = book;
    
    // Create a truncated description (first 100 characters)
    const shortDescription = description.length > 100 
        ? description.substring(0, 100) + '...' 
        : description;

    return `
        <div class="product-card">
            <div class="product-card__container">
                <div class="product-card__img">
                    <img src="${cover}" alt="${title}" />
                </div>
                <div class="product-card__buttons">
                    <button class="product-card__btn wishlist" 
                            data-tooltip="Add to wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-card__description">
                <h3 class="product-card__title">${title}</h3>
                <p class="product-card__author">By ${author.fullname}</p>
                <p class="product-card__text">${shortDescription}</p>
            </div>
        </div>
    `;
}

// Function to load and display books
function loadBooks() {
    try {
        // Get the books data from your JSON
        const books = [
            // Your books array from the JSON file will be here
            // For development, you can directly paste your JSON array here
        ];

        // Display all books
        books.forEach(book => {
            mostPopularProducts.innerHTML += createBookCard(book);
        });

        // Add event listeners for wishlist buttons
        const wishlistButtons = document.querySelectorAll('.product-card__btn.wishlist');
        wishlistButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Toggle active class for visual feedback
                this.classList.toggle('active');
                // Here you can add wishlist functionality
            });
        });

    } catch (error) {
        console.error('Error loading books:', error);
        mostPopularProducts.innerHTML = '<p>Error loading books. Please try again later.</p>';
    }
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', loadBooks);
# Bookstore Application

This project is a responsive web application that allows users to browse, search, and purchase books. The application is built using Next.js, React.js, TypeScript, Mantine UI, Zod for form validation, and Zustand for state management.

# Running the Development Server

npm run dev


# Project Structure
/component: Contains reusable UI components.
/src/app: Contains Next.js pages.
/stores: Contains Zustand store for state management.


# Usage Guide

# Adding a Book
- Navigate to the "Add Book" page.
- Fill in the book details, including book name, author, price, and category.
- Click the "Submit" button.
- A success message will be displayed upon successful submission, and the book will be added to the bookstore.

# Searching for Books
- Use the search bar on the main page to search for books by name or category.
- The book list will be filtered based on your search query.

# Viewing and Managing the Cart
- Click on the "Add to Cart" button on any book card to add the book to your cart.
- Navigate to the "Cart" page to view your cart items.
- You can update the quantity of each item or remove items from the cart.
- The total price of the cart items will be displayed at the top of the cart page.
# BookHive

BookHive is a small e-commerce app that allows users to browse, order and buy books from an online book shop. It is made in Angular with JSON-server as a mock backend.

## Installation

To install the project, you need to have [Node.js] and [Angular CLI] installed on your system. Then, follow these steps:

- Clone the repository from GitHub: `git clone https://github.com/Argonses/BookHive.git`
- Navigate to the project folder: `cd BookHive`
- Install the dependencies: `npm install` 
- Start the JSON-server: `cd src/app/data` and then `json-server --watch db.json`
- Start the Angular app: `ng serve`

## Usage

The app will run on `http://localhost:4200/` by default. You can see the list of books on the home page, and use the buttons to add them to your cart or view their details. You can also search for books by title, author or genre using the search bar. To place an order, you need to register or login with your email and password.

## Features

The app has the following features:

- CRUD operations on books using JSON-server as a mock backend
- Shopping cart functionality using local storage
- Order placement and confirmation
- Search functionality by title, author or genre

# Phase 2, Lecture 5: Side Effects & Data Fetching

## Lecture Topics

- useEffect
- Dependency array
- fetch => GET & POST

## Introduction

Today we'll continue to build our app for the pet adoption center, Flatapets, that displays a list of pets available for adoption at this pet adoption center. We will be fetching our pet data from a JSON server and adding functionality to make a POST request to persist the new pet that is added as a result of the user submitting a form to add a new pet that will be available for adoption. Once the user clicks the "Add Pet" submit button, a new pet should be added to the list of pets that are displayed on the page and this will persist in the backend as well. We will be using the concepts learned in this lecture to build out this new feature in this app.

## Setup

1. Run `npm install` in your terminal to install the dependencies for this React app.
2. Run `npm run server`. This will run your backend on port `4000`.
3. In a new terminal, run `npm start` in your terminal to run this React app in the browser. If your browser does not automatically open the page for you, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

In our React application, the data about the Pets is in the `db.json` file. This file will mimic an API that follows RESTful conventions.

Make sure to open [http://localhost:4000/pets](http://localhost:4000/pets) in the browser to verify that your backend is working before you proceed!
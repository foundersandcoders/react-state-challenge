# React state challenge

Practice using React state to share dynamic values across different parts of an app.

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
1. Run `npm install` to install all the dependencies
1. Run `npm run dev` to start the local dev server

## Checking your work

Each challenge has associated unit tests. You can run each challenge's tests with `./tests 1`, `./tests 2` etc.

Make sure you read test failures carefully—the output can be noisy but the error message should provide useful information to help you.

## Challenge 1: modularisation

The `App` component in `challenge/App.jsx` is getting a bit noisy. It's usually a good idea to start writing all your code in one component, since you don't know exactly what you need yet. But now there's a few established sections we should extract them to separate components.

1. Extract the "Price" fieldset to a new file called `FilterPrice.jsx`
1. Extract the "Category" fieldset to a new file called `FilterCategory`
1. Extract the unordered list rendering the dishes to a new file called `ListDishes.jsx`
1. Import and render the components in `App.jsx` so the UI stays the same

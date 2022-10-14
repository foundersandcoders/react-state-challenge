# React state challenge

Practice using React state to share dynamic values across different parts of an app.

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
1. Run `npm install` to install all the dependencies
1. Run `npm run dev` to start the local dev server

## Checking your work

Each challenge has associated unit tests. You can run each challenge's tests with `./test/run 1`, `./test/run 2` etc.

Make sure you read test failures carefully—the output can be noisy but the error message should provide useful information to help you.

## Challenge 1: modularisation

The `App` component in `challenge/App.jsx` is getting a bit noisy. It's usually a good idea to start writing all your code in one component, since you don't know exactly what you need yet. But now there's a few established sections we should extract them to separate components.

1. Extract the "Price" fieldset to a new file called `FilterPrice.jsx`
1. Extract the "Category" fieldset to a new file called `FilterCategory`
1. Extract the unordered list rendering the dishes to a new file called `ListDishes.jsx`
1. Import and render the components in `App.jsx` so the UI stays the same

## Challenge 2: filtering by price

The max price range input currently does nothing. We need to use a React state value to make the UI dynamic.

1. Create a state value representing the maximum price filter
1. Control the state value with the max price range input
1. Filter the dish list to only show dishes cheaper than the chosen max price

Remember this state needs to be used in two places, so think carefully about where it should be defined.

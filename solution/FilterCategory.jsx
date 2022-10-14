import dishes from "./data.js";

// Get all unique categories from the array of dishes
const categories = [...new Set(dishes.map((dish) => dish.category))];

export default function FilterCategory() {
  return (
    <fieldset>
      <legend>Category</legend>
      {categories.map((c) => (
        <label htmlFor={c} key={c}>
          <input type="radio" name="categories" id={c} value={c} />
          {c}
        </label>
      ))}
    </fieldset>
  );
}

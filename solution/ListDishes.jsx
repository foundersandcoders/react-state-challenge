import dishes from "./data.js";

export default function ListDishes() {
  return (
    <ul className="grid">
      {!dishes.length && <li className="card">No results found</li>}
      {dishes.length &&
        dishes.map((dish) => (
          <li key={dish.id} className="card">
            <h3>{dish.name}</h3>
            {dish.description && <p>{dish.description}</p>}
            <div>£{dish.price.toFixed(2)}</div>
          </li>
        ))}
    </ul>
  );
}

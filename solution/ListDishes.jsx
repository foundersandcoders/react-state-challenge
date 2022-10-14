import dishes from "./data.js";

export default function ListDishes({ max }) {
  return (
    <ul className="grid">
      {dishes
        .filter((dish) => dish.price < max)
        .map((dish) => (
          <li key={dish.id} className="card">
            <h3>{dish.name}</h3>
            {dish.description && <p>{dish.description}</p>}
            <div>£{dish.price.toFixed(2)}</div>
          </li>
        ))}
    </ul>
  );
}

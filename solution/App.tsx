import { useState } from "react";
import FilterPrice from "./FilterPrice.tsx";
import FilterCategory, { type Category } from "./FilterCategory.tsx";
import ListDishes from "./ListDishes.tsx";

function App() {
	const [max, setMax] = useState(9);
	const [category, setCategory] = useState<Category>("all");
	return (
		<main>
			<section aria-label="filters">
				<div className="sticky">
					<h1>Burger Place</h1>
					<form>
						<h2>Filter dishes</h2>
						<FilterPrice max={max} setMax={setMax} />
						<FilterCategory category={category} setCategory={setCategory} />
					</form>
				</div>
			</section>
			<section aria-label="dishes">
				<ListDishes max={max} category={category} />
			</section>
		</main>
	);
}

export default App;

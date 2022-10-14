// eslint-disable-next-line import/no-unresolved
import { describe as test, after } from "node:test";
import assert from "node:assert/strict";
import { component, render, createElement, prettyDOM, tag } from "./helpers.js";

test("FilterPrice component is extracted to separate file", async () => {
  const FilterPrice = await component("FilterPrice");
  const el = createElement(FilterPrice, { name: "oli" });
  const { unmount, container } = render(el);
  after(unmount);

  const legend = tag(container, "legend", window.HTMLLegendElement);
  assert.match(
    legend.textContent,
    /price/i,
    `<FilterPrice /> render should include <legend>Price</legend>, but got:\n${prettyDOM()}`
  );
});

test("FilterCategory component is extracted to separate file", async () => {
  const FilterCategory = await component("FilterCategory");
  const el = createElement(FilterCategory, { name: "oli" });
  const { unmount, container } = render(el);
  after(unmount);

  const legend = tag(container, "legend", window.HTMLLegendElement);
  assert.match(
    legend.textContent,
    /category/i,
    `<FilterCategory /> render should include <legend>Category</legend>, but got:\n${prettyDOM()}`
  );
});

test("ListDishes component is extracted to separate file", async () => {
  const ListDishes = await component("ListDishes");
  const el = createElement(ListDishes, { name: "oli" });
  const { unmount, container } = render(el);
  after(unmount);

  const ul = tag(container, "ul", window.HTMLUListElement);
  assert.equal(
    ul.children.length,
    58,
    `<ListDishes /> should render a <ul> with 58 children, but got:\n${prettyDOM(
      ul
    )}`
  );
});

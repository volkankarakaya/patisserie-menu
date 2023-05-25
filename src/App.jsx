import Title from "./Title";
import { useState } from "react";
import menu from './data'
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ['all', ...new Set(menu.map(item => item.category))]
console.log(allCategories)

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  return <main>
    <section className="menu">
      <Title text="Our Menu"/>
      <Categories categories={categories} />
      <Menu items={menuItems} />
    </section>
  </main>
};
export default App;

import Title from "./Title";
import { useState } from "react";
import menu from './data'
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ['all', ...new Set(menu.map(item => item.category))]


const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    let filteredItems = menu.filter(item => item.category === category)
    if(category === 'all'){
      setMenuItems(menu)
      return
    }
    setMenuItems(filteredItems)
  }

  return <main>
    <section className="menu">
      <Title text="Our Menu"/>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>
};
export default App;

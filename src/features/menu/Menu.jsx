import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";

import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <section className="divide-y divide-stone-200 px-4">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </section>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;

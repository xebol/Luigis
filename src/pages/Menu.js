import menuItems from "../data/menu-items.json";

const Menu = () => {
  return (
    <>
      <h1>Menu</h1>
      {menuItems.map(item => (
        JSON.stringify(item)
      ))}
    </>
  );
};




export default Menu;
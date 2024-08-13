import "./ExploreMenu.css";

import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ onSelectCategory, category }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore_description">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experiene,
        one dleicious meal at a time
      </p>
      <div className="explore-menu-list">
        {menu_list &&
          menu_list.length > 0 &&
          menu_list.map((menu, i) => (
            <div
              key={i}
              className="explore-menu-list-item"
              onClick={() => onSelectCategory(menu.menu_name)}
            >
              <img
                src={menu.menu_image}
                alt={menu.menu_name}
                className={
                  category === menu.menu_name
                    ? `active explore-img`
                    : `explore-img`
                }
              />
              <p>{menu.menu_name}</p>
            </div>
          ))}
        {menu_list.length === 0 && <p>Loading meals list....</p>}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

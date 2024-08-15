import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";

import "./MenuPage.css";

const MenuPage = () => {
  return (
    <div className="MenuPage">
      <ExploreMenu />
      <FoodDisplay category="All" />
    </div>
  );
};

export default MenuPage;

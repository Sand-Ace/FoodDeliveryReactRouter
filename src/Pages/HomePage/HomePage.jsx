import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Header from "../../Components/Header/Header";
import "./Home.css";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";
const HomePage = () => {
  const [category, setCategory] = useState("All");

  function handleClickCategory(getName) {
    setCategory((prevState) => (prevState === getName ? "All" : getName));
  }

  console.log(category);

  return (
    <>
      <Header />
      <ExploreMenu onSelectCategory={handleClickCategory} category={category} />
      <FoodDisplay category={category} />
      <AppDownload />
    </>
  );
};

export default HomePage;

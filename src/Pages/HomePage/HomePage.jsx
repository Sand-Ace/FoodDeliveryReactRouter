import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Header from "../../Components/Header/Header";
import "./Home.css";
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
    </>
  );
};

export default HomePage;

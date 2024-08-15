import "./Header.css";

import { headerImges } from "../../assets/assets";
import { useEffect, useState } from "react";

const headerImg = [...headerImges];
const Header = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    const TIMERID = setInterval(() => {
      setCount((prevCount) =>
        prevCount < headerImg.length - 1 ? prevCount + 1 : 0
      );
    }, 3000);

    return () => {
      clearInterval(TIMERID);
    };
  }, []);

  return (
    <div className="header" id="header">
      <img src={headerImg[2]} alt="" className="headerImg" />
      <div className="header-contents">
        <h1>Order your favourite food here</h1>
        <p>
          Choose from diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining experiene,
          one dleicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};
export default Header;

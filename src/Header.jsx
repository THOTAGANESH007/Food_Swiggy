import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  //dont use usestate variables in the conditionals and outside the main component
  const [auth, setAuth] = useState(true);

  // 1) if no dependency array then the useEffect is called on every component render
  // useEffect(() => {
  //   console.log("useEffect Called");
  // });

  // 2) if there is an empty dependency array then the useEffect is called on the initial render
  // useEffect(() => {
  //   console.log("useEffect Called");
  // }, []);

  // 3) if the dependency array contains the (local state) variable then the useEffect will be called when that variable changes
  // useEffect(() => {
  //   console.log("useEffect Called");
  // }, [auth]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.zenn.com/strapi_assets/large_food_logo_5fbb88038c.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button onClick={() => setAuth(!auth)}>
            {auth ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
}

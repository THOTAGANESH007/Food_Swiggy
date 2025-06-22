import { useState } from "react";

export default function Header() {
  const [auth, setAuth] = useState(true);
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button onClick={() => setAuth(!auth)}>
            {auth ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { restaurantMenuUrl } from "./constants.js";
import axios from "axios";
import ShimmerContainer from "./ShimmerContainer.jsx";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get(restaurantMenuUrl + resId);
      setResInfo(response);
    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  };

  if (resInfo === null) return <ShimmerContainer />;

  const { name, cuisines, avgRating } =
    resInfo.data?.data?.cards?.[2]?.card?.card?.info || {};

  const categories =
    resInfo.data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[2]?.card?.card?.categories || [];

  const itemCards = categories?.[0]?.itemCards || [];
  const category = itemCards?.[0]?.card?.info?.category || "N/A";

  return (
    <>
      <div className="top">
        <h1>{name}</h1>
        <p>{cuisines?.join(", ")}</p>
        <p>avgRating: {avgRating}</p>
      </div>
      <div className="category">
        <h4>Category: {category}</h4>
        <ul>
          {itemCards.map((item) => (
            <div key={item.card.info.id}>
              <li>
                {item.card.info.name} - Rs.
                {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;

import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "./constants";
const resObj = resList?.card?.card?.gridElements?.infoWithStyle.restaurants;
const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState(resObj);

  const filterTopRated = () => {
    const topRated = filteredRestaurant.filter((res) => res.info.avgRating > 5);
    setFilteredRestaurant(topRated);
  };

  return (
    <div className="body">
      <div className="search-container">
        <button onClick={filterTopRated}>Top Rated Restaurant</button>
      </div>
      <div className="search-container">
        <input type="text" />
        <button>search </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant, index) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;

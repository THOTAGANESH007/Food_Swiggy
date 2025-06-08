import RestaurantCard from "./RestaurantCard";
import { resList } from "./constants";
const resObj = resList?.card?.card?.gridElements?.infoWithStyle.restaurants;
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" />
        <button>search </button>
      </div>
      <div className="res-container">
        {resObj.map((restaurant, index) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;

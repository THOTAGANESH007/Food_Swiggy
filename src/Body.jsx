import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "./constants";
import axios from "axios";
import ShimmerContainer from "./ShimmerContainer";
const resObj = resList?.card?.card?.gridElements?.infoWithStyle.restaurants; //mock data

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const SWIGGY_URL =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.217176&lng=79.1003289&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

      const response = await axios.get(SWIGGY_URL);

      const res =
        response.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurants(res);
      setFilteredRestaurants(res);
    } catch (error) {
      console.log(error);
    }
  };

  const filterTopRated = () => {
    const topRated = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants(topRated);
  };

  const filterRestaurantsOnSearch = () => {
    const filtered = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const displayRestaurants = filteredRestaurants.map((restaurant) => (
    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
  ));

  return (
    <div className="body">
      <div className="search-container">
        <button onClick={filterTopRated}>Top Rated Restaurant</button>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={filterRestaurantsOnSearch}>search </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <ShimmerContainer />
        ) : (
          displayRestaurants
        )}
      </div>
    </div>
  );
};
export default Body;

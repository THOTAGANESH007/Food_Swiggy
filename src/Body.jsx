import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import ShimmerContainer from "./ShimmerContainer";
import { Link } from "react-router-dom";

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

      // Safely find the card that contains restaurants
      const res = response.data?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants !==
          undefined
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(res || []);
      setFilteredRestaurants(res || []);
    } catch (error) {
      console.log("Error fetching restaurant list:", error);
      setListOfRestaurants([]);
      setFilteredRestaurants([]);
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
    <Link to={`/restaurantMenu/${restaurant.info.id}`} key={restaurant.info.id}>
      <RestaurantCard resData={restaurant} />
    </Link>
  ));

  return (
    <div className="body">
      <div className="search-container">
        <button onClick={filterTopRated}>Top Rated Restaurants</button>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={filterRestaurantsOnSearch}>Search</button>
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

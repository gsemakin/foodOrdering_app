import React from "react";
import { SIZES } from "../../constants/ui";
import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../store/restaurant/selectors";
import { NavLink, Outlet, useParams } from "react-router-dom";
//import { RestaurantRating } from "../../containers/RestaurantRating/RestaurantRating";

export const Restaurant = () => {
  const { restaurantId } = useParams();

  const restaurantName = useSelector((state) =>
    selectRestaurantNameById(state, { restaurantId })
  );

  if (!restaurantName) {
    return <span>NotFound</span>;
  }

  return (
    <div>
      <h1>{restaurantName}</h1>
      {/* <RestaurantRating size={SIZES.l} />*/}
      <ul>
        <li>
          <NavLink to="menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

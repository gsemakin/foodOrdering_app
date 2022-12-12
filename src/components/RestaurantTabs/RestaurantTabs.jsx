import { useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantIdsFilteredByName,
} from "../../store/restaurant/selectors";
import { RestaurantTab } from "../RestaurantTab/RestaurantTab";
import { useSearchParams } from "react-router-dom";

export const RestaurantTabs = () => {
  const [search, setSearch] = useSearchParams();

  const restaurantIds = useSelector((state) =>
    selectRestaurantIdsFilteredByName(state, {
      restaurantName: search.get("restaurantName") || "",
    })
  );

  return (
    <div>
      <input
        value={search.get("restaurantName") || ""}
        onChange={(event) => {
          setSearch({ restaurantName: event.target.value });
        }}
      />
      {restaurantIds.map((id) => (
        <RestaurantTab key={id} restaurantId={id} />
      ))}
    </div>
  );
};

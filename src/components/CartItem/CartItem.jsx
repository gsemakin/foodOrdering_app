import { useSelector } from "react-redux";
import { selectCartDishCount } from "../../store/cart/selectors";
import { selectDishById } from "../../store/dish/selectors";

export const CartItem = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) => selectCartDishCount(state, { dishId }));

  if (!dish) {
    return <span>NotFound</span>;
  }

  return (
    <div>
      <span>{dish.name}</span>-<span>{count}</span>
    </div>
  );
};

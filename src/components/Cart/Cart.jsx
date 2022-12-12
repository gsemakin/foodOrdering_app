import { useSelector } from "react-redux";
import { selectCartDishIds } from "../../store/cart/selectors";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const dishIds = useSelector(selectCartDishIds);
  return (
    <div>
      <div>
        {dishIds && dishIds.map((id) => <CartItem key={id} dishId={id} />)}
      </div>
    </div>
  );
};

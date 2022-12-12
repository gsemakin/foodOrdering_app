import classnames from "classnames";

import styles from "./styles.module.css";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectCartDishCount } from "../../store/cart/selectors";
import { selectDishById } from "../../store/dish/selectors";
import { cartSlice } from "../../store/cart";

export const Dish = ({ dishId, className }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) => selectCartDishCount(state, { dishId }));
  const dispatch = useDispatch();

  const decrement = () => dispatch(cartSlice.actions.removeDish(dishId));
  const increment = () => dispatch(cartSlice.actions.addDish(dishId));

  if (!dish) {
    return <span>Not Found</span>;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.dish}>
        <div
          className={classnames(styles.dishName, {
            [styles.max]: count > 5,
            [styles.min]: count < 2,
            [styles.norm]: count >= 2 && count <= 5,
          })}
        >
          {dish.name}
        </div>
        <div>
          <Button onClick={decrement}>-</Button>
          {count}
          <Button onClick={increment}>+</Button>
        </div>
      </div>
    </div>
  );
};

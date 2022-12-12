import styles from "./styles.module.css";
//import { Rating } from "../Rating/Rating";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../store/review/selectors";
//import { User } from "../User/User";

export const Review = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, { reviewId }));

  if (!review) {
    return <span>Not Found</span>;
  }

  return (
    <div className={styles.root}>
      <div>{review.text}</div>
      {/**<Rating value={review.rating} size="s" /> */}
      {/**<User userId={review.userId} /> */}
    </div>
  );
};

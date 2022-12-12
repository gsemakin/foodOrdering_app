import React, { useEffect } from "react";
import { Review } from "../Review/Review";
import { NewReviewForm } from "../NewReviewForm/NewReviewForm";

import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectReviewsByRestaurantId } from "../../store/restaurant/selectors";
import { selectIsReviewLoading } from "../../store/review/selectors";
import { loadUsersIfNotExist } from "../../store/user/middlewares/loadUsersIfNotExist";
import { loadReviewsIfNotExist } from "../../store/review/middlewares/loadReviewsIfNotExist";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const { restaurantId } = useParams();
  const reviewIds = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsReviewLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);

  useEffect(() => {
    dispatch(loadUsersIfNotExist);
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!reviewIds?.length) {
    return <span>Пусто тут</span>;
  }

  return (
    <div className={styles.root}>
      <h2>Reviews</h2>
      <div className={styles.reviews}>
        {reviewIds.map((id) => (
          <Review key={id} reviewId={id} />
        ))}
      </div>
      <NewReviewForm />
    </div>
  );
};

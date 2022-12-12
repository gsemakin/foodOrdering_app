import styles from "./styles.module.css";
import classnames from "classnames";
import { useReducer, useState } from "react";
import { Rating } from "../Rating/Rating";

const MIN_RATING = 1;
const MAX_RATING = 5;

const INITIAL_FORM_VALUE = {
  name: "",
  text: "",
  email: "",
  rating: 1,
};

const ACTIONS = {
  setName: "setName",
  setText: "setText",
  setEmail: "setEmail",
  setRating: "setRating",
  clear: "clear",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.setName: {
      return { ...state, name: action.payload };
    }

    case ACTIONS.setText: {
      return { ...state, text: action.payload };
    }

    case ACTIONS.setRating: {
      const value = action.payload;
      if (value && (value < MIN_RATING || value > MAX_RATING)) {
        return { ...state, rating: MIN_RATING };
      }

      return { ...state, rating: value };
    }
    case ACTIONS.setEmail: {
      return { ...state, email: action.payload };
    }
    case ACTIONS.clear: {
      return INITIAL_FORM_VALUE;
    }
    default:
      return state;
  }
};

export const NewReviewForm = ({ className }) => {
  const [formValue, dispatch] = useReducer(formReducer, INITIAL_FORM_VALUE);

  const onNameChange = (event) => {
    dispatch({ type: ACTIONS.setName, payload: event.target.value });
  };
  const onTextChange = (event) => {
    dispatch({ type: ACTIONS.setText, payload: event.target.value });
  };
  const onEmailChange = (event) => {
    dispatch({ type: ACTIONS.setEmail, payload: event.target.value });
  };
  const onRatingChange = (value) => {
    dispatch({ type: ACTIONS.setRating, payload: value });
  };

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.formControl}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={formValue.name}
          onChange={onNameChange}
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="text">Text</label>
        <input
          name="text"
          type="text"
          value={formValue.text}
          onChange={onTextChange}
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="text">Email</label>
        <input
          name="text"
          type="email"
          value={formValue.email}
          onChange={onEmailChange}
        />
      </div>
      <div className={styles.formControl}>
        <label>Rating</label>
        <Rating value={formValue.rating} onChange={onRatingChange} />
      </div>
      <button onClick={() => dispatch({ type: ACTIONS.clear })}>clear</button>
    </div>
  );
};

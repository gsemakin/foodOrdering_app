import styles from "./styles.module.css";
import classnames from "classnames";

import { ReactComponent as Logo } from "./imgs/logo.svg";
import { Link } from "react-router-dom";

export const Header = ({ className }) => {
  return (
    <header className={classnames(styles.root, className)}>
      {/*<div className={styles.logo} />*/}
      <Logo />
      <Link className={styles.link} to="/restaurants">
        Restaurants
      </Link>
      <Link to="/cart">Cart</Link>
    </header>
  );
};

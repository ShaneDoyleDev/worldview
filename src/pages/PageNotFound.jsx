import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1>Oops! Page Not Found</h1>
      <p>We couldn&apos;t find the page you&apos;re looking for.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
}

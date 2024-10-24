import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>Oops! Page Not Found</h1>
      <p>We couldn&apos;t find the page you&apos;re looking for.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
}

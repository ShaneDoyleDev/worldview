import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import City from "./City";

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <City key={city.id} city={city} />
      ))}
    </ul>
  );
}

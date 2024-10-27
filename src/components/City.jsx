import styles from "./City.module.css";

export default function City({ city }) {
  return <li>{city.cityName}</li>;
}

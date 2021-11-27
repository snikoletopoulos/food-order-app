import styles from "./Card.module.css";

const Card = (props: Props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;

interface Props {
  children: React.ReactNode;
}

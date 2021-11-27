import styles from "./Input.module.css";
import { forwardRef } from "react";

const Input = forwardRef((props: Props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} id={props.input.id} type="text" ref={ref} />
    </div>
  );
});

export default Input;

interface Props {
  input: {
    id: string;
    name: string;
  };
  label: string;
}

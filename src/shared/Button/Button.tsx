import { IButton } from './IButton';
import styles from './Button.module.css';
export const Button = ({ name, action }: IButton) => {
  return (
    <button className={styles.btn} onClick={action}>
      {name}
    </button>
  );
};

import { IButton } from './IButton';
import './Button.css';
export const Button = ({ name, action }: IButton) => {
  return (
    <button className="btn" onClick={action}>
      {name}
    </button>
  );
};

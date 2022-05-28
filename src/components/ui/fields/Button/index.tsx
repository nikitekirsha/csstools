import { CSSProperties, FC, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
	onClick?: () => void;
	style?: CSSProperties;
	children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, style, children }) => {
	return (
		<button className={styles.btn} onClick={onClick} style={style}>
			{children}
		</button>
	);
};

export default Button;

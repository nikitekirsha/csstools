import { CSSProperties, FC, ChangeEvent } from 'react';
import styles from './Input.module.css';

interface InputProps {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	readOnly?: boolean;
	muted?: boolean;
	style?: CSSProperties;
	value: string;
	placeholder: string;
}

const Input: FC<InputProps> = ({
	onChange,
	readOnly,
	style,
	value,
	placeholder,
	muted,
}) => {
	return (
		<input
			onChange={onChange}
			style={style}
			value={value}
			readOnly={readOnly}
			placeholder={placeholder}
			className={[styles.input, muted && styles.muted].join(' ')}
		/>
	);
};

export default Input;

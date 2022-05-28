import { ChangeEvent, CSSProperties, FC } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
	style?: CSSProperties;
}

const Checkbox: FC<CheckboxProps> = ({ onChange, checked, style }) => {
	return (
		<input
			className={styles.checkbox}
			style={style}
			type='checkbox'
			onChange={onChange}
			checked={checked}
		/>
	);
};

export default Checkbox;

import { ChangeEvent, FC } from 'react';
import styles from './ColorPicker.module.css';

interface ColorPickerProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

const ColorPicker: FC<ColorPickerProps> = ({ onChange, value }) => {
	return (
		<div style={{ backgroundColor: value }} className={styles.picker}>
			<p>{value}</p>
			<input
				className={styles.input}
				onChange={onChange}
				value={value}
				type='color'
			/>
		</div>
	);
};

export default ColorPicker;

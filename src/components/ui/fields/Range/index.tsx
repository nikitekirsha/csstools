import { ChangeEvent, FC } from 'react';
import styles from './Range.module.css';

interface RangeProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: number;
	min: number;
	max: number;
}

const Range: FC<RangeProps> = ({ onChange, value, min, max }) => {
	return (
		<input
			onChange={onChange}
			value={value}
			min={min}
			max={max}
			className={styles.range}
			type='range'
		/>
	);
};

export default Range;

import { ChangeEvent, FC } from 'react';
import styles from './Select.module.css';

export interface SelectOption {
	value: string;
	label: string;
}

interface SelectProps {
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	selected: string;
	options: SelectOption[];
}

const Select: FC<SelectProps> = ({ onChange, selected, options }) => {
	return (
		<select value={selected} onChange={onChange} className={styles.select}>
			{options.map((option, index) => {
				return (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				);
			})}
		</select>
	);
};

export default Select;

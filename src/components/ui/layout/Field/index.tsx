import { FC, ReactNode } from 'react';
import styles from './Field.module.css';

interface FieldProps {
	title: string;
	children: ReactNode;
}

const Field: FC<FieldProps> = ({ title, children }) => {
	return (
		<div>
			<label className={styles.label}>{title}</label>
			{children}
		</div>
	);
};

export default Field;

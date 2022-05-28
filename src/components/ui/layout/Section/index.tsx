import { FC, ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
	title: string;
	loading?: true;
	children: ReactNode;
}

const Section: FC<SectionProps> = ({ title, loading, children }) => {
	return (
		<section>
			<div className={`${styles.heading} ${loading ? styles.loading : ''}`}>
				<h2 className={styles.subtitle}>{title}</h2>
			</div>
			{children}
		</section>
	);
};

export default Section;

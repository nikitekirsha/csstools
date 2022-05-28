import { FC } from 'react';
import Section from '../ui/layout/Section';
import styles from './Info.module.css';

const Info: FC = () => {
	return (
		<Section title='Pick one'>
			<div className={styles.info}>
				<p>The results will appear here</p>
			</div>
		</Section>
	);
};

export default Info;

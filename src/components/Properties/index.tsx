import { FC } from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/layout/Section';
import linearGradient from '../../assets/img/properties/linear-gradient.svg';
import boxShadow from '../../assets/img/properties/box-shadow.svg';
import borderRadius from '../../assets/img/properties/border-radius.svg';
import border from '../../assets/img/properties/border.svg';
import styles from './Properties.module.css';

const Properties: FC = () => {
	return (
		<Section title='Property'>
			<div className={styles.properties}>
				<Link to='/linear-gradient' className={styles.property}>
					<span className={styles.title}>linear-gradient</span>
					<img
						className={styles.icon}
						src={linearGradient}
						alt='linear-gradient'
					/>
				</Link>
				<Link to='/box-shadow' className={styles.property}>
					<span className={styles.title}>box-shadow</span>
					<img className={styles.icon} src={boxShadow} alt='box-shadow' />
				</Link>
				<Link to='/border-radius' className={styles.property}>
					<span className={styles.title}>border-radius</span>
					<img className={styles.icon} src={borderRadius} alt='border-radius' />
				</Link>
				<Link to='/border' className={styles.property}>
					<span className={styles.title}>border</span>
					<img className={styles.icon} src={border} alt='border' />
				</Link>
			</div>
		</Section>
	);
};

export default Properties;

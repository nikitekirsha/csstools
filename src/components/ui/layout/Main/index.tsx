import { FC, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetFallback, resetStyle } from '../../../../store/slices/blockSlice';
import styles from './Main.module.css';

interface MainProps {
	title: string;
	children: ReactNode;
}

const Main: FC<MainProps> = ({ title, children }) => {
	const dispatch = useDispatch();

	const onCloseHandler = () => {
		dispatch(resetStyle());
		dispatch(resetFallback());
	};

	return (
		<main className={styles.main}>
			<Link to='/' onClick={onCloseHandler} className={styles.title}>
				<strong>{title}</strong>
			</Link>
			<div className={styles.content}>{children}</div>
		</main>
	);
};

export default Main;

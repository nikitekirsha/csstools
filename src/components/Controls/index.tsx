import { FC, ReactNode, useEffect } from 'react';
import Section from '../ui/layout/Section';
import close from '../../assets/img/icons/close.svg';
import reset from '../../assets/img/icons/reset.svg';
import styles from './Controls.module.css';
import Button from '../ui/fields/Button';
import { Link } from 'react-router-dom';
import {
	resetFallback,
	resetStyle,
	setFallback,
} from '../../store/slices/blockSlice';
import { useDispatch } from 'react-redux';

interface ControlsProps {
	onReset: () => void;
	fallback: string;
	title: string;
	children: ReactNode;
}

const Controls: FC<ControlsProps> = ({
	onReset,
	fallback,
	title,
	children,
}) => {
	const dispatch = useDispatch();

	const onResetHandle = () => {
		dispatch(resetStyle());
		onReset();
	};

	const onCloseHandle = () => {
		dispatch(resetStyle());
		dispatch(resetFallback());
	};

	useEffect(() => {
		dispatch(setFallback(fallback));
	}, [fallback, dispatch]);

	return (
		<Section title={title}>
			<div className={styles.controls}>
				<div className={styles.actions}>
					<Button onClick={onResetHandle}>
						<img src={reset} alt='Reset' />
					</Button>
					<Link to='/' onClick={onCloseHandle}>
						<Button>
							<img src={close} alt='Close' />
						</Button>
					</Link>
				</div>
				<div className={styles.fields}>{children}</div>
			</div>
		</Section>
	);
};

export default Controls;

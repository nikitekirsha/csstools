import { FC, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import copyToClipboard from '../../utils/copyToClipboard';
import Button from '../ui/fields/Button';
import Input from '../ui/fields/Input';
import Section from '../ui/layout/Section';
import styles from './Result.module.css';

const Result: FC = () => {
	/* == property == */

	const [property, setProperty] = useState<string | null>(null);

	const blockStyles = useSelector(
		(state: RootState) => state.block.blockStyles
	);
	const fallback = useSelector((state: RootState) => state.block.fallback);

	const blockRef = useCallback(
		(node: HTMLDivElement) => {
			if (node !== null) {
				setProperty(node.getAttribute('style'));
			}
		},
		// eslint-disable-next-line
		[blockStyles]
	);

	/* == copy == */

	const copy = () => {
		copyToClipboard(property ? property : fallback, () => alert('Copied!'));
	};

	return (
		<Section title='Result'>
			<div className={styles.result}>
				<div ref={blockRef} style={blockStyles} className={styles.block}></div>
				<Input
					readOnly
					style={{ marginBottom: '3rem' }}
					value={property ? property : fallback}
					placeholder='Property here'
				/>
				<Button onClick={copy} style={{ marginLeft: 'auto' }}>
					Copy result
				</Button>
			</div>
		</Section>
	);
};

export default Result;

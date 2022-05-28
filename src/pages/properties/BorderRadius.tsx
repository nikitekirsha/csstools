import { FC, useEffect, useState } from 'react';
import Controls from '../../components/Controls';
import Field from '../../components/ui/layout/Field';
import Range from '../../components/ui/fields/Range';
import Line from '../../components/ui/layout/Line';
import Result from '../../components/Result';
import { useDispatch } from 'react-redux';
import { setStyle } from '../../store/slices/blockSlice';

export const BorderRadius: FC = () => {
	const [topLeft, setTopLeft] = useState<number>(0);
	const [topRight, setTopRight] = useState<number>(0);
	const [bottomRight, setBottomRight] = useState<number>(0);
	const [bottomLeft, setBottomLeft] = useState<number>(0);

	const dispatch = useDispatch();

	const reset = () => {
		setTopLeft(0);
		setTopRight(0);
		setBottomRight(0);
		setBottomLeft(0);
	};

	useEffect(() => {
		dispatch(
			setStyle({
				borderTopLeftRadius: topLeft,
				borderTopRightRadius: topRight,
				borderBottomRightRadius: bottomRight,
				borderBottomLeftRadius: bottomLeft,
			})
		);
	}, [dispatch, topLeft, topRight, bottomRight, bottomLeft]);

	return (
		<>
			<Controls
				onReset={reset}
				fallback='border-radius: 0px;'
				title='Border radius'
			>
				<Field title='Top left'>
					<Range
						onChange={(e) => setTopLeft(parseInt(e.target.value))}
						value={topLeft}
						min={0}
						max={200}
					/>
				</Field>
				<Field title='Top right'>
					<Range
						onChange={(e) => setTopRight(parseInt(e.target.value))}
						value={topRight}
						min={0}
						max={200}
					/>
				</Field>
				<Field title='Bottom right'>
					<Range
						onChange={(e) => setBottomRight(parseInt(e.target.value))}
						value={bottomRight}
						min={0}
						max={200}
					/>
				</Field>
				<Field title='Bottom left'>
					<Range
						onChange={(e) => setBottomLeft(parseInt(e.target.value))}
						value={bottomLeft}
						min={0}
						max={200}
					/>
				</Field>
			</Controls>
			<Line />
			<Result />
		</>
	);
};

export default BorderRadius;

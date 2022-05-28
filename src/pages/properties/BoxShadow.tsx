import { FC, useEffect, useState } from 'react';
import Controls from '../../components/Controls';
import Field from '../../components/ui/layout/Field';
import Range from '../../components/ui/fields/Range';
import ColorPicker from '../../components/ui/fields/ColorPicker';
import Line from '../../components/ui/layout/Line';
import Result from '../../components/Result';
import { useDispatch } from 'react-redux';
import { setStyle } from '../../store/slices/blockSlice';
import hexToRgba from '../../utils/hexToRgba';
import Checkbox from '../../components/ui/fields/Checkbox';

export const BoxShadow: FC = () => {
	const [inset, setInset] = useState<boolean>(false);
	const [horizontal, setHorizontal] = useState<number>(0);
	const [vertical, setVertical] = useState<number>(0);
	const [blur, setBlur] = useState<number>(0);
	const [spread, setSpread] = useState<number>(0);
	const [color, setColor] = useState<string>('#f2f2f2');
	const [transparency, setTransparency] = useState<number>(100);

	const dispatch = useDispatch();

	const reset = () => {
		setInset(false);
		setColor('#f2f2f2');
		setHorizontal(0);
		setVertical(0);
		setBlur(0);
		setSpread(0);
		setTransparency(100);
	};

	useEffect(() => {
		const shadow = `${
			inset ? 'inset' : ''
		} ${horizontal}px ${vertical}px ${blur}px ${spread}px ${hexToRgba(
			color,
			transparency / 100
		)}`;
		dispatch(
			setStyle({
				boxShadow: shadow,
			})
		);
	}, [
		dispatch,
		inset,
		horizontal,
		vertical,
		blur,
		spread,
		color,
		transparency,
	]);

	return (
		<>
			<Controls
				onReset={reset}
				fallback='box-shadow: rgb(242, 242, 242) 0px 0px 0px 0px;'
				title='Box shadow'
			>
				<Field title='Use inset'>
					<Checkbox
						style={{ margin: '0 auto' }}
						onChange={(e) => setInset(e.target.checked)}
						checked={inset}
					/>
				</Field>
				<Field title='Shadow color'>
					<ColorPicker
						onChange={(e) => setColor(e.target.value)}
						value={color}
					/>
				</Field>
				<Field title='Horizontal offset'>
					<Range
						onChange={(e) => setHorizontal(parseInt(e.target.value))}
						value={horizontal}
						min={0}
						max={200}
					/>
				</Field>
				<Field title='Vertical offset'>
					<Range
						onChange={(e) => setVertical(parseInt(e.target.value))}
						value={vertical}
						min={0}
						max={200}
					/>
				</Field>
				<Field title='Blur amount'>
					<Range
						onChange={(e) => setBlur(parseInt(e.target.value))}
						value={blur}
						min={0}
						max={200}
					/>
				</Field>
				<Field title='Spread amount'>
					<Range
						onChange={(e) => setSpread(parseInt(e.target.value))}
						value={spread}
						min={0}
						max={100}
					/>
				</Field>
				<Field title='Shadow transparency'>
					<Range
						onChange={(e) => setTransparency(parseInt(e.target.value))}
						value={transparency}
						min={0}
						max={100}
					/>
				</Field>
			</Controls>
			<Line />
			<Result />
		</>
	);
};

export default BoxShadow;

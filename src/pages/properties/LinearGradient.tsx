import { FC, useEffect, useState } from 'react';
import Controls from '../../components/Controls';
import Field from '../../components/ui/layout/Field';
import Range from '../../components/ui/fields/Range';
import ColorPicker from '../../components/ui/fields/ColorPicker';
import Line from '../../components/ui/layout/Line';
import Result from '../../components/Result';
import Checkbox from '../../components/ui/fields/Checkbox';
import { useDispatch } from 'react-redux';
import { setStyle } from '../../store/slices/blockSlice';

const LinearGradient: FC = () => {
	const [radial, setRadial] = useState<boolean>(false);
	const [firstColor, setFirstColor] = useState<string>('#9a142d');
	const [secondColor, setSecondColor] = useState<string>('#9a142d');
	const [firstColorSpread, setFirstColorSpread] = useState<number>(0);
	const [secondColorSpread, setSecondColorSpread] = useState<number>(100);
	const [angle, setAngle] = useState<number>(0);

	const dispatch = useDispatch();

	const reset = () => {
		setRadial(false);
		setFirstColor('#9a142d');
		setSecondColor('#9a142d');
		setFirstColorSpread(0);
		setSecondColorSpread(100);
		setAngle(0);
	};

	useEffect(() => {
		const bgImage = `
		${radial ? 'radial-gradient' : 'linear-gradient'}(
			${radial ? 'circle' : angle + 'deg'},
			${firstColor} ${firstColorSpread}%,
			${secondColor} ${secondColorSpread}%
		)`;

		dispatch(
			setStyle({
				backgroundImage: bgImage,
			})
		);
	}, [
		dispatch,
		radial,
		firstColor,
		secondColor,
		firstColorSpread,
		secondColorSpread,
		angle,
	]);

	return (
		<>
			<Controls
				onReset={reset}
				fallback='background-image: linear-gradient(0deg, rgb(242, 242, 242) 0%, rgb(220, 19, 76) 100%);'
				title='Linear gradient'
			>
				<Field title='Use radial gradient'>
					<Checkbox
						onChange={(e) => setRadial(e.target.checked)}
						checked={radial}
						style={{ margin: '0 auto' }}
					/>
				</Field>
				<Field title='First color'>
					<ColorPicker
						onChange={(e) => setFirstColor(e.target.value)}
						value={firstColor}
					/>
				</Field>
				<Field title='Second color'>
					<ColorPicker
						onChange={(e) => setSecondColor(e.target.value)}
						value={secondColor}
					/>
				</Field>
				{!radial && (
					<Field title='Angle'>
						<Range
							onChange={(e) => setAngle(parseInt(e.target.value))}
							value={angle}
							min={0}
							max={360}
						/>
					</Field>
				)}
				<Field title="First color's spread">
					<Range
						onChange={(e) => setFirstColorSpread(parseInt(e.target.value))}
						value={firstColorSpread}
						min={0}
						max={100}
					/>
				</Field>
				<Field title="Second color's spread">
					<Range
						onChange={(e) => setSecondColorSpread(parseInt(e.target.value))}
						value={secondColorSpread}
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

export default LinearGradient;

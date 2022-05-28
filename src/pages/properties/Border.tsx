import { FC, useEffect, useState } from 'react';
import Controls from '../../components/Controls';
import Field from '../../components/ui/layout/Field';
import Range from '../../components/ui/fields/Range';
import ColorPicker from '../../components/ui/fields/ColorPicker';
import Select, { SelectOption } from '../../components/ui/fields/Select';
import Line from '../../components/ui/layout/Line';
import Result from '../../components/Result';
import { useDispatch } from 'react-redux';
import { setStyle } from '../../store/slices/blockSlice';

const options: SelectOption[] = [
	{ value: 'dotted', label: 'Dotted' },
	{ value: 'dashed', label: 'Dashed' },
	{ value: 'solid', label: 'Solid' },
	{ value: 'double', label: 'Double' },
	{ value: 'groove', label: 'Groove' },
	{ value: 'ridge', label: 'Ridge' },
	{ value: 'inset', label: 'Inset' },
	{ value: 'outset', label: 'Outset' },
];

const Border: FC = () => {
	const [width, setWidth] = useState<number>(0);
	const [type, setType] = useState<string>('solid');
	const [color, setColor] = useState<string>('#f2f2f2');

	const dispatch = useDispatch();

	const reset = () => {
		setWidth(0);
		setType('solid');
		setColor('#f2f2f2');
	};

	useEffect(() => {
		const border = `${width}px ${type} ${color}`;
		dispatch(setStyle({ border }));
	}, [dispatch, width, type, color]);

	return (
		<>
			<Controls
				onReset={reset}
				fallback='border: 0px solid rgb(242, 242, 242);'
				title='Border'
			>
				<Field title='Border width'>
					<Range
						onChange={(e) => setWidth(parseInt(e.target.value))}
						value={width}
						min={0}
						max={150}
					/>
				</Field>
				<Field title='Border type'>
					<Select
						onChange={(e) => setType(e.target.value)}
						selected={type}
						options={options}
					/>
				</Field>
				<Field title='Color'>
					<ColorPicker
						onChange={(e) => setColor(e.target.value)}
						value={color}
					/>
				</Field>
			</Controls>
			<Line />
			<Result />
		</>
	);
};

export default Border;

import Properties from '../components/Properties';
import Info from '../components/Info';
import { FC } from 'react';
import Line from '../components/ui/layout/Line';

const Home: FC = () => {
	return (
		<>
			<Properties />
			<Line />
			<Info />
		</>
	);
};

export default Home;

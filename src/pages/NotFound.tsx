import { FC } from 'react';
import { Link } from 'react-router-dom';
import Info from '../components/Info';
import Button from '../components/ui/fields/Button';
import Line from '../components/ui/layout/Line';
import Section from '../components/ui/layout/Section';

const NotFound: FC = () => {
	return (
		<>
			<Section title='Please notice'>
				<p>We're not copying CSSMatic.com</p>
				<Link to='/'>
					<Button style={{ margin: '5rem auto 0 auto' }}>Return</Button>
				</Link>
			</Section>
			<Line />
			<Info />
		</>
	);
};

export default NotFound;

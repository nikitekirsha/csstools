import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import Main from './components/ui/layout/Main';
import routes from './routes/routes';

const App: FC = () => {
	const view = useRoutes(routes);
	return <Main title='CSS Tools'>{view}</Main>;
};

export default App;

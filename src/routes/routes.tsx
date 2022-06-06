import { RouteObject } from 'react-router-dom';

import Home from '../pages/Home';
import LinearGradient from '../pages/properties/LinearGradient';
import BoxShadow from '../pages/properties/BoxShadow';
import BorderRadius from '../pages/properties/BorderRadius';
import Border from '../pages/properties/Border';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},

	/* == properties == */

	{
		path: '/linear-gradient',
		element: <LinearGradient />,
	},
	{
		path: '/box-shadow',
		element: <BoxShadow />,
	},
	{
		path: '/border-radius',
		element: <BorderRadius />,
	},
	{
		path: '/border',
		element: <Border />,
	},

	/* == end properties == */

	{
		path: '*',
		element: <NotFound />,
	},
];

export default routes;

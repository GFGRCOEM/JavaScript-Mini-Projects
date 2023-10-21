import ReactDOM from 'react-dom/client';
import './index.css';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Pokemon } from './pages/Pokemon';
import { getPokemonByNum } from '#lib';
import App from './App';
import { NotFound404 } from './pages/404';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				element: <App />,
			},
			{
				path: ':num',
				loader: async ({ params }) => {
					const pkmn = await getPokemonByNum(
						Number(params.num)
					);
					return { pokemon: pkmn };
				},
				element: <Pokemon />,
				errorElement: <NotFound404 />,
			},
		],
	},
]);

ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
).render(<RouterProvider router={router} />);

import type { Pokemon } from '@favware/graphql-pokemon';
import { useEffect, useState } from 'react';
import { NavBar } from '../components/Navbar';
import { Pane2 } from '../components/Pane2';
import { getPokemonByNum } from '#lib';
export function Home() {
	const [panes, setPanes] = useState<Pokemon[]>([]);

	const today = new Date().getDate();
	const month = new Date().getMonth();

	const numbers = [
		...new Set([
			today,
			today + 10,
			month + today + 50,
			today + 43,
			today + month,
			month + today * 5,
			today - month + 450,
			month + today + 5,
			today + 740,
		]),
	];

	useEffect(() => {
		const set = async () => {
			setPanes(await Promise.all(numbers.map((num) => getPokemonByNum(num))));
		};
		set();
	}, []);

	return (
		<div className="flex h-full w-full flex-col items-center">
			<NavBar />
			<img src="assets/joy.png" alt="Nurse Joy" className="joy" />
			<div className="bubble">
				Welcome to the Pokédex, here you will find information on different kinds of Pokémon.
			</div>
			<div className="flex flex-wrap justify-center gap-10">
				{...panes.map((p) => <Pane2 pokemon={p} />)}
			</div>
		</div>
	);
}

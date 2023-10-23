import { Pokemon } from '@favware/graphql-pokemon';
import { Icon } from './Icon';
import { Link } from 'react-router-dom';
// https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.num}.svg
export function Pane2({ pokemon }: IPane) {
	if (!pokemon) return <div></div>;
	const icons = pokemon.types.map((r) => (
		<Icon type={r.name.toLowerCase()} />
	));
	return (
		<Link to={`/${pokemon.num}`}>
			<div
				className="pane relative m-1 flex h-40 w-[min(26rem,90vw)] cursor-pointer items-center justify-between rounded-2xl bg-gray-100 shadow-[0_0_10px_rgb(99,99,99)] hover:shadow-[0_0_15px_rgb(80,80,80)]"
				style={{
					border: `2px solid ${pokemon.color.toLowerCase()}`,
					background: 'transparent',
				}}
			>
				<div className="flex w-2/5 items-center justify-center">
					<strong className="translate-x-5 translate-y-4 text-2xl capitalize">
						{pokemon.species}
					</strong>
				</div>
				<div className="icons absolute left-2 top-2 flex w-fit gap-1">
					{...icons}
				</div>
				<img
					src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.num
						.toString()
						.padStart(3, '0')}.png`}
					alt={pokemon.species}
					className="pkmn h-[110%] w-3/5 object-contain"
				/>
			</div>
		</Link>
	);
}

interface IPane {
	pokemon: Pokemon;
}

// TODO delete this file
import { Pokemon } from '@favware/graphql-pokemon';
import { Pill } from './Pill';
// https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.num}.svg
export function Pane({ pokemon }: IPane) {
	if (!pokemon) return <div></div>;
	const pills = pokemon.types.map((r) => <Pill type={r.name.toLowerCase()} />);

	return (
		<div
			className="m-5 flex h-40 w-[min(26rem,90vw)] cursor-pointer items-center justify-between rounded-2xl bg-gray-100 shadow-[0_0_10px_rgb(99,99,99)] hover:shadow-[0_0_15px_rgb(80,80,80)]"
			style={{
				border: `2px solid ${pokemon.color.toLowerCase()}`,
			}}
		>
			<div className="flex w-2/5 flex-col-reverse items-center justify-center gap-7">
				<strong className="text-2xl capitalize">{pokemon.species}</strong>
				<div className="info-pills">{...pills}</div>
			</div>
			<img
				src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.num
					.toString()
					.padStart(3, '0')}.png`}
				alt={pokemon.species}
				className="h-[110%] w-3/5 object-contain"
			/>
		</div>
	);
}

interface IPane {
	pokemon: Pokemon;
}

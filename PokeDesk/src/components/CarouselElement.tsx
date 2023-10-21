import type { Pokemon } from '@favware/graphql-pokemon';
import { Link } from 'react-router-dom';

export function CarouselElement(props: CarouselElementProps) {
	if (!props.active) return null;
	return (
		<div className="flex translate-y-4 flex-col justify-center">
			<Link to={`/${props.pokemon.num}`} className="flex justify-center">
				<img
					src={props.pokemon.sprite}
					alt={props.pokemon.species}
					className="object-scale-down object-bottom"
				/>
			</Link>
			<p className="flex justify-center text-xl capitalize">{props.pokemon.species}</p>
			{/* <span>{props.pokemon.evolutionLevel}</span> */}
		</div>
	);
}

interface CarouselElementProps {
	pokemon: Pokemon;
	active?: boolean;
}

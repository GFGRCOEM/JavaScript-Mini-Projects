export function Pill({ type }: IPill) {
	return (
		<div
			style={{
				background: (TypeColor as Record<string, string>)[
					type
				],
				paddingInline: '1rem',
				borderRadius: '1rem',
				textAlign: 'center',
				textTransform: 'capitalize',
				color: 'white',
				margin: '6px',
			}}
		>
			{type}
		</div>
	);
}

interface IPill {
	type: string;
}

const TypeColor = {
	normal: '#A8A77A',
	fire: '#FF911F',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

import { GraphQLPokemonResponse } from '#types';
import type { MovesEnum } from '@favware/graphql-pokemon';

export async function getMove(move: MovesEnum) {
	const res = await fetch('https://graphqlpokemon.favware.tech/v7', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `query ($move: MovesEnum!) {
					getMove(move: $move) {
					  key
					  accuracy
					  basePower
					  bulbapediaPage
					  category
					  contestType
					  desc
					  isFieldMove
					  isGMax
					  isNonstandard
					  isZ
					  maxMovePower
					  name
					  pp
					  priority
					  serebiiPage
					  shortDesc
					  smogonPage
					  target
					  type
					  zMovePower
					}
				  }`,
			variables: { move },
		}),
	});

	const json = await (res.json() as Promise<GraphQLPokemonResponse<'getMove'>>);
	return json.data.getMove;
}

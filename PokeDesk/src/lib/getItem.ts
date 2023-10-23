import { GraphQLPokemonResponse } from '#types';
import type { ItemsEnum } from '@favware/graphql-pokemon';

export async function getItem(item: ItemsEnum) {
	const res = await fetch('https://graphqlpokemon.favware.tech/v7', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `query ($item: ItemsEnum!) {
					getItem(item: $item) {
					  key
					  bulbapediaPage
					  desc
					  generationIntroduced
					  isNonstandard
					  name
					  serebiiPage
					  shortDesc
					  smogonPage
					  sprite
					}
				  }
				  `,
			variables: { item },
		}),
	});
	const json = await (res.json() as Promise<GraphQLPokemonResponse<'getItem'>>);
	return json.data.getItem;
}

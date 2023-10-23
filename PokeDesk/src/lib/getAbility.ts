import { GraphQLPokemonResponse } from '#types';
import type { AbilitiesEnum } from '@favware/graphql-pokemon';

export async function getAbility(ability: AbilitiesEnum) {
	const res = await fetch('https://graphqlpokemon.favware.tech/v7', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `query getAbility($ability: AbilitiesEnum!) {
					getAbility(ability: $ability) {
					  key
					  desc
					  shortDesc
					  name
					  isFieldAbility
					  bulbapediaPage
					  serebiiPage
					  smogonPage
					}
				  }`,
			variables: { ability },
		}),
	});
	const json = await (res.json() as Promise<GraphQLPokemonResponse<'getAbility'>>);
	return json.data.getAbility;
}

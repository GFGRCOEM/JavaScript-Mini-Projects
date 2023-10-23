import { GraphQLPokemonResponse } from '#types';
import type { PokemonEnum } from '@favware/graphql-pokemon';

export async function getPokemon(pokemon: PokemonEnum) {
	const res = await fetch('https://graphqlpokemon.favware.tech/v7', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `fragment flavors on Flavor {
					game
					flavor
				  }

				  fragment ability on Ability {
					name
				  }

				  fragment abilities on Abilities {
					first {
					  ...ability
					}
					second {
					  ...ability
					}
					hidden {
					  ...ability
					}
					special {
					  ...ability
					}
				  }

				  fragment stats on Stats {
					hp
					attack
					defense
					specialattack
					specialdefense
					speed
				  }

				  fragment evYields on EvYields {
					hp
					attack
					defense
					specialattack
					specialdefense
					speed
				  }

				  fragment genders on Gender {
					male
					female
				  }

				  fragment effectiveness on TypeEffectiveness {
					doubleEffectiveTypes
					doubleResistedTypes
					effectiveTypes
					effectlessTypes
					normalTypes
					resistedTypes
				  }

				  fragment pokemon on Pokemon {
					key
					num
					species
					types {
					  name
					  matchup {
						  attacking {
							...effectiveness
						  }
						  defending {
							...effectiveness
						  }
					  }
					}
					evYields {
					  ...evYields
					}
					abilities {
					  ...abilities
					}
					baseStats {
					  ...stats
					}
					gender {
					  ...genders
					}
					baseStatsTotal
					color
					eggGroups
					evolutionLevel
					height
					weight
					otherFormes
					cosmeticFormes
					sprite
					shinySprite
					backSprite
					shinyBackSprite
					smogonTier
					bulbapediaPage
					serebiiPage
					smogonPage
					isEggObtainable
					minimumHatchTime
					maximumHatchTime
					levellingRate
					catchRate {
					  base
					  percentageWithOrdinaryPokeballAtFullHealth
					}
					flavorTexts {
					  ...flavors
					}
				  }

				  fragment evolutionsData on Pokemon {
					key
					species
					evolutionLevel
				  }

				  fragment evolutions on Pokemon {
					evolutions {
					  ...evolutionsData
					  evolutions {
						...evolutionsData
					  }
					}
					preevolutions {
					  ...evolutionsData
					  preevolutions {
						...evolutionsData
					  }
					}
				  }

				  query GetPokemon($pokemon: PokemonEnum!) {
					getPokemon(pokemon: $pokemon, takeFlavorTexts: 2) {
					  ...pokemon
					  ...evolutions
					}
				  }`,
			variables: { pokemon },
		}),
	});

	if (!res) return null;

	const response = await (res.json() as Promise<GraphQLPokemonResponse<'getPokemon'>>);
	return response.data.getPokemon;
}

import { GraphQLPokemonResponse } from '@/types';

export async function getAllPokemon() {
	const res = await fetch(`https://graphqlpokemon.favware.tech/v7`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `query (
				$offset: Int
				$take: Int
				$reverse: Boolean
				$offsetFlavorTexts: Int
				$takeFlavorTexts: Int
				$reverseFlavorTexts: Boolean
			  ) {
				getAllPokemon(
				  offset: $offset
				  take: $take
				  reverse: $reverse
				  offsetFlavorTexts: $offsetFlavorTexts
				  takeFlavorTexts: $takeFlavorTexts
				  reverseFlavorTexts: $reverseFlavorTexts
				) {
				  key
				  backSprite
				  baseForme
				  baseSpecies
				  baseStats {
					attack
					defense
					hp
					specialattack
					specialdefense
					speed
				  }
				  baseStatsTotal
				  bulbapediaPage
				  catchRate {
					base
					percentageWithOrdinaryPokeballAtFullHealth
				  }
				  color
				  cosmeticFormes
				  eggGroups
				  evolutionLevel
				  evolutions {
					key
					backSprite
					baseForme
					baseSpecies
					baseStatsTotal
					bulbapediaPage
					color
					cosmeticFormes
					eggGroups
					evolutionLevel
					forme
					formeLetter
					height
					isEggObtainable
					levellingRate
					maximumHatchTime
					minimumHatchTime
					num
					otherFormes
					serebiiPage
					shinyBackSprite
					shinySprite
					smogonPage
					smogonTier
					species
					sprite
					weight
					mythical
					legendary
				  }
				  evYields {
					attack
					defense
					hp
					specialattack
					specialdefense
					speed
				  }
				  flavorTexts {
					flavor
					game
				  }
				  forme
				  formeLetter
				  gender {
					female
					male
				  }
				  height
				  isEggObtainable
				  levellingRate
				  maximumHatchTime
				  minimumHatchTime
				  num
				  otherFormes
				  preevolutions {
					key
					backSprite
					baseForme
					baseSpecies
					baseStatsTotal
					bulbapediaPage
					color
					cosmeticFormes
					eggGroups
					evolutionLevel
					forme
					formeLetter
					height
					isEggObtainable
					levellingRate
					maximumHatchTime
					minimumHatchTime
					num
					otherFormes
					serebiiPage
					shinyBackSprite
					shinySprite
					smogonPage
					smogonTier
					species
					sprite
					weight
					mythical
					legendary
				  }
				  serebiiPage
				  shinyBackSprite
				  shinySprite
				  smogonPage
				  smogonTier
				  species
				  sprite
				  types {
					name
				  }
				  weight
				  mythical
				  legendary
				}
			  }
			  `,
			variables: {
				offset: 89,
				take: 100,
				takeFlavorTexts: 1,
			},
		}),
	});

	const response = await (res.json() as Promise<GraphQLPokemonResponse<'getAllPokemon'>>);
	return response.data.getAllPokemon;
}

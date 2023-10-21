import { GraphQLPokemonResponse } from '#types';
import { Pokemon } from '@favware/graphql-pokemon';

export async function getPokemonByNum(number: number): Promise<Pokemon> {
	const res = await fetch('https://graphqlpokemon.favware.tech/v7', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `query (
					$offsetFlavorTexts: Int
					$takeFlavorTexts: Int
					$reverseFlavorTexts: Boolean
					$number: Int!
				  ) {
					getPokemonByDexNumber(
					  offsetFlavorTexts: $offsetFlavorTexts
					  takeFlavorTexts: $takeFlavorTexts
					  reverseFlavorTexts: $reverseFlavorTexts
					  number: $number
					) {
					  key
					  abilities {
						first {
						  key
						  bulbapediaPage
						  desc
						  isFieldAbility
						  name
						  serebiiPage
						  shortDesc
						  smogonPage
						}
						hidden {
						  key
						  bulbapediaPage
						  desc
						  isFieldAbility
						  name
						  serebiiPage
						  shortDesc
						  smogonPage
						}
						second {
						  key
						  bulbapediaPage
						  desc
						  isFieldAbility
						  name
						  serebiiPage
						  shortDesc
						  smogonPage
						}
						special {
						  key
						  bulbapediaPage
						  desc
						  isFieldAbility
						  name
						  serebiiPage
						  shortDesc
						  smogonPage
						}
					  }
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
					}
				  }
				  `,
			variables: { number },
		}),
	});

	// if (!res) return null;

	const response = await (res.json() as Promise<GraphQLPokemonResponse<'getPokemonByDexNumber'>>);
	return response.data.getPokemonByDexNumber;
}

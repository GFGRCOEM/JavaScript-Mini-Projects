import type { Query } from '@favware/graphql-pokemon';

export interface GraphQLPokemonResponse<
	K extends keyof Omit<Query, '__typename'>
> {
	data: Record<K, Omit<Query[K], '__typename'>>;
}

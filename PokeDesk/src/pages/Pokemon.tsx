import { useLoaderData } from 'react-router-dom';
import type { Pokemon } from '@favware/graphql-pokemon';
import { GenderBar } from '@/components/GenderBar';
import { Back } from '@/components/Back';
import { StatsBlock } from '@/components/StatsBlock';
import { Carousel } from '@/components/Carousel';

export function Pokemon() {
	const { pokemon } = useLoaderData() as LoaderData;

	const evolutions = {
		evolutions: [
			...(pokemon.evolutions?.filter((p) => !p.baseSpecies) ?? []),
			...(pokemon.evolutions
				?.map((p) => p.evolutions)
				.flat()
				.filter((p) => !p?.baseSpecies) ?? []),
		].filter(Boolean) as Pokemon[],
		preevolutions: [
			...(pokemon.preevolutions
				?.map((p) => p.preevolutions)
				.flat()
				.filter((p) => !p?.baseSpecies) ?? []),
			...(pokemon.preevolutions?.filter((p) => !p.baseSpecies) ?? []),
		].filter(Boolean) as Pokemon[],
		this: pokemon,
	};

	return (
		<div className="flex w-full flex-row items-center justify-center gap-4 max-md:flex-col max-md:gap-10 max-md:py-[100px]">
			<Back />
			<div className="flex w-2/5 items-center justify-around max-md:w-4/5">
				<GenderBar {...pokemon.gender} />
				<div className="flex flex-col items-center">
					<img
						src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${pokemon.num
							.toString()
							.padStart(3, '0')}.png`}
						alt={pokemon.species}
						className="h-[min(70vw,70vh)] object-contain"
					/>
					<h1 className="text-3xl capitalize">{pokemon.species}</h1>
				</div>
			</div>
			<div className="flex w-[45rem] flex-wrap items-center justify-center gap-10 max-md:w-[90vw]">
				<StatsBlock stats={pokemon.baseStats} />
				<Carousel {...evolutions} />
			</div>
		</div>
	);
}

interface LoaderData {
	pokemon: Pokemon;
}

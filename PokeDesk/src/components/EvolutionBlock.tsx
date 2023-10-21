import type { Maybe, Pokemon } from '@favware/graphql-pokemon';
import { Link } from 'react-router-dom';

export function EvolutionBlock(props: IEvolutionBlockProps) {
	return (
		<div className="flex h-[250px] min-w-[min(24rem,80vw)] max-w-[min(30rem,90vw)] flex-col items-center justify-around overflow-hidden rounded-md border-2 border-blue-400 px-4">
			<h2 className="pt-4 text-3xl font-medium">Evolutionary Line</h2>
			<div className="flex flex-row flex-wrap items-baseline justify-evenly gap-10 px-4 pb-2">
				{props.preevolutions?.map((prevo, index) => (
					<div key={index} className="flex flex-col justify-center">
						<Link to={`/${prevo.num}`} className="flex justify-center">
							<img
								src={prevo.sprite}
								alt={prevo.species}
								className="object-scale-down object-bottom"
							/>
						</Link>
						<p className="flex justify-center text-xl capitalize">{prevo.species}</p>
					</div>
				))}
				<div className="flex flex-col justify-center">
					<img
						src={props.this.sprite}
						alt={props.this.species}
						className="object-scale-down object-bottom"
					/>
					<p className="flex justify-center text-xl capitalize">{props.this.species}</p>
				</div>
				{props.evolutions?.map((evo, index) => (
					<div key={index} className="flex flex-col justify-center">
						<Link to={`/${evo.num}`} className="flex justify-center">
							<img src={evo.sprite} alt={evo.species} className="object-scale-down object-bottom" />
						</Link>
						<p className="flex justify-center text-xl capitalize">{evo.species}</p>
					</div>
				))}
			</div>
		</div>
	);
}

interface IEvolutionBlockProps {
	evolutions: Maybe<readonly Pokemon[]> | undefined;
	preevolutions: Maybe<readonly Pokemon[]> | undefined;
	this: Pokemon;
}

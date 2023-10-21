import type { Maybe, Pokemon } from '@favware/graphql-pokemon';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CarouselElement } from './CarouselElement';
import { useRef, useState, useEffect } from 'react';

export function Carousel(props: CarouselProps) {
	const leftRef = useRef<HTMLButtonElement>(null);
	const rightRef = useRef<HTMLButtonElement>(null);
	const orderedPokemons = [...(props.preevolutions ?? []), props.this, ...(props.evolutions ?? [])];
	const currentPokemon = orderedPokemons.indexOf(props.this);
	const time = 5000;

	const [active, setActive] = useState(currentPokemon);
	const [loop, setLoop] = useState<NodeJS.Timer | null>(null);

	const left = () => {
		setActive((prev) => {
			if (prev === 0) {
				return orderedPokemons.length - 1;
			}
			return prev - 1;
		});
	};

	const right = () => {
		setActive((prev) => {
			if (prev === orderedPokemons.length - 1) {
				return 0;
			}
			return prev + 1;
		});
	};

	const keyfn = (e: KeyboardEvent) => {
		e.key === 'ArrowLeft' ? left() : e.key === 'ArrowRight' ? right() : null;
	};

	useEffect(() => {
		document.addEventListener('keydown', (e) => keyfn(e));
		setLoop(setInterval(right, time));
		return () => {
			document.removeEventListener('keydown', (e) => keyfn(e));
		};
	}, []);

	useEffect(() => {
		setActive(currentPokemon);
	}, [window.location.pathname]);

	return (
		<div className="relative flex h-[250px] min-w-[min(18rem,80vw)] max-w-[min(30rem,90vw)] flex-col items-center justify-center overflow-hidden rounded-md px-4 shadow-lg shadow-zinc-300 drop-shadow">
			<h2 className="absolute top-0 pt-1 text-3xl font-medium">Evolutions</h2>
			<div className="flex w-full items-center justify-center">
				<Button
					ref={leftRef}
					onClick={() => {
						left();
						setLoop(setInterval(right, time));
					}}
					variant="ghost"
					size="icon"
					className="absolute left-0 top-0 h-full after:absolute after:inset-0 after:bg-[linear-gradient(270deg,white_80%,rgba(0,0,0,.2))] after:opacity-0 after:transition-opacity after:duration-200 after:hover:opacity-90"
				>
					<ChevronLeft className="z-10 h-4 w-4" />
				</Button>
				{props.preevolutions?.map((prevo, index) => (
					<CarouselElement
						key={index}
						pokemon={prevo}
						active={active === orderedPokemons.indexOf(prevo)}
					/>
				))}
				<CarouselElement pokemon={props.this} active={active === currentPokemon} />
				{props.evolutions?.map((evo, index) => (
					<CarouselElement
						key={index}
						pokemon={evo}
						active={active === orderedPokemons.indexOf(evo)}
					/>
				))}
				<Button
					ref={rightRef}
					onClick={() => {
						right();
						setLoop(setInterval(right, time));
					}}
					variant="ghost"
					size="icon"
					className="absolute right-0 top-0 h-full after:absolute after:inset-0 after:bg-[linear-gradient(90deg,white_80%,rgba(0,0,0,.2))] after:opacity-0 after:transition-opacity after:duration-200 after:hover:opacity-90"
				>
					<ChevronRight className="z-10 h-4 w-4" />
				</Button>
			</div>
		</div>
	);
}

interface CarouselProps {
	evolutions: Maybe<readonly Pokemon[]> | undefined;
	preevolutions: Maybe<readonly Pokemon[]> | undefined;
	this: Pokemon;
}

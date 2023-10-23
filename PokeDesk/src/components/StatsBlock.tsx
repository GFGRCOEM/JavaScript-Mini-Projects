import type { Stats } from '@favware/graphql-pokemon';
import { Bar } from './Bar';
import { useEffect } from 'react';

export function StatsBlock({ stats }: StatsBlockProps) {
	const color: Record<string, string> = {
		attack: '#f5ac78',
		defense: '#fae078',
		specialattack: '#9db7f5',
		specialdefense: '#a7db8d',
		speed: '#fa92b2',
		hp: '#c6c6e7',
	};

	useEffect(() => {
		const bars: NodeListOf<HTMLDivElement> = document.querySelectorAll('.animate-fill-right');
		bars.forEach((bar) => {
			bar.classList.remove('animate-fill-right');
			void bar.offsetWidth;
			bar.classList.add('animate-fill-right');
		});
	}, [stats]);

	return (
		<div className="flex h-[250px] min-w-[min(18rem,80vw)] max-w-[min(20rem,90vw)] flex-col items-center justify-around rounded-md px-4 shadow-lg shadow-zinc-300 drop-shadow">
			<h2 className="pb-2 text-3xl font-medium">Base Stats</h2>
			{Object.entries(stats).map(([key, value]) => {
				return <Bar key={key} color={color[key]} stat={value} name={key} />;
			})}
		</div>
	);
}

interface StatsBlockProps {
	stats: Stats;
}

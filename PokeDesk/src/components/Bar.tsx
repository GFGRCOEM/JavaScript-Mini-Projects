export function Bar({ stat, color, name }: BarProps) {
	const mapped: Record<string, string> = {
		attack: 'Atk',
		defense: 'Def',
		specialattack: 'SpA',
		specialdefense: 'SpD',
		speed: 'Spe',
		hp: 'HP',
	};

	return (
		<div className="flex w-48 items-center justify-end gap-4">
			<span className="font-mono text-sm uppercase">{mapped[name]}</span>
			<div className="relative my-2 flex h-4 w-36 items-center rounded-full bg-gray-200 shadow-md">
				<div
					className="h-full rounded-lg animate-fill-right"
					style={{
						backgroundColor: color,
						width: `${stat * 100 / 255}%`,
					}}
				></div>
				<div className="absolute flex w-full items-center justify-center text-gray-600">{stat}</div>
			</div>
		</div>
	);
}

interface BarProps {
	stat: number;
	color: string;
	name: string;
}

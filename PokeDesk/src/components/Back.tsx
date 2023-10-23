import { Link, useNavigate } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useEffect } from 'react';

export function Back() {
	const navigate = useNavigate();

	const handleKey = (key: KeyboardEvent) => {
		if (key.key === 'b') {
			navigate('/');
		}
	};

	useEffect(() => {
		window.addEventListener('keypress', handleKey);
		return () => {
			window.removeEventListener('keypress', handleKey);
		};
	}, []);

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Link
						to="/"
						className="absolute left-10 top-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
					>
						<svg className="h-6 w-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M10.707 3.293a1 1 0 010 1.414L7.414 9H15a1 1 0 110 2H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
					</Link>
				</TooltipTrigger>
				<TooltipContent className='bg-gray-100'>
					<p>BACK</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

import { Link } from 'react-router-dom';

export function NotFound404() {
	return (
		<>
			<div className="relative flex h-screen w-screen flex-col items-center justify-center gap-10 bg-red-500">
				<h1 className="absolute top-0 h-screen -translate-y-10 overflow-hidden text-[min(80vh,50vw)] text-red-950 [text-shadow:4px_4px_4px_rgb(180,0,0)]">
					404
				</h1>
				<img
					src="assets/teamRocket.svg"
					alt="Team Rocket"
					width={500}
					className="z-10"
				/>
				<h2 className="z-10 max-w-max translate-y-4 justify-center text-center text-3xl font-bold tracking-wider text-white">
					<span className="text-yellow-300">
						Team Rocket
					</span>{' '}
					has won this time.
				</h2>
				<Link
					to={'/'}
					className="z-10 flex h-12 w-40 cursor-pointer items-center justify-center rounded-[0.4rem] bg-yellow-400 text-center shadow-[inset_0px_-5px_0px_rgba(0,0,0,0.18)]"
				>
					Return
				</Link>
			</div>
		</>
	);
}

export function Icon({ type }: IIcon) {
	return (
		<div className={`icon ${type}`} data-type={type}>
			<img src={`assets/icons/${type}.svg`} alt={type} />
		</div>
	);
}

interface IIcon {
	type: string;
}

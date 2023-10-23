import type { Pokemon } from '@favware/graphql-pokemon';
import { useEffect, useState } from 'react';
import { AutoComplete, type Option } from '@/components/autocomplete';
import { getFuzzyPokemon } from '@/lib/getFuzzyPokemon';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
	const [inputValue, setInputValue] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [options, setOptions] = useState<Option[]>([]);
	const [value, setValue] = useState<Option>();
	const redirect = useNavigate();

	useEffect(() => {
		if (inputValue && inputValue.length < 3) return;
		const set = async () => {
			const pkmns = await getFuzzyPokemon(inputValue || 'dragonite');
			setOptions(pkmns.map((pkmn) => ({ value: pkmn.num.toString(), label: pkmn.species })));
			setLoading(false);
		};
		set();
	}, [inputValue]);

	useEffect(() => {
		if (!value) return;
		redirect(`/${value.value}`);
	}, [value]);

	return (
		<AutoComplete
			inputValue={inputValue}
			setInputValue={setInputValue}
			isLoading={loading}
			emptyMessage="No Pokemon found"
			placeholder="Search"
			options={options}
			value={value}
			onValueChange={setValue}
		/>
	);
}

import { ChangeEvent, useState } from 'react';

export function useFormInput(initialValue = '') {
	const [value, setValue] = useState(initialValue);

	const onChange = (e: ChangeEvent<HTMLInputElement> | string) => {
		const newValue = typeof e === 'string' ? e : e.target.value;
        setValue(newValue);
	};

	return { value, onChange};
}



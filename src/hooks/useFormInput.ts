import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { updateUserProperties } from '../store/matchingSlice';

export function useFormInput(initialValue = '', type?: string) {
	const [value, setValue] = useState(initialValue);
	const dispatch = useAppDispatch();

	const onChange = (e: ChangeEvent<HTMLInputElement> | string) => {
		const newValue = typeof e === 'string' ? e : e.target.value;
        setValue(newValue);
		if (type){
			dispatch(updateUserProperties([type, newValue]));
		}
	};

	return { value, onChange};
}



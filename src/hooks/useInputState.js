import { useState } from 'react';

export default initialValue => {
    const [value, setValue] = useState(initialValue);
    const valueChange = evt => {
        setValue(evt.target.value);
    };
    const valueClear = () => {
        setValue('');
    };
    return [value, valueChange, valueClear];
};
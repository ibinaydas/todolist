import { useState } from 'react';

const useToggleState = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const toggleValue = () => {
        setValue(!value);
    };
    return [value, toggleValue];
};

export default useToggleState;
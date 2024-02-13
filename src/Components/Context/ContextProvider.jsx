import React, { Children, useState } from 'react';

import myContext from './MyContext';

const ContextProvider = () => {
    const [name, setName] = useState('Khushi');

    return (
        <myContext.Provider value={{ name, setName }}>
            { Children }
        </myContext.Provider>
    )
}

export default ContextProvider;
import React from 'react';

export const DEFAULT_LANG = 'uk';

const context = React.createContext(null);

export const Provider = ({children}) => {
    return (
        <context.Provider value={React.useState(DEFAULT_LANG)}>
            {children}
        </context.Provider>
    );
};

export const useLanguageState = () => React.useContext(context);
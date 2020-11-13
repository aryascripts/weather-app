import React, { createContext, useState } from "react";
import {City} from './interfaces';


interface ISearchContext {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;

    result: City | undefined;
    setResult: React.Dispatch<React.SetStateAction<City | undefined>>;
}
const SearchContext = createContext<ISearchContext | undefined>(undefined);

const SearchProvider: React.FC = props => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [result, setResult] = useState<City | undefined>();
    
    const value = {
        searchTerm, setSearchTerm,
        result, setResult
    };

    return <SearchContext.Provider value={value}>
        {props.children}
    </SearchContext.Provider>
}

export {SearchProvider, SearchContext};
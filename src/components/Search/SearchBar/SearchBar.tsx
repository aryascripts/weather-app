import React, { useContext, useEffect, useState } from 'react';
import useData from '../../../apis/hooks/useData';
import { Environment } from '../../../config/Environment';
import { SearchContext } from '../../../stores/SearchContext';
import './SearchBar.scss';

interface SearchBarProps {
    handleSearchUpdate: (zip: string) => void
};

const numbersOnly = new RegExp('^[0-9]+$');

export function SearchBar(props: SearchBarProps) {

    const searchContext = useContext(SearchContext);
    const validateAndSave = (event: any) => {
        const val = event.target.value;
        if (!val) searchContext?.setSearchTerm('')
        if (val.length < 6 && numbersOnly.test(val)) {
            searchContext?.setSearchTerm(val);
        }
    };

    useEffect(() => {
        if (searchContext?.searchTerm.length === 5) {
            props.handleSearchUpdate(searchContext?.searchTerm);
        }

        else {
            props.handleSearchUpdate('');
        }
    }, [searchContext?.searchTerm]);

    return (
        <input className="search-bar"
            value={searchContext?.searchTerm}
            onChange={validateAndSave} />
    )
}
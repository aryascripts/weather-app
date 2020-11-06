import React, { useEffect, useState } from 'react';
import useData from '../../../apis/hooks/useData';
import { Environment } from '../../../config/Environment';
import './SearchBar.scss';

interface SearchBarProps {
    handleSearchUpdate: (zip: string) => void
};

const numbersOnly = new RegExp('^[0-9]+$');

export function SearchBar(props: SearchBarProps) {

    const [searchTerm, setSearchTerm] = useState<string>('')
    const validateAndSave = (event: any) => {
        const val = event.target.value;
        if (!val) setSearchTerm('')
        if (val.length < 6 && numbersOnly.test(val)) {
            setSearchTerm(val);
        }
    };

    useEffect(() => {
        if (searchTerm.length === 5) {
            props.handleSearchUpdate(searchTerm);
        }

        else {
            props.handleSearchUpdate('');
        }
    }, [searchTerm]);

    return (
        <input className="search-bar"
            value={searchTerm}
            onChange={validateAndSave} />
    )
}
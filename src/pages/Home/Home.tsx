import React, { useEffect, useState } from 'react';
import {SearchBar} from './../../components/Search/SearchBar/SearchBar';
import Title from '../../components/Title/Title';
import { USERNAME_KEY } from '../../config/Variables';
import './Home.scss';

export interface HomeProps {};

export default function (props: HomeProps) {

    const fromLocalStorage: string = localStorage.getItem(USERNAME_KEY) || '';
    const [userName, setUsername] = useState<string>(fromLocalStorage);

    useEffect(() => {
        localStorage.setItem(USERNAME_KEY, userName);
    }, [userName])

    return (
        <div className="home-page">
            <div className="max800 center column">
            <Title 
                setUsername={setUsername} 
                userName={userName}/>

            <SearchBar />
            </div>
        </div>
    )
};

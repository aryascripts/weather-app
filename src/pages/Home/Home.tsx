import React from 'react';
import Title from '../../components/Title/Title';
import './Home.scss';

export interface HomeProps {};

export default function (props: HomeProps) {
    return (
        <div className="home-page">
            <Title userName={'AmanScripts'}/>
        </div>
    )
};

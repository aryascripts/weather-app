import React from 'react';
import './Title.scss';

export interface TitleProps {
    userName: string;
}

export default function(props: TitleProps) {

    return (
        <div className="title">
            <h1>hello _________</h1>
        </div>
    )
}
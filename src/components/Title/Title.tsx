import React from 'react';
import './Title.scss';

export interface TitleProps {
    userName: string;
    setUsername: (val: string) => void;
}

export default function(props: TitleProps) {

    const handleOnUsernameChange = (event: any) => {
        props.setUsername(event.target.value);
    }

    return (
        <div className="title">
            <h1>hello</h1>
            <input className="input-username"
                onChange={handleOnUsernameChange}
                value={props.userName}
                type="text" />
        </div>
    )
}
import React from 'react';
import './SearchResult.scss';

export interface WeatherData {
    name: string; // city name
    high: number;
    low: number;
    current: number;
}

interface HLProps {
    high: number;
    low: number;
    vertical?: boolean;
}

export const HighLow: React.FC<HLProps> = (props: HLProps) => {

    return (
        <div className="high-low">
            <div className="item low">
                <div className="arrow-down"></div>
                {props.low.toFixed(0)}
            </div>
            <div className="item high">
                <div className="arrow-up"></div>
                {props.high.toFixed(0)}
            </div>
        </div>
    )
}

interface Props {
    data: WeatherData | undefined;
}
export const SearchResult: React.FC<Props> = (props: Props) => {

    return (props.data ? (
        <div className="search-result">
            <div className="name-details">
                <div className="city-name">
                    {props.data?.name}
                </div>
                <HighLow high={+props.data.high}
                    low={props.data.low} />
            </div>
            <div className="current">
                {props.data.current.toFixed(0)}
            </div>
        </div>
    ) : null);
}
import React from "react";
import { City } from "../../../stores/interfaces";
import "./SearchResult.scss";

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
  );
};

interface Props {
  data: City | undefined;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export const SearchResult: React.FC<Props> = (props: Props) => {
  return props.data ? (
    <div onClick={props.onClick} className="search-result pointer">
      <div className="name-details">
        <div className="city-name">{props.data?.name}</div>
        <HighLow
          high={+props.data?.weather?.high}
          low={+props.data?.weather?.low}
        />
      </div>
      <div className="current">{props.data?.weather?.current?.toFixed(0)}</div>
    </div>
  ) : null;
};

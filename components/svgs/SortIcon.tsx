import React from "react";

interface Props {
    fill?: string;
    width?: string;
    height?: string;
    stroke?: string;
    strokeWidth?: string;
}

const SortIcon: React.FC<Props> = ({
    fill = "#8A8A8E",
    width = "12px",
    height = "12px",
    stroke = "#8A8A8E",
    strokeWidth = "0.00024000000000000003",
}) => {
    return (
        <svg
            fill={fill}
            width={width}
            height={height}
            viewBox="0 0 24.00 24.00"
            xmlns="http://www.w3.org/2000/svg"
            stroke={stroke}
            strokeWidth={strokeWidth}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <path d="M16.29,14.29,12,18.59l-4.29-4.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,1.42,0l5-5a1,1,0,0,0-1.42-1.42ZM7.71,9.71,12,5.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-5-5a1,1,0,0,0-1.42,0l-5,5A1,1,0,0,0,7.71,9.71Z" />
            </g>
        </svg>
    );
};

export default SortIcon;

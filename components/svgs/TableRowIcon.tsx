import React from 'react';

interface Props {
    width?: string;
    height?: string;
    className?: string;
}

const TableRowIcon: React.FC<Props> = ({ width = '24', height = '24', className }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg">
            <title>table-row</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none"/>
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                    <path d="M42,4H6A2,2,0,0,0,4,6V42a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V6A2,2,0,0,0,42,4ZM40,8v8H8V8Zm0,12v8H8V20ZM8,40V32H40v8Z"/>
                </g>
            </g>
        </svg>
    );
};

export default TableRowIcon;

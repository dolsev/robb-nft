import { FC } from 'react';

interface Props {
    color: string;
    width: number;
    height: number;
}

const MoonIcon: FC<Props> = ({ color, width, height }) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <g id="Environment / Moon">
                    <path
                        id="Vector"
                        d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </g>
            </g>
        </svg>
    );
};

export default MoonIcon;

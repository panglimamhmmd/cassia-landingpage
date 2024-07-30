import { SvgIconProps } from '../types';

export const SvgIcon = ({ src, width, height, onclick }: SvgIconProps) => (
    <img
        src={`/img/svg/${src}`}
        alt={src}
        width={width}
        height={height}
        onClick={onclick}
    />
);

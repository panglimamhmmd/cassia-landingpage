import { SvgIconProps } from '../types';

export const SvgIcon = ({
    src,
    width,
    height,
    onclick,
    opacity,
}: SvgIconProps) => (
    <img
        src={`/img/svg/${src}`}
        alt={src}
        width={width}
        height={height}
        onClick={onclick}
        style={{ opacity: opacity }} // Adjust the opacity value between 0 (completely transparent) and 1 (fully opaque)
    />
);

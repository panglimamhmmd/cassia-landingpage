import { SvgIconProps } from '../types';

import { ImageWrapper } from './styles';

export const SvgIcon = ({ src, width, height, onclick }: SvgIconProps) => (
    <ImageWrapper
        src={`/img/svg/${src}`}
        alt={src}
        width={width}
        height={height}
        onClick={onclick}
    />
);

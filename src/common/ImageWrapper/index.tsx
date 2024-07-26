import { SvgIconProps } from '../types';

import { ImageWrapper } from './styles';

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
    <ImageWrapper
        src={`/img/svg/${src}`}
        alt={src}
        width={width}
        height={height}
    />
);

import { DecorationProps } from '../types';

import { ImageWrapper } from './styles';

export const Decoration = ({
    src,
    width,
    height,
    top,
    bottom,
    left,
    right,
    rotate,
    zindex,
}: DecorationProps) => (
    <ImageWrapper
        src={`/img/svg/${src}`}
        alt={src}
        width={width}
        height={height}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
        rotate={rotate}
        zindex={zindex}
    />
);

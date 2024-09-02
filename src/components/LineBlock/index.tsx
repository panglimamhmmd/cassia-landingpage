import { SvgIcon } from '../../common/SvgIcon';
import { LineBlocks } from './styles';
import { LineBlockProps } from '../../common/types';

const LineBlock = ({ id }: LineBlockProps) => {
    return (
        <LineBlocks id={id}>
            <SvgIcon
                src={'logobiru2.png'}
                width="auto"
                height="80%"
                opacity="0.6"
            />
        </LineBlocks>
    );
};

export default LineBlock;

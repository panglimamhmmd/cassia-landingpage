import { StyledContainer } from './styles';
import { ContainerProps } from '../types';

const SecondContainer = ({ border, children, bgColor }: ContainerProps) => (
    <StyledContainer bgColor={bgColor} border={border}>
        {children}
    </StyledContainer>
);

export default SecondContainer;

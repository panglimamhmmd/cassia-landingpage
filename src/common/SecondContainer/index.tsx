import { StyledContainer } from './styles';
import { ContainerProps } from '../types';

const SecondContainer = ({ border, children, bgColor }: ContainerProps) => (
    <StyledContainer border={border}>{children}</StyledContainer>
);

export default SecondContainer;

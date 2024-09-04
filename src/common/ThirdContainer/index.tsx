import { StyledContainer } from './styles';
import { ContainerProps } from '../types';

const ThirdContainer = ({ border, children, bgColor }: ContainerProps) => (
    <StyledContainer border={border}>{children}</StyledContainer>
);

export default ThirdContainer;

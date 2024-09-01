import { StyledContainer } from './styles';
import { ContainerProps } from '../types';

const SecondContainer = ({ border, children }: ContainerProps) => (
    <StyledContainer border={border}>{children}</StyledContainer>
);

export default SecondContainer;

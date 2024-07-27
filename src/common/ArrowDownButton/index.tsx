import { StyledButton } from './styles';
import { ButtonProps } from '../types';

export const Button = ({
    type = 'button',
    color,
    children,
    onClick,
}: ButtonProps) => (
    <StyledButton type={type} color={color} onClick={onClick}>
        {children}
    </StyledButton>
);

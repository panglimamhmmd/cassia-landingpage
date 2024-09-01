import styled from "styled-components";

export const ImageWrapper = styled.img<{ top?: string, bottom?: string, left?: string, right?: string  ,width ?: string, rotate?: string , zindex?:string}>`
  position: absolute;
  top: ${props => props.top || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  transform: rotate(${props => props.rotate || '0deg'});
  z-index: ${props => props.zindex || '0'};
  @media (max-width: 1024px) {
    width: ${props => props.width || '100%' };
  }
 
`;
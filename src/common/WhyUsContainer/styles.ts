import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
  bgColor?: string;
}>`
  background-image:  url('/img/svg/bluetexture.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    background-position: top;

  position: relative;
  width: 100%;
  width: 100vw;
  padding: 0;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};   
`;

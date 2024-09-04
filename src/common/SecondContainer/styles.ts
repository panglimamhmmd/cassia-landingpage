import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
  bgColor?: string;
}>`
  background-color: ${ (p) => (p.bgColor ? p.bgColor : "") };
  background-image:  ${ (p) => (p.bgColor === "white" ? "url(/img/svg/whitetexture.jpg)" : "") };
  background-image:  ${ (p) => (p.bgColor === "bg" ? "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/img/svg/bluetexture.png)" : "") };
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};   
`;

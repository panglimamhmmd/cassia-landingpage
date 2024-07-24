import styled from "styled-components";

export const ScrollUpContainer = styled("div")<{
  show: boolean;
}>`
  // padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 75px;
  z-index: 10;
  cursor: pointer;
  background: #40C351;
  text-align: center;
  align-items: center;
  border-radius: 100px;
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

 
`;

import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
  position: absolute;
  bottom: -8rem;
  @media screen and (max-width: 400px) {
      bottom: -4rem;
  }
  background-color: rgba(255, 0, 0, 0); 
  color: ${(p) => (p.color ? "rgba(255, 0, 0, 0)" : "rgba(255, 0, 0, 0)")};
  width: 100%;
  height: 35px;
  border: 1px solid #edf3f5;
  border-radius: 100px;
  cursor: pointer;
  max-width: 35px;
  transition: all 0.3s ease-in-out;
  // box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #edf3f5;
    background-color: #2e186a;
    animation: none; /* Disable animation on hover */
  }

  @keyframes bgcolorchange {
    0% {
      background-color: rgba(255, 0, 0, 0);
    }
    50% {
      background-color: #2e186a;
    }
    100% {
      background-color: rgba(255, 0, 0, 0);
    }
  }

  -webkit-animation: bgcolorchange 4s infinite;
  animation: 4s infinite bgcolorchange;
`;

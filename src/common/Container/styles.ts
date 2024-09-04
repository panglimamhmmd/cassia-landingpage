import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
}>`

  background-color: #fff;
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};


   
`;

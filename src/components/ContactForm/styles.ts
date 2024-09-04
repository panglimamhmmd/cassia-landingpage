import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 2rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
     @media only screen and (max-width: 414px) {
        max-width: 100%;
        padding-left: 18px;
        padding-right: 18px;
    }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }

  h6{
    font-size: 14px;
    color: grey;
    text-align: right;
    
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;
  width: 100%;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

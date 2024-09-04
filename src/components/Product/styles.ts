import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section") <{background?: string}>`
  background-color : ${(p) => p.background || ""};
  position: relative;
  padding: 2rem 0 2rem; 
  border-bottom: 1px solid #e6e6e6;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
     @media only screen and (max-width: 414px) {
        max-width: 100%;
        padding-left: 18px;
        padding-right: 18px;
    }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
 text-align: justify;
  // text-justify: inter-word;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 414px) {
    padding-top: 1rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding:  0;
  // text-transform: uppercase;
  color: #000;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;


export const BoldText = styled('p')`
  font-weight: bold;
  color: black;
`

export const SizeTitle = styled('span')`
  font-size: 20px;
  margin: 0;
  padding: 0;
`
export const ContentContainer = styled("div")`
  max-width: 100%;
  text-align: center;
  padding: 0 ;
  background-color: rgba(0, 0, 0, 0);

  `

  export const DetailContainer = styled("div")`
  max-width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  background-color: rgba(0, 0, 0, 0);
  &:hover   {
    cursor: pointer;
    transform: translate3d(0px, -4px, 0px);
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
    border: 0px solid #fff;
    opacity: 1;
    box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
    backdrop-filter: blur(5px);
  }
  `
  export const ModalContainer = styled("div")`
  max-width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  background-color: rgba(0, 0, 0, 0);

  p {
    margin-top: 10px;
    color: red;
    font-size: 15px;
  }

  input {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #000;
  }

  h6{
  text-align: left;
    margin-top: 16px;
    font-size: 15px;
    color: grey;
  }

  `
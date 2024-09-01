import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  // padding: 10rem 0 8rem;
  
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 2rem;
  }
   @media only screen and (max-width: 414px) {
        max-width: 100%;
     
        padding-top: 0rem;
    }
    
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
 
  text-align: justify;
  text-justify: inter-word;
}
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  padding: 7rem 0 7rem;
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 414px) {
    padding-top: 4rem;
       padding-left: 18px;
        padding-right: 18px;
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
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
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


export const BorderRadius = styled("div")`
  // border-radius: 1rem;
  overflow: hidden;
  
`
export const LineBlock = styled('div')`
    height: 100px;
    background-color: #dbe2ef;
    display: flex;
    justify-content: center; /* Horizontally center the content */
    align-items: center; /* Vertically center the content */
`;
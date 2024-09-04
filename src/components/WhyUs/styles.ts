import { Row  , Col} from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  @media only screen and (max-width: 414px) {
    padding: 0rem 18px;
  }

  padding: 4rem 0;

`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  // max-width: 540px;
  
  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 20px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
`;

export const MinPara = styled("p")`
font-color: black;
  font-size: 13px;
   color: grey;
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


export const ImageContainer = styled("div")`
margin-bottom: 1rem;
`

export const ImageText = styled("div")`

`


export const ContentContainer = styled("div")`
  max-width: 100%;
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0);
    


  :hover {
    cursor: pointer;
    border-radius: 15px;
    border: 0px solid #fff;
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
    opacity: 1;
    box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
    backdrop-filter: blur(5px);
  }

`

export const Title = styled("h6")`
  max-width: 100%;
  text-align: center;
  text-align: center;
  margin: 0
`

export const Title2 = styled("h6")`
font-size: 30px;
  max-width: 100%;
  text-align: center;
  text-align: center;
`
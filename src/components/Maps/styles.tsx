import styled from 'styled-components';

export const MiddleBlockSection = styled('section')`
    position: relative;
    padding: 4rem 2rem 2rem;
    text-align: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        padding: 5.5rem 0 3rem;
    }
    @media only screen and (max-width: 414px) {
        max-width: 100%;
        padding-left: 18px;
        padding-right: 18px;
        padding-bottom: 2rem;
    }
`;

export const MapsContainer = styled('div')`
    border: 0px;
    @media only screen and (max-width: 414px) {
        height: 300px;
        max-width: 100%;
        padding-left: 18px;
        padding-right: 18px;
    }
`;

export const Content = styled('p')`
    padding: 0.75rem 0 0.75rem;
    text-align: justify;
    text-justify: inter-word;
`;

export const ContentWrapper = styled('div')`
    @media only screen and (max-width: 414px) {
        max-width: 100%;
        padding-left: 18px;
        padding-right: 18px;
    }
`;

export const ContentContainer = styled('div')`
    max-width: 100%;
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0);

    &:hover {
        cursor: pointer;
        border-radius: 15px;
        border: 0px solid #fff;
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        opacity: 1;
        box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
        backdrop-filter: blur(5px);
    }
`;

export const ImageContainer = styled('div')`
    margin-bottom: 1rem;
`;

export const MinTitle = styled('h6')`
    font-size: 20px;
    line-height: 1rem;
    padding: 0.5rem 0;
    text-transform: uppercase;
    color: #000;
`;

export const MinPara = styled('p')`
    font-color: black;
    font-size: 13px;
    color: grey;
`;

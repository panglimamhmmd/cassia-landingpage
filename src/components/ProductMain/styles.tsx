import styled from 'styled-components';

export const MiddleBlockSection = styled('section')`
    background-image: url('/img/svg/shiny.svg';)
    position: relative;
     padding: 4rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
    background-color: #DBE2EF;

    @media screen and (max-width: 1024px) {
        padding: 5.5rem 0 3rem;
    }
         @media only screen and (max-width: 414px) {
        max-width: 100%;
        padding-left: 18px;
        padding-right: 18px;
    }
`;

export const Content = styled('p')`
    padding: 0.75rem 0 0.75rem;
`;

export const MainContent = styled('p')`
    padding: 0.75rem 0 0.75rem;

    @media only screen and (max-width: 414px) {
        text-align: justify;
        text-justify: inter-word;
    }
`;

export const ContentWrapper = styled('div')`
    max-width: 100%;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Wrapper = styled('div')`
    position: relative;
    overflow: hidden;
    border: 0px;
    border-radius: 1rem;
`;

export const ImageWrapper = styled('img')`
    object-fit: cover;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        background-color: #000;
        opacity: 0.5;
    }
`;

export const ImageDetail = styled('div')`
    position: absolute;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100px;
    border-radius: 0 0 1rem 0;
`;

export const TextImageDetail = styled('p')`
    font-size: 20px;
    padding: 0;
    margin: 0;
    font-weight: bold;
    letter-spacing: 2px;
`;

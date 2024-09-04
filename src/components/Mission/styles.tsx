import styled from 'styled-components';

export const MiddleBlockSection = styled('section')`
    position: relative;
    // padding: 4rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        // padding: 5.5rem 0 3rem;
    }
    @media only screen and (max-width: 414px) {
        max-width: 100%;
        padding-left: 18px;
        padding-right: 18px;
    }
`;

export const Content = styled('p')`
    padding: 0.75rem 0 0.75rem;
    text-align: justify;
    text-justify: inter-word;
    font-size: 18px;
`;

export const ContentWrapper = styled('div')`
    max-width: 570px;
    text-align: left;
    padding: 2rem 0 2rem;

    @media only screen and (max-width: 414px) {
        padding: 2rem 0 0 0;
    }
`;

export const MinPara = styled('p')`
    font-size: 15px;
    text-transform: uppercase;
`;

export const Block = styled('div')`
    width: 100px;
    height: 10px;
    background-color: #18216d;
`;

import styled from 'styled-components';

export const MiddleBlockSection = styled('section')`
    position: relative;
    padding: 4rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
    background-color: #dbe2ef;

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
    text-align: justify;
    text-justify: inter-word;
`;

export const ContentWrapper = styled('div')`
    max-width: 570px;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

export const LineBlock = styled('div')`
    height: 20px;
    background-color: rgb(255, 130, 92);
`;

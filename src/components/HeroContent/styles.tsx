import styled from 'styled-components';

export const MiddleBlockSection = styled('section')`
    position: relative;
    padding: 7.5rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        padding: 5.5rem 0 3rem;
    }
`;

export const Title = styled('h6')`
    font-size: 13vh;
    padding: 0.75rem 0 0.75rem;
    color: white;
    letter-spacing: 7px;
    margin: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Content = styled('p')`
    color: white;
    font-size: 5vh;
`;

export const ContentWrapper = styled('div')`
    max-width: 570px;

    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
    margin-left: 20px;
    margin-right: 20px;
`;

import styled from 'styled-components';

export const MiddleBlockSection = styled('section')`
    position: relative;
    padding: 8rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1024px) {
        padding: 5.5rem 0 3rem;
    }

    // background-size: cover;
    // background-attachment: fixed;
`;

export const Title = styled('h6')`
    @media only screen and (max-width: 768px) {
        font-size: 12vh;
    }

    @font-face {
        font-family: 'ribka';
        src: url('/fonts/ribka.otf') format('autotype');
        font-style: normal;
    }
    font-size: 15vh;
    font-weight: bold;
    padding: 0.75rem 0 0.75rem;
    color: white;
    letter-spacing: 10px;
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
    background-image: url('/img/svg/cassia_logo_white.svg');
    background-position: center;
    background-repeat: no-repeat;
    max-width: 570px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

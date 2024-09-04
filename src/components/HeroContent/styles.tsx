import styled from 'styled-components';

export const MiddleBlockSection = styled('section')`
    position: relative;
    padding: 3rem 0 3rem;

    display: flex;
    justify-content: center;

    @media screen and (max-width: 414px) {
        padding: 5.5rem 0 3rem;
    }
`;

export const ImageWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Title = styled('h6')`
    @media only screen and (max-width: 768px) {
        font-size: 12vh;
    }

    // @font-face {
    //     font-family: 'ribka';
    //     src: url('/fonts/ribka.otf') format('autotype');
    //     font-style: normal;
    // }
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
    // background-image: url('/img/svg/cassia_logo_white.svg');
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

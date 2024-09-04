import styled from 'styled-components';

export const MiddleBlockSection = styled('section')`
    position: relative;
    padding: 4rem 0 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
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
    // text-transform: uppercase;
    font-weight: 500;
    font-size: 40px;
    font-family: 'TrajanPro-Bold', serif;
    cursor: pointer;
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
    padding: 0 18px;
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

        .img_decoration {
            opacity: 1;
        }
    }

    &:hover .hover-button {
        opacity: 1;
        visibility: visible;
    }
`;

export const HoverButton = styled('button')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ImageDetail = styled('div')`
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

export const SeeDetails = styled('div')`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const Title = styled('h6')`
    padding: 0.5rem 0;
    margin: 0;
`;

export const MinTitle = styled('h6')`
    font-size: 25px;
    padding: 0;
    margin: 0;
    padding-bottom: 2rem;
`;

export const Block = styled('div')`
    width: 150px;
    height: 3px;
    background-color: #18216d;
    position: relative;
    margin: 0 auto;

    margin-bottom: 3rem;
`;

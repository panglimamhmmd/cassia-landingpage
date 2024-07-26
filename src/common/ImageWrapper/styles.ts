import styled from "styled-components";

export const ImageWrapper = styled('img')`
    object-fit: cover;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
        background-color: #000;
        opacity: 0.5;
    }

`
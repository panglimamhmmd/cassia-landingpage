import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    :root {
        --dominant-color: #0b2f9f;
        --compliment-color: #aca9bb;
        --accent-color: ##484554;
    }
    @font-face {
        font-family: "Trajan Pro Bold";
        src: url("/fonts/TrajanPro-Bold.ttf") format("truetype");
        font-style: normal;
    }

    @font-face {
        font-family: "Trajan Pro Light";
        src: url("/fonts/TrajanPro-Regular.ttf") format("truetype");
        font-style: normal;
    }


    body,
    html,
    a {
        font-family: 'Trajan Pro Regular', sans-serif ;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        overflow-x: hidden;
        background-image: url("/img/svg/whitetexture.jpg");
    }

    a:hover {
        color: #18216d;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #2e186a 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Trajan Pro Bold',   serif;
        color: #18216d;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #18216d;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

     #heroContainerAndHeader {
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/img/svg/bgimage1.jpeg');
    height: 100vh;
    background-position: bottom ;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    ;
    }
`;
    
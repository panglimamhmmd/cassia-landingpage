import styled from 'styled-components';
import { Row } from 'antd';

export const LineBlocks = styled('div')`
    id: ${(props) => props.id};
    height: 100px;
    background-color: #dbe2ef;
    display: flex;
    justify-content: center; /* Horizontally center the content */
    align-items: center; /* Vertically center the content */
`;

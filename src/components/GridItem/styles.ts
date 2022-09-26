import styled from 'styled-components';

interface ContainerProps {
    showBackground: boolean;
}

interface IconProps {
    opacity?: number;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground ? '#1550ff' : '#CCCCCC'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
`;
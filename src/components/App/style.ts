import styled, { keyframes } from 'styled-components'


const AnimateBG = keyframes`
    0%{background-position: 0% 50%}
    50%{background-position: 100% 50%}
    100%{background-position: 0% 50%}
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-size: 400% 400%;
    background-image: linear-gradient(-45deg, #12c2e9, #c471ed, #f64f59);
    animation: ${AnimateBG} 30s ease infinite;
    justify-content: center;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #0000004f;
    }
`


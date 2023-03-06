import styled, { keyframes } from 'styled-components'

export const StyledDiv = styled.div`
    width: 580px;
    height: 370px;
    background-color: rgb(251, 251, 251);
    box-shadow: 0px 0px 11px 0px rgba(189,125,189,0.85);
    border-radius: 7px;
    border: 1px solid rgba(189,125,189,0.85);
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: 80% 20%;
    z-index: 1;
`

export const Item = styled.div`
    border-right: 1px solid rgb(183, 183, 183);

    &:last-child {
        border-right: none;
    }
`

export const Avatar = styled.div`
    grid-column: 1 / span 4;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid rgb(183, 183, 183);
    border-bottom: 1px solid rgb(183, 183, 183);
    box-shadow: rgb(199, 199, 199) -.5px 0px 1px 0px inset;
`

export const PhotoWrapper = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid rgb(183, 183, 183);
    box-shadow: 0px 0px 4px 0px rgba(189,125,189,0.85);
    overflow: hidden;
    margin-bottom: 15px;

    & img {
        width: 100%;
        height: 100%;
    }
`

export const Location = styled.span`
    font-weight: 500;
    font-size: 22px;
    text-align: center;

    & a {
        text-decoration: none;
        color: #18a7fd
    }
`

export const About = styled.div`
    grid-column: 5 / span 4;
    border-bottom: 1px solid rgb(183, 183, 183);
    box-shadow: rgb(199, 199, 199) .5px 0px 1px 0px inset;

    
`
import React from 'react'

import Icon from '../Icon/Icon'
import Avatar from '../Avatar/Avatar'
import About from '../About/About'

import { Redux, ReactLogo, Typescript, Javascript, Html5, Css3 } from '@styled-icons/simple-icons'

import { StyledDiv } from './style';

const Content = () => {
    return (
        <StyledDiv>
            <Avatar />
            <About />
            <Icon text={'JavaScript'} Icon={Javascript} size='40'/>
            <Icon text={'Typescript'} Icon={Typescript} size='40'/>
            <Icon text={'React'} Icon={ReactLogo} size='40'/>
            <Icon text={'Redux'} Icon={Redux} size='40'/>
            <Icon text={'HTML'} Icon={Html5} size='40'/>
            <Icon text={'CSS'} Icon={Css3} size='40'/>
        </StyledDiv>
    );
}

export default Content;
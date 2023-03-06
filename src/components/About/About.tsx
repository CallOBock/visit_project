import React from 'react'
import logo from '../../images/logo.jpg'

import { PhotoWrapper, Location } from '../Content/style';
import { StyledDiv } from './styled';

const About = () => {
    return (
        <StyledDiv>
            <PhotoWrapper>
                <img src={logo} alt="logo" />
            </PhotoWrapper>
            <Location>
                Front-end developer <a 
                    target="_blank"
                    rel="noreferrer" 
                    href='https://i-exam.ru/'
                >at&nbsp;Exma</a>
            </Location>
        </StyledDiv>
    );
}

export default About;
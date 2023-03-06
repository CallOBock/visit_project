import React from 'react'
import face from '../../images/face.jpg'

import { PhotoWrapper, Location } from '../Content/style';
import { StyledDiv } from './style';


const Avatar = () => {
    return (
        <StyledDiv>
            <PhotoWrapper>
                <img src={face} alt="ava" />
            </PhotoWrapper>
            <Location>
                Based in <a 
                    target="_blank" 
                    rel="noreferrer"
                    href='https://www.google.com/maps/place/%D0%99%D0%BE%D1%88%D0%BA%D0%B0%D1%80-%D0%9E%D0%BB%D0%B0,+%D0%A0%D0%B5%D1%81%D0%BF.+%D0%9C%D0%B0%D1%80%D0%B8%D0%B9+%D0%AD%D0%BB/@56.6351078,47.8297007,12z/data=!3m1!4b1!4m6!3m5!1s0x415994cee334e033:0xdaebce5764135883!8m2!3d56.6418021!4d47.889584!16zL20vMDJkdnA0'
                >Yoskar-Ola, Russia</a>
            </Location>
        </StyledDiv>
    );
}

export default Avatar;
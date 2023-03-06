import { Html5, Css3 } from '@styled-icons/boxicons-logos'
import React from 'react'
import {StyledIcon} from 'styled-icons/types'
import styled from 'styled-components';

const IconWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    text-align: center;
    height: 100%;
    color: #4d3e3e;
    font-weight: bold;
`

const Icon = ({text, Icon, size, title}: {text: string, Icon: StyledIcon, size?: string, title?: string}) => {
    return (
        <IconWrap>
            <div style={{marginBottom: '5px'}}>{text}</div>
            <div><Icon size={size ?? '48'} title={title ?? ''}/></div>
        </IconWrap>
    );
}

export default Icon;
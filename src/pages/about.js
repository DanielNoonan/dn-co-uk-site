import React from 'react';
import styled from 'styled-components';

import selfie from '../assets/images/selfie.jpg'
import groupSelfie from '../assets/images/group-selfie.jpg'

const AboutMe = () => (
    <TopImage>
        <img src={selfie} alt='Self Portrait' />
        <img src={groupSelfie} alt='Self Portrait' />
    </TopImage>
)

export default AboutMe;

const TopImage = styled.div`
    img {
        margin: 0;
        padding: 0;
        vertical-align: bottom;
    }
`
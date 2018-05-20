import React, { Component } from 'react'
import styled from 'styled-components';
import Link from 'gatsby-link'


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import sl01 from '../assets/images/sl-01.jpg';
import sl02 from '../assets/images/sl-02.jpg';
import sl03 from '../assets/images/sl-03.jpg';
import sl04 from '../assets/images/sl-04.jpg';
import sl05 from '../assets/images/sl-05.jpg';
import sl06 from '../assets/images/sl-06.jpg';
import sl07 from '../assets/images/sl-07.jpg';


export default class ImageSlider extends Component {

  render() {
    return (
      <SliderContainer>
        <Carousel autoPlay interval={4000} infiniteLoop transitionTime={0} showThumbs={false} width={`100%`} showArrows={false} showStatus={false} showIndicators={false} stopOnHover={false} >
          <ImageContainer>
            <img src={sl01} alt='Slider image' />
          </ImageContainer>
          <ImageContainer>
            <img src={sl02} alt='Slider image' />
          </ImageContainer>
          <ImageContainer>
            <img src={sl03} alt='Slider image' />
          </ImageContainer>
          <ImageContainer>
            <img src={sl04} alt='Slider image' />
          </ImageContainer>
          <ImageContainer>
            <img src={sl05} alt='Slider image' />
          </ImageContainer>
          <ImageContainer>
            <img src={sl06} alt='Slider image' />
          </ImageContainer>
          <ImageContainer>
            <img src={sl07} alt='Slider image' />
          </ImageContainer>
        </Carousel>
      </SliderContainer>
    )
  }
}

//Styled Components
const SliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

const ImageContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  max-height: 800px;
`
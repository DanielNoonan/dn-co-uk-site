import React from 'react';
import styled from 'styled-components';

import selfie from '../assets/images/selfie.jpg'
import groupSelfie from '../assets/images/group-selfie.jpg'

const AboutMe = () => (
    <div>
    <TopImage>
        <img src={selfie} alt='Self Portrait' />
        <TopTextBox>
            Born in 1970's Essex,
            <br></br>it was a musical month:
            <br></br><a href='https://www.youtube.com/watch?v=Qu_ozjAu_vM' target="_blank">Slade - Come On Feel The Noize</a> 
            <br></br>was number 1 in the charts.
            <br></br>A few days later...<br></br> Pink Floyd released
            <br></br> <a href='https://www.youtube.com/watch?v=I6H3JeKhoCQ' target='_blank' >'The Dark Side of The Moon'</a>
            <br></br>Still the 3rd biggest selling album of all time
            <br></br>and one of my favourites.
        </TopTextBox>
        <MiddleTextBox>
            Whimsical vs Serious
            <br></br>Wildly different 'flavours'
            <br></br>Both wildly popular.
        </MiddleTextBox>
        <BottomTextBox>
            And so it goes with personal taste.
            <br></br>We're all different...
        </BottomTextBox>
    </TopImage>
    <SecondImage>
        <img src={groupSelfie} alt='Self Portrait' />
    </SecondImage>
    <MainTextWrapper>
        <p>Like everyone, who has a few decades behind them, I've worn a number of different hats</p>
        <p>I completed a degree in Philosophy, (three years of confusion). It was the perfect preparation for a young mind venturing off into a world that made only dubious sense</p>
        <p>After University I sold advertising for the NME (New Musical Express) and Loaded Magazine.</p>
        <p>I then went on to work as a Recruitment Consultant in the same industry</p>
        <p>Then I turned one of my enduring passions into a job by getting a Motorcyle Instructor License whereby I taught people how to safely enjoy one of life's last bastions of freedom</p>
        <p>In the background I was slowly learning to fly, travelling from London to Southend Airport on the weekends to take lessons</p>
        <p>Then in 2003 I moved to New Zealand and worked in a Casino as a croupier dealing Blackjack, Roulette and Baccarat</p>
        <p>Inside the casino I learned how to count cards. Outside the casino I was studying hard for a Commercial Pilot License</p>
        <p>On completion of my license I spent the next 10 years working as a pilot, first as a Flying Instructor and then as a sightseeing pilot, flying light singles and twins.</p>
        <p>I had the great honour of flying tourists through some of the most spectacular terrain on the planet - Fiordland National Park - and to one of the most beautiful places in the world - Milford Sound.</p>
        <p>In August 2013, disaster struck and I was involved in a plane crash. Just me and one colleague on board. We both narrowly survived with a lot of broken bones.</p>
        <p>Some very clever people pieced me back together again gradually, with patience and lot of titanium</p>
        <p>I might not be the most gifted, smartest or best looking person in the room - but I'm usually the one with the highest scrap value!</p>
        <p>The crash left me with an inner ear condition (Superior Canal Dehiscence Syndrome). A hole in the bone of the inner ear, it's basically an 'invisible condition' that effects balance and produces some epic migraines.</p>
        <p>The bad news is, this meant I could nolonger meet the medical requirements for a Commercial Pilot License - so that was the last time I flew an airplane. Although I have taken to the skies in a paraglider a few times since, just to 'scratch the itch'. I still look to the skies...</p>
        <p>On the bright side, we live in an amazing world where science and medicine are working genuine miracles. There's a pill for just about everything these days...</p>
        <p>So the world is mostly upright... which is a good thing, particularly when you have 3 young daughters running rings around you.</p>
        <br></br>
        <br></br>
        <p>So, after a long rest & recovery, I've been spending my time on the two enduring interests that have stayed with me my whole life: 1)Photography. 2) Learning new things</p>
        <p>I've had a fascination with photography ever since I was a young boy, collecting antique bellows cameras and developing my own film as a teenager in the school dark room - how things have changed!</p>
        <p>We now live in an age where Photoshop is practically a household name and everyone is walking around with a capable camera in their pocket, courtesy of their mobile phone. It's hard to believe that such rapid technological progress could be witnessed in one lifetime.</p>
        <p>I'm excited to see where we're heading next and I'm sure that 3D / Virtual Reality, will be as common place and 'taken for granted' by our children as iPads and Smartphones are to our generation.</p>
        <br></br>
        <p>And what of learning new things?</p>
        <p>The last time I threw myself into a new 'learning project' was shortly before the crash. I completed a Teacher Training course in Vedic Maths</p>
        <p>Kenneth Williams, one of the worlds foremost vedic mathematicians hosted the course, live online</p>
        <p>I'd had a basic interest in Vedic Maths for a while, seduced by it's elegant simplicity, so when I discovered the Teacher Training by Kenneth Williams I jumped at the chance, ultimately coming away as a Certified Vedic Maths Teacher</p>
        <p>But what now...</p>
        <p>Well I do like staring at digits... and it is 2018... and everybody's doing it these days... or at least everybody's being told that they <em>should</em> be doing it these days... and I'm basically a geek</p>
        <p>...so I taught myself to code.</p>
        <p>Actually that's misleading... 'taught' is past tense and implies completion. There is no completion, not with coding, not that I can see. It's a vast changing universe of new things to learn that goes on, and on and on... but then I chose JavaScript as my main language. The JavaScript eco-system is so dynamic that even in the time I've been developing, the workflow has radically changed several times - always improving and increasing in P-O-W-E-R!</p>


    </MainTextWrapper>
    </div>
)

export default AboutMe;

const TopImage = styled.div`
    position: relative;
    text-align: center;
    color: white;

    img {
        margin: 0;
        padding: 0;
        vertical-align: bottom;
    }
`

const SecondImage = styled.div`
    position: relative;
    text-align: center;
    color: white;

    img {
        margin: 0;
        padding: 0;
        vertical-align: bottom;
    }
`

const TopTextBox = styled.div`
    border: 1px solid grey;
    padding: 5px;
    border-radius: 20px;
    position: absolute;
    top: 15%;
    right: 3%;

    a {
        color: white;
        &:hover {
            border-bottom: 5px solid white;
            text-decoration: none;
            }
    }
`

const MiddleTextBox = styled.div`
    border: 1px solid grey;
    padding: 5px;
    position: absolute;
    bottom: 40%;
    right: 5%;

    a {
        color: white;
        &:hover {
            border-bottom: 5px solid white;
            text-decoration: none;
            }
    }
`

const BottomTextBox = styled.div`
    border: 1px solid grey;
    padding: 5px;
    border-radius: 20px;    
    position: absolute;
    bottom: 20%;
    right: 10%;

    a {
        color: white;
        &:hover {
            border-bottom: 5px solid white;
            text-decoration: none;
            }
    }
`

const MainTextWrapper = styled.div`
    color: white;
    margin: 100px 0 0 0;

    p {
        margin: 0;
    }
`
import React from 'react';
import './About.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const About = () => {
    return (
    
    <div class="about-page">
        <Header />
        <h1 class="about__title">About this App</h1>
        <p class="about__paragraphs">
        <p>This app is not about making you go for a cervical screening before you are ready, but about helping you to take small steps, in your own time.  You may even decide that you don’t want to have a smear test at all.   You have the right to make this choice.</p>
        <p>Our app is all about helping you to be more compassionate towards yourself.</p>
        <p>Many people who have experienced sexual assault find the thought of going for a smear test very distressing. Receiving reminder letters in the post and being asked why you haven’t had a screening can make people feel ashamed, embarrassed and uncomfortable.  If you have felt this way, then please remember that it is not your fault – other people find this hard too.</p>
        
        <p>Everything about</p>
        <Link to="/">
        <p>privacy</p>
        </Link>
        
        <p>Readjust the</p><a href="" >text</a>
        </p>

        <Menu />
    </div>
    )
}

export default About;
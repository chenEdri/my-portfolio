import React, { Component } from "react";


import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

import { Jumbo } from "../cmps/Jumbo"

import { Project } from "../cmps/Projects";
import { Skill } from "../cmps/Skill";
import { Contact } from "../cmps/Contact";

const checkTop = (callback) => {
  window.addEventListener('scroll', (event) => {
    callback(window.scrollY >= 100);
  })
}


export class Home extends Component {

  state = {
    activeElement: '',
    isTop: false
  }

  componentDidMount() {
    checkTop((isBelowStart) => { if (this.state.isTop !== isBelowStart) this.setState({ isTop: isBelowStart }) });

    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  handleSetActive = (to) => {
    this.setState({ activeElement: to })
  }


  render() {
    return (
      <section className="home-container">
        <div className="main-header flex sb align-center">
          <div className="nav flex sb" >
            <Link
              className={this.state.activeElement === 'About' ? 'active-link' : ''}
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              delay={200}
              offset={-80}
              duration={500}
              onClick={()=>this.handleSetActive('About')}
              onSetActive={this.handleSetActive}>
              About
        </Link>
            <Link
              className={this.state.activeElement === 'Projects' ? 'active-link' : ''}
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              delay={200}
              offset={-80}
              duration={500}
              onClick={()=>this.handleSetActive('Projects')}
              onSetActive={this.handleSetActive}>
              Projects
        </Link>
            <Link
              className={this.state.activeElement === 'Skills' ? 'active-link' : ''}
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              delay={200}
              offset={-80}
              duration={500}
              onClick={()=>this.handleSetActive('Skills')}
              onSetActive={this.handleSetActive}
              >
              Skills
        </Link>
            <Link
              className={this.state.activeElement === 'Contact' ? 'active-link' : ''}
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              delay={200}
              offset={0}
              duration={500}
              onClick={()=>this.handleSetActive('Contact')}
              onSetActive={this.handleSetActive}
              >
              Contact
        </Link>
            {(this.state.isTop) ? <Link to="Top" className="top-link" onClick={this.scrollToTop}>
              Scroll To Top
        </Link> : ''}
          </div>
        </div>

        <Element name="About" className="element" >
          <Jumbo />
        </Element>
        <Element name="Projects" className="element" >
          <Project />
        </Element>
        <Element name="Skills" className="element" >
          <Skill />
        </Element>
        <Element name="Contact" className="element" >
          <Contact />
        </Element>
        <div>
        </div>
        {/* <Footer /> */}
      </section>
    );
  }
}


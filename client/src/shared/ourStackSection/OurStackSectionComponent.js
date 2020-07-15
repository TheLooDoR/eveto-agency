import React, { Component } from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Animate from "animate.css-react";
import 'animate.css/animate.css'
import anime from 'animejs/lib/anime.es'
import withSizes from "react-sizes";

import angularLogo from '../../assets/angular-desktop.png'
import phpLogo from '../../assets/php-desktop.png'
import jsLogo from '../../assets/js-desktop.png'
import angularMobileLogo from '../../assets/angular-mobile.png'
import phpMobileLogo from '../../assets/php-mobile.png'
import wordpressMobileLogo from '../../assets/wordpress-mobile.png'
import jsMobileLogo from '../../assets/js-mobile.png'
import joomlaMobileLogo from '../../assets/joomla-mobile.png'
import SectionTitle from "../sectionTitle/SectionTitle";


function randomValues() {
    anime({
        targets: '.our-stack--animated',
        translateX: function() {
            return anime.random(-10, 10);
        },
        translateY: function() {
            return anime.random(-10, 10);
        },
        easing: 'linear',
        duration: 2500,
        complete: randomValues
    });
}

randomValues();

class OurStackSectionComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


  creatingTabs(data) {
      if(!data) {
          return null;
      }
      return (
          <Tabs>
              <TabList>
                {data.map( (el, i) => <Tab key={i}>{el.label}</Tab> )}
              </TabList>
              {
                  data.map( (el, i) => {
                  return (
                      <TabPanel key={i}>
                          <Animate
                              appear="fadeIn" // on element Appear animation (onMount)
                              durationAppear={1000}
                              component="div"
                          >
                              <div className="tab-content">
                                  <div className="tab-content__title">
                                      {el.content_title}
                                  </div>
                                  <div className="tab-content__description" dangerouslySetInnerHTML={{__html: el.content_description}}>

                                  </div>
                              </div>
                          </Animate>

                      </TabPanel>
                  )}
              )}
          </Tabs>
      );
  }

  render() {
      if(!this.props.technologies) {
          return null
      }
      if (this.props.isTabletOrLess) {
          return (
              <div className='OurStackSection'>
                  <div className="container OurStackSection__wrap">
                      <SectionTitle className='OurStackSection__title'>Our Stack</SectionTitle>
                      <ul className="OurStackSection__stack our-stack">
                          <li className="our-stack__item"><img src={phpMobileLogo} alt="PHP"/></li>
                          <li className="our-stack__item"><img src={jsMobileLogo} alt="JavaScript"/></li>
                          <li className="our-stack__item"><img src={angularMobileLogo} alt="Angular"/></li>
                          <li className="our-stack__item"><img src={wordpressMobileLogo} alt="WordPress"/></li>
                          <li className="our-stack__item"><img src={joomlaMobileLogo} alt="Joomla"/></li>
                          <li className="our-stack__item"><img src={phpMobileLogo} alt="PHP"/></li>
                      </ul>
                  </div>
              </div>
          )
      }
      return (
          <div className='OurStackSection'>
              <div className='container OurStackSection__wrap'>

                  <div className="OurStackSection__tabs">
                      {this.creatingTabs(this.props.technologies)}
                  </div>
                  <ul className="OurStackSection__stack our-stack">
                          <li className='our-stack__item our-stack--animated'><img src={angularLogo} alt="" /></li>
                          <li className='our-stack__item our-stack--animated'><img src={phpLogo} alt="" /></li>
                          <li className='our-stack__item our-stack--animated'><img src={jsLogo} alt="" /></li>
                          <li className='our-stack__item our-stack--animated'><img src={phpLogo} alt="" /></li>
                          <li className='our-stack__item our-stack--animated'><img src={angularLogo} alt="" /></li>
                          <li className='our-stack__item our-stack--animated'><img src={jsLogo} alt="" /></li>
                          <li className='our-stack__item our-stack--animated'><img src={angularLogo} alt="" /></li>
                          <li className='our-stack__item our-stack--animated'><img src={phpLogo} alt="" /></li>
                  </ul>
              </div>
          </div>
      )
  }
}

const mapSizesToProps = ({width}) => ({
    isTabletOrLess: width < 1024
})

export default withSizes(mapSizesToProps)(OurStackSectionComponent)


import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import anime from "animejs";
import MainButton from "../../../shared/Buttons/MainButton/MainButton";



function animateBg() {
    anime({
        targets: '.row .rect',
        scale: [
            {value: .1, easing: 'easeOutSine', duration: 700},
            {value: 1, easing: 'easeInOutQuad', duration: 1400}
        ],
        delay: anime.stagger(400, {grid: [6, 6], from: 'center'}),
        complete: animateBg
    })
}

animateBg()

class MainSectionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
      if(!this.props) {
          return null;
      }
      this.setState({
        'slider' : {
            galleryItems: this.props.mainSection.slider.map((article, index) => (
                <div className="slider-content"  key={index}>
                    <div className="inner">
                        <img className='slider-content__image' src={article.image} alt={article.title}/>
                        <h1 className='slider-content__title'>{article.title}</h1>
                        <p className='slider-content__description'>{article.description}</p>
                    </div>
                </div>
            ))
          }
      })
  }

   

  responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  }

 
  onSlideChange(e) {
  }
 
  onSlideChanged(e) {
  }

  
  render() {
      if (!this.state.slider) {
          return null;
        }
      return (
        <div className="MainSection">
            <div className="container MainSection__wrap">
                <AliceCarousel
                    buttonsDisabled={true}
                    items={this.state.slider.galleryItems}
                    responsive={this.responsive}
                    autoPlayInterval={3000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={false}
                    mouseDragEnabled={true}
                    playButtonEnabled={false}
                    disableAutoPlayOnAction={true}
                    onSlideChange={this.onSlideChange}
                    onSlideChanged={this.onSlideChanged}
                />
                <MainButton btnClass='MainSection__contact-btn'>Contact us</MainButton>
                <div className="left-side-bg">
                    <div className="row">
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect"/>
                    </div>
                    <div className="row">
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect transparent"/>
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect transparent"/>
                    </div>
                    <div className="row">
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect transparent"/>
                        <div className="rect transparent"/>
                        <div className="rect"/>
                        <div className="rect"/>
                    </div>
                </div>
                <div className="right-side-bg">
                    <div className="row">
                        <div className="rect transparent"/>
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect transparent"/>
                        <div className="rect"/>
                        <div className="rect"/>
                    </div>
                    <div className="row">
                        <div className="rect transparent"/>
                        <div className="rect"/>
                        <div className="rect "/>
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect "/>
                    </div>
                    <div className="row">
                        <div className="rect"/>
                        <div className="rect"/>
                        <div className="rect "/>
                        <div className="rect transparent"/>
                        <div className="rect transparent"/>
                        <div className="rect transparent"/>
                    </div>
                </div>
            </div>
            </div>
      )
  }
}

export default MainSectionComponent;


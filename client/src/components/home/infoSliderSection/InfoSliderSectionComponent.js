import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

class InfoSliderSectionComponent extends Component {
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
            galleryItems: this.props.infoSliderSection.slides.map((article, index) => (
                <div className="slider-content" key={index}>
                    <div className="inner">
                        <p className={'slider-content__text'}>{article.info_text}</p>
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
      const sliderType = this.props.infoSliderSection.slider_position === 'left' ? 'row' : 'row-reverse'
      return (
        <div className="infoSliderSection"
             style={{
                 background: `url('${this.props.infoSliderSection.background_image}') no-repeat center center`,
                 backgroundSize: 'cover'
             }}
        >

            <div className={ `container slider-wrap ${sliderType}`}>
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
            </div>
        </div>
      )
  }
}

export default InfoSliderSectionComponent;

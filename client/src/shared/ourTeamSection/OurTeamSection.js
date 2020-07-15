import React, {Component} from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import MainButton from "../Buttons/MainButton/MainButton";

class OurTeamSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleOnDragStart = (e) => e.preventDefault()


    componentDidMount() {
        if(!this.props.ourTeamSection['team_list']) {
            return null
        }
        this.setState({
            sliderItems: this.props.ourTeamSection['team_list'].map((item, index) => (
                <div className={`staff__slider-content `} key={index} tabIndex={index}>
                    <img className='staff__img' src={item.photo} alt={item.name} onDragStart={this.handleOnDragStart}/>
                    <span className="staff__name">{item.name}</span>
                    <span className="staff__position">{item.position}</span>
                    <a href={item.linkedin} className="staff__linkedIn" target="_blank" rel="noopener noreferrer">in</a>
                </div>
            ))
        })
    }

    responsive = {
        0: {
            items: 3
        },
        1024: {
            items: 3
        }
    }

    render() {
        if (!this.state.sliderItems) {
            return null
        }
        return (
            <div
                className='OurTeamSection'
                style={{
                    background: `url(${this.props.ourTeamSection.background_image}) no-repeat center center`,
                    backgroundSize: 'cover'
                }}
            >
                <div className="container OurTeamSection__wrap">
                    <div className="OurTeamSection__staff staff">
                        <AliceCarousel
                            mouseTrackingEnabled
                            buttonsDisabled={true}
                            dotsDisabled={true}
                            items={this.state.sliderItems}
                            responsive={this.responsive}
                            autoPlayInterval={5000}
                            autoPlayDirection="rtl"
                            autoPlay={true}
                            fadeOutAnimation={false}
                            mouseDragEnabled={true}
                            playButtonEnabled={false}
                            disableAutoPlayOnAction={true}
                        />
                    </div>
                    <div className="OurTeamSection__description">
                        <SectionTitle className='OurTeamSection__title'>{this.props.ourTeamSection.title}</SectionTitle>
                        <div className="OurTeamSection__text" dangerouslySetInnerHTML={{__html: this.props.ourTeamSection.description}}/>
                        <MainButton btnClass='OurTeamSection__btn MainButton_white'>{this.props.ourTeamSection['read_more_link_text']}</MainButton>
                    </div>
                </div>
            </div>
        )
    }
}


export default OurTeamSection
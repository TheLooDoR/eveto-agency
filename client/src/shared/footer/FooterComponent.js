import React, {Component} from 'react'
import {Link} from "react-router-dom";
import withSizes from "react-sizes";

class FooterComponent extends Component {

    render() {
        const { menuItems } = this.props
        if( !menuItems) {
            return null
        }
        return (
            <div className='Footer'>
                    <div className="Footer__feedback-wrap">
                        <div className="container">
                            <div className="Footer__feedback footer-feedback">
                                <div className="footer-feedback__title-wrap">
                                    <h2 className="footer-feedback__title">Have a project?</h2>
                                    <p className="footer-feedback__subtitle">Let's discuss</p>
                                </div>
                                <div className="footer-feedback__contacts-wrap">
                                    <div className="footer-feedback__contact">
                                        <span className='footer-feedback__contact-title request-title'>Send request</span>
                                        <a href='#' className='footer-feedback__contact-value'>Click here</a>
                                    </div>
                                    <div className="footer-feedback__contact">
                                        <span className='footer-feedback__contact-title phone-title'>Call us</span>
                                        <span className='footer-feedback__contact-value'>+38 (066) 666-66-66</span>
                                    </div>
                                    <div className="footer-feedback__contact">
                                        <span className='footer-feedback__contact-title email-title'>Or send an email</span>
                                        <span className='footer-feedback__contact-value'>hey@eveto.agency</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {this.props.isTabletOrLess
                    ? <div className='Footer__wrap'>
                        <div className={'container'}>
                            <div className={'Footer__footer'}>
                                <div className="Footer__logo logo">
                                    <Link to={'/'} className={'logo__link'}>
                                        <div className="logo__img"/>
                                        <h3 className="logo__title">Eveto <br/> Agency</h3>
                                    </Link>
                                </div>
                                <span className="Footer__rights">Kharkiv, Ukraine © 2019</span>
                            </div>
                        </div>
                    </div>
                    : <div className="container">
                        <div className="Footer__footer">
                            <div className="Footer__logo logo">
                                <Link to={'/'} className={'logo__link'}>
                                    <div className="logo__img"/>
                                    <h3 className="logo__title">Eveto <br/> Agency</h3>
                                </Link>
                            </div>
                            <div className="Footer__menu menu">
                                <ul className="menu__list">
                                    {menuItems.map((el, i) => {
                                        if (el.title.toLowerCase() === 'home') {
                                            return <li key={i} className='menu__item'><Link to='/'>{el.title}</Link></li>
                                        }
                                        return <li key={i} className='menu__item'><Link to={el.title.replace(' ', '_').toLowerCase()}>{el.title}</Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <span className="Footer__rights">Kharkiv, Ukraine © 2019</span>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapSizesToProps = ({width}) => ({
    isTabletOrLess: width < 1024
})

export default withSizes(mapSizesToProps)(FooterComponent)
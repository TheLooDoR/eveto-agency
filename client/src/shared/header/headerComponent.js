import React, { Component } from 'react';
import StickyHeader from 'react-sticky-header';
import 'react-sticky-header/styles.css';
import {Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import withSizes from "react-sizes";
import MainButton from "../Buttons/MainButton/MainButton";



class HeaderComponent extends Component {

    renderHeader () {
        const { menuItems } = this.props
        if( !menuItems) {
            return (<h2>Loading...</h2>)
        }
        if (this.props.isTabletOrLess) {
            return (
                <div className='MainHeader__wrap'>
                    <Menu
                        right
                        customBurgerIcon={<div className='bm-custom-icon'>
                            <div className="bm-custom-icon-cross"/>
                            <div className="bm-custom-icon-cross"/>
                        </div>}
                        width={ '100%' }
                        disableAutoFocus
                        // isOpen={this.props.burgerMenuState}
                        // onStateChange={ this.menuHandler }
                    >
                        {menuItems.map((el, i) => {
                            if (el.title.toLowerCase() === 'home') {
                                return <li key={i} className='menu__item'><Link to='/'>{el.title}</Link></li>
                            }
                            return <li key={i} className='menu__item'><Link to={el.title.replace(' ', '_').toLowerCase()}>{el.title}</Link>
                            </li>
                        })}
                        <MainButton btnClass = 'bm-item menu__partners-btn' txtClass = 'main_color'>For Partners</MainButton>
                        <MainButton btnClass = 'bm-item menu__order-btn' txtClass ='white_color'>Order now</MainButton>
                    </Menu>
                    <div className={'container'}>
                        <div className={'MainHeader'}>
                            <div className="logo MainHeader__logo">
                                <Link to={'/'} className={'logo__link'}>
                                    <div className="logo__img"/>
                                    <h3 className="logo__title">Eveto <br/> Agency</h3>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className='MainHeader__wrap'>
                <div className={'container'}>
                    <div className={'MainHeader'}>
                        <div className="logo MainHeader__logo">
                            <Link to={'/'} className={'logo__link'}>
                                <div className="logo__img"/>
                                <h3 className="logo__title">Eveto <br/> Agency</h3>
                            </Link>
                        </div>
                        <div className="MainHeader__menu menu">
                            <ul className="menu__list">
                                {menuItems.map((el, i) => {
                                    if (el.title.toLowerCase() === 'home') {
                                        return <li key={i} className='menu__item'><Link to='/'>{el.title}</Link></li>
                                    }
                                    return <li key={i} className='menu__item'><Link to={el.title.replace(' ', '_').toLowerCase()}>{el.title}</Link>
                                    </li>
                                })}
                            </ul>
                            <MainButton btnClass = 'menu__partners-btn' txtClass = 'main_color'>For Partners</MainButton>
                            <MainButton btnClass = 'menu__order-btn'>Order now</MainButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <StickyHeader
                header ={
                    this.renderHeader()
                }
                headerOnly={true}
            />
        );

    }
}

const mapSizesToProps = ({width}) => ({
    isTabletOrLess: width < 1024
})

export default withSizes(mapSizesToProps)(HeaderComponent);

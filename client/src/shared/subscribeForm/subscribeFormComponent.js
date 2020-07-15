import React, { Component } from 'react';
import InputComponent from "../Input/InputComponent";
import MainButton from "../Buttons/MainButton/MainButton";

class SubscribeFormComponent extends Component {

    cls = ['SubscribeForm', this.props.className]

    render() {
        return(
            <form className={this.cls.join(' ')}>
                <h3 className="SubscribeForm__title">Subscribe to our newsletter</h3>
                <InputComponent placeholder='Your email' className='SubscribeForm__input'/>
                <MainButton btnClass='SubscribeForm__btn'>Subscribe (no spam)</MainButton>
            </form>
        );
    }
}

export default SubscribeFormComponent;

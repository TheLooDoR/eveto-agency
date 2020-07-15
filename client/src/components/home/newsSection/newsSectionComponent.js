import React, { Component } from 'react';
import {Link} from "react-router-dom";
import SubscribeFormComponent from "../../../shared/subscribeForm/subscribeFormComponent";
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";

class NewsSectionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    getCurrentPosts(posts) {
        return posts.map( (el, i) => {
            return(
                <div key={i} className="NewsSection__item news">
                    <img src={el.image} alt="news" className='news__img'/>
                    <Link className="post" to={'#'}>
                        <h3 className='news__title'>{el.title}</h3>
                    </Link>

                </div>
            )
        })
    }

    render() {
        if(!this.props.news) {
            return null;
        }
        return (
            <div className='NewsSection'>
                <div className="container">
                    <SectionTitle className='NewsSection__title'>{this.props.news.title}</SectionTitle>
                    <div className="NewsSection__content">
                        <div className="NewsSection__news-wrap">
                            {this.getCurrentPosts(this.props.news.current_posts)}
                        </div>
                        {this.props.news.subscribe_form_enable ? <SubscribeFormComponent className='NewsSection__form'/> : null }
                    </div>
                </div>
            </div>
        );

    }
}

export default NewsSectionComponent;

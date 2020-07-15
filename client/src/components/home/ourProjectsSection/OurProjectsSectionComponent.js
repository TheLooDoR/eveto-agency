import React, {Component} from 'react'
import SectionTitle from "../../../shared/sectionTitle/SectionTitle";
import MainButton from "../../../shared/Buttons/MainButton/MainButton";
import {Link} from "react-router-dom";
import withSizes from "react-sizes";


class OurProjectsSectionComponent extends Component {


    renderCategories (categories) {
        if (!categories) {
            return null
        }
        return (
            <ul className="OurProjectsSection__categories">
                {
                    categories.map( (el, index) => {
                        return (
                            <li className="OurProjectsSection__category" key={index}>
                                {el.name}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    renderProjectList (projects) {
        if (!projects) {
            return null
        }
        if (this.props.isMobile) {
            return (
                <div className='OurProjectsSection__projects-list'>
                    {
                        projects.slice(0, 4).map((el, index) => {
                            return (
                                <div
                                    className='OurProjectsSection__project project-mobile'
                                    key={index}
                                >
                                    <img className='project-mobile__img' src={el.image} alt={el.name}/>
                                    <ul className="project-mobile__categories">
                                        {this.props.categories.map((el, index) => {
                                            return (
                                                <li className="project-mobile__category" key={index}>{el.name}</li>
                                            )
                                        })}
                                    </ul>
                                    <span className="project-mobile__name"><a href="#">{el.title}</a></span>
                                    <p className='project-mobile__description'>{el.excerpt}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        return (
            <div className='OurProjectsSection__projects-list'>
                {
                    projects.slice(0, 4).map((el, index) => {
                        return (
                            <div
                                className='OurProjectsSection__project project'
                                key={index}
                                style={{
                                    background: `url(${el.image}) no-repeat top center`,
                                    backgroundSize: 'cover'
                                }}
                            >
                                <ul className="project__categories">
                                    {this.props.categories.map((el, index) => {
                                        return (
                                            <li className="project__category" key={index}>{el.name}</li>
                                        )
                                    })}
                                </ul>
                                <span className="project__name">{el.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        if(!this.props.projects) {
            return null
        }
        return (
            <div className='OurProjectsSection'>
                <div className="container">
                    <SectionTitle>
                        {this.props.ourProjectsSection.title}
                    </SectionTitle>
                    {this.props.isMobile ? null : this.renderCategories(this.props.categories)}
                    {this.renderProjectList(this.props.projects)}
                    <div className="OurProjectsSection__btn-wrap">
                        <Link to='/projects'>
                            <MainButton  btnClass='OurProjectsSection__btn'>
                                See More
                            </MainButton>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapSizesToProps =({width}) => ({
    isMobile: width < 768
})

export default withSizes(mapSizesToProps)(OurProjectsSectionComponent)


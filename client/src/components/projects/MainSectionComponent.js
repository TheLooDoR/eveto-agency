import React, {Component} from 'react'
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import InfiniteScroll from "react-infinite-scroll-component";
import withSizes from "react-sizes";


class MainSectionComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'all',
            items: 4,
            projects : this.props.projects.slice(0, 4),
            hasMore: true
        }
    }

    getMoreProjects = () => {
        if (this.props.projects.length === this.state.projects.length) {
            this.setState({
                hasMore: false
            })
        } else {
            const to = this.state.items + this.state.projects.length
            setTimeout(() => {
                this.setState({
                    projects: this.props.projects.slice(0, to)
                })
            }, 1000)
        }
    }

    handleTabChange = (activeTab) => {
        this.setState({
            activeTab
        })
    }


    renderCategories(categories) {
        if (!categories) {
            return null
        }
        if (this.props.isMobile) {
            return (
                <div className="projects-page__categories">
                    <select
                        id=""
                        onChange={(e) => this.handleTabChange(e.target.value.toLowerCase())}
                        value={this.state.activeTab}
                    >
                        {
                            categories.map((el, index) => {
                                return (
                                    <option
                                        className='projects-page__category'
                                        value={el.name.toLowerCase()}
                                        key={index}
                                    >
                                        {el.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            )
        }
        return (
            <ul className='projects-page__categories'>
                {
                    categories.map((el, index) => {
                        const isActive = this.state.activeTab === el.name.toLowerCase()
                        const cls  = isActive ? 'projects-page__category--active' : ''
                        return (
                            <li
                                className={`projects-page__category ${cls}`}
                                key={index}
                                onClick={() => this.handleTabChange(el.name.toLowerCase())}
                            >
                                {el.name}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    renderProjects(projects) {
        if (!projects) {
            return null
        }
        return (
            <div className='projects-page__projects-list'>
                {
                    <InfiniteScroll
                        dataLength={this.state.projects.length}
                        next={this.getMoreProjects}
                        loader={<h2>Loading...</h2>}
                        hasMore={this.state.hasMore}
                    >
                        {projects.map((el, index) => {
                            if (this.props.isMobile) {
                                return (
                                    <div
                                        className='projects-page__project project-mobile'
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
                            }
                            return (
                                <div
                                    className='projects-page__project project'
                                    style={{
                                        background: `url(${el.image}) no-repeat top center`,
                                        backgroundSize: 'cover'
                                    }}
                                    key={index}
                                >
                                    <ul className="project__categories">
                                        {this.props.categories.map((el, index) => {
                                            return (
                                                <li className="project__category" key={index}>{el.name}</li>
                                            )
                                        })}
                                    </ul>
                                    <span className="project__name">{el.title}</span>
                                    <p className="project__description">{el.excerpt}</p>
                                </div>
                            )
                        })}
                    </InfiniteScroll>
                }
            </div>
        )
    }

    render() {
        return (
            <div className='container projects-page__wrap'>
                <SectionTitle className='projects-page__title'>Our Projects</SectionTitle>
                {this.renderCategories(this.props.categories)}
                {this.renderProjects(this.state.projects)}
            </div>
        )
    }
}

const mapSizesToProps =({width}) => ({
    isMobile: width < 768
})

export default withSizes(mapSizesToProps)(MainSectionComponent)
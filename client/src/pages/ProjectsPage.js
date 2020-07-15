import React, {Component} from 'react'
import {connect} from "react-redux";
import HeaderComponent from "../shared/header/headerComponent";
import FooterComponent from "../shared/footer/FooterComponent";
import MainSectionComponent from "../components/projects/MainSectionComponent";
import {getMenuData, getProjectsData} from "../actions";
import {categories} from "../mock";
import Loader from "react-loader-spinner";



class ProjectsPage extends Component {

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(getMenuData())
        dispatch(getProjectsData())
    }

    render() {
        if (!this.props.menuItems || !this.props.projects) {
            return (
                <Loader
                    type='Triangle'
                    height={100}
                    width={100}
                />
            )
        }
        return (
            <div className='Page projects-page'>
                <HeaderComponent menuItems={this.props.menuItems}/>
                <MainSectionComponent projects={this.props.projects} categories={categories}/>
                <FooterComponent menuItems={this.props.menuItems}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        menuItems: state.shared.menuData.items,
        projects: state.shared.projectsData.projects
    }
}

export default connect(mapStateToProps)(ProjectsPage)
import React, { Component } from 'react';
import InfoSliderSectionComponent from '../components/home/infoSliderSection/InfoSliderSectionComponent';
import OurStackSectionComponent from '../shared/ourStackSection/OurStackSectionComponent';
import MainSectionComponent from "../components/home/mainSection/MainSectionComponent";
import NewsSectionComponent from "../components/home/newsSection/newsSectionComponent";
import OurProjectsSectionComponent from '../components/home/ourProjectsSection/OurProjectsSectionComponent'
import OurTeamSection from "../shared/ourTeamSection/OurTeamSection";
import HeaderComponent from "../shared/header/headerComponent";
import {categories} from "../mock";
import {connect} from 'react-redux'
import {getMenuData, getPageData, getProjectsData, getTeamData, getTechnologiesData} from "../actions";
import FooterComponent from "../shared/footer/FooterComponent";
import Loader from 'react-loader-spinner'

class HomePage extends Component {


  componentDidMount() {
      const {dispatch} = this.props
      dispatch(getMenuData())
      dispatch(getPageData())
      dispatch(getTechnologiesData())
      dispatch(getProjectsData())
      dispatch(getTeamData())
  }

  fetchElements(sections) {
      if(!sections) {
          return null;
      }
      return sections.map( (el, i) => {
          return (
              <div key={i}>
                  {this.sortSection(el)}
              </div>
          );
      })
  }

  sortSection(el) {
      if(!el) {
          return null;
      }
      switch (el.section_type) {
          case 'main_section' :
              return <MainSectionComponent mainSection={el.data} /> ;
          case 'info_slider_block' :
              return <InfoSliderSectionComponent infoSliderSection={el.data} />;
          case 'our_stack_section' :
              return <OurStackSectionComponent technologies={this.props.technologies}/>;
          case 'our_projects_section':
              return <OurProjectsSectionComponent ourProjectsSection ={el.data} projects={this.props.projects} categories={categories}/>
          case 'our_team_section':
              return <OurTeamSection ourTeamSection={this.props.teamData}/>
          case 'news_update_section' :
              return <NewsSectionComponent  news={el.data}/>;
          default :
              return null;
      }
  }


  render() {
    if( !this.props.data.sections || !this.props.menuItems || !this.props.technologies || !this.props.projects || Object.keys(this.props.teamData).length === 0) {
        return (
            <Loader
                type='Triangle'
                height={100}
                width={100}
            />
        );
    }
    return(
        <div className="Page homePage">
            <HeaderComponent menuItems = {this.props.menuItems} />
            {this.fetchElements(this.props.data.sections)}
            <FooterComponent menuItems ={this.props.menuItems}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        data: state.home.pageData,
        menuItems: state.shared.menuData.items,
        technologies: state.home.technologiesData.technologies,
        projects: state.shared.projectsData.projects,
        teamData: state.shared.teamData
    }
}

export default connect(mapStateToProps)(HomePage);

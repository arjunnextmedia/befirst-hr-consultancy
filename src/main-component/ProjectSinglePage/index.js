import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/service-pagetitle'
import ProjectSingle from '../../components/ProjectSingle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const ProjectSinglePage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Project Single'} pagesub={'Project'}/> 
            <ProjectSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectSinglePage;

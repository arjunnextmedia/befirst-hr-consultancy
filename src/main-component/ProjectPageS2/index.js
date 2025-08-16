import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/service-pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Projects from '../../components/Projects'



const ProjectPageS2 =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'}/> 
            <Projects/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPageS2;

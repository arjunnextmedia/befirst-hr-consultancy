import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/service-pagetitle'
import BlogList from '../../components/BlogList'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogPageFullwidth =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Articles'} pagesub={'Articles'}/> 
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;


import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/service-pagetitle'
import BlogSingle from '../../components/BlogDetails/blog1'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogDetails =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Articles'} pagesub={'Articles'}/> 
            <BlogSingle/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetails;

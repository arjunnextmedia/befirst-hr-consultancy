import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/Blogs-pagetitle'
import BlogList from '../../components/BlogList'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Articles'} pagesub={'Articles'}/> 
            <BlogList/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPage;


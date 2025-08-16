import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/service-pagetitle'
import BlogSingle from '../../components/BlogDetails/blog1'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogDetailsLeftSiide =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Articles'} pagesub={'Articles'}/> 
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;



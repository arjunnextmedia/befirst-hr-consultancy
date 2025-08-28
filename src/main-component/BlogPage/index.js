import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pageTitles/Blogs-pagetitle'
import BlogList from '../../components/BlogList'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import SEO from '../../components/seo'


const BlogPage =() => {
    return(
        <>
            <SEO
                title="HR Insights & Tips | Befirst HR Blog Calicut"
                description="Stay updated with HR trends, recruitment tips & business insights from Befirst HR experts in Kerala & GCC markets."
                keywords={"HR blog Kerala,HR tips Calicut, recruitment advice Kerala, payroll insights GCC"}
            />
            <Navbar2/>
            <PageTitle pageTitle={'Articles'} pagesub={'Articles'}/> 
            <BlogList/>
            <Footer/>
            <Scrollbar/>
        </>
    )
};
export default BlogPage;


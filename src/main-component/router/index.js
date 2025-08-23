import React from 'react';
import { Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import AboutPage from '../AboutPage'
import ServicePage from '../ServicePage'
import ServicePageS2 from '../ServicePageS2'
import ServiceSinglePage from '../ServiceSinglePage'
// import ProjectPage from '../ProjectPage'
// import ProjectPageS2 from '../ProjectPageS2'
// import ProjectSinglePage from '../ProjectSinglePage'
// import PricingPage from '../PricingPage'
import TestimonialPage from '../TestimonialPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull'
import ErrorPage from '../ErrorPage'
import ContactPage from '../ContactPage'
// import LoginPage from '../LoginPage'
// import SignUpPage from '../SignUpPage'
// import ForgotPassword from '../ForgotPassword'
import BlogSingle2 from '../../components/BlogDetails/blog2';
import BlogSingle3 from '../../components/BlogDetails/blog3';
import BlogSingle5 from '../../components/BlogDetails/blog5';
import BlogSingle4 from '../../components/BlogDetails/blog4';
import CareersPage from '../careersPage';
import FAQPage from '../faqPage';
import PrivacyPolicyPage from '../PrivacyPolicy';
import TermsOfUsePage from '../TermsOfUse';
import VisionAndMission from '../AboutePage3';
import FoundersVisionPage from '../FoundersVisionPage';
import CareersFormPage from '../careersFormPage';


const AllRoute = () => {

  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage3 />} />
          <Route path='/home' element={<Homepage/>} />
          <Route path='/home2' element={<Homepage2/>} />
          <Route path='/home3' element={<Homepage3/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/service' element={<ServicePage/>} />
          <Route path='/service-s2' element={<ServicePageS2/>} />
          <Route path='/service-single/:id' element={<ServiceSinglePage />} />
          {/* <Route path='/service-single/' element={<ServiceSinglePage />} />
          <Route path='/service-single/' element={<ServiceSinglePage />} />
          <Route path='/service-single/' element={<ServiceSinglePage />} />
          <Route path='/service-single/' element={<ServiceSinglePage />} />
          <Route path='/service-single/' element={<ServiceSinglePage />} /> */}
          {/* <Route path='/project' element={<ProjectPage />} />
          <Route path='/project-s2' element={<ProjectPageS2 />} />
          <Route path='/project-single' element={<ProjectSinglePage />} />
          <Route path='/pricing' element={<PricingPage />} /> */}
          <Route path='/testimonial' element={<TestimonialPage />} />
          <Route path='/404' element={<ErrorPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/blogs' element={<BlogPage />} />
          <Route path='/blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='/blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='/blog-details/blog1' element={<BlogDetails />} />
          <Route path='/blog-details/blog2' element={<BlogSingle2 />} />
          <Route path='/blog-details/blog3' element={<BlogSingle3 />} />
          <Route path='/blog-details/blog4' element={<BlogSingle4 />} />
          <Route path='/blog-details/blog5' element={<BlogSingle5 />} />
          <Route path='/blog-single-left-sidebar' element={<BlogDetailsLeftSiide />} />
          <Route path='/blog-single-fullwidth' element={<BlogDetailsFull />} />
          <Route path='/careers' element={<CareersPage />} />
          <Route path='/faqs' element={<FAQPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/terms' element={<TermsOfUsePage />} />
          <Route path='/about2' element={<FoundersVisionPage />} />
          <Route path='/about3' element={<VisionAndMission />} />
          <Route path='/careers/careers-form' element={<CareersFormPage />} />



          {/* <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<SignUpPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} /> */}
        </Routes>
    </div>
  );
}

export default AllRoute;

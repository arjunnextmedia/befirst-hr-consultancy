import React from 'react'
import Footer from '../../components/footer'
import Navbar2 from '../../components/Navbar2'
import Scrollbar from '../../components/scrollbar'
import PageTitle from '../../components/pageTitles/privacy-policy-pagetitle'
import PrivacyPolicy from '../../components/PrivacyPolicy'

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar2 />
      <PageTitle pageTitle={'Privacy Policy'} pagesub={'Privacy Policy'} />
      <PrivacyPolicy/>
      <Footer />
      <Scrollbar />
    </>
  )
}

export default PrivacyPolicyPage
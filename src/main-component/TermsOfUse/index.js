import React from 'react'
import Footer from '../../components/footer'
import Navbar2 from '../../components/Navbar2'
import Scrollbar from '../../components/scrollbar'
import TermsOfUse from '../../components/termsOfUse'
import PageTitle from '../../components/pageTitles/terms-pagetitle'

const TermsOfUsePage = () => {
  return (
    <>
      <Navbar2 />
      <PageTitle pageTitle={'Terms of Use'} pagesub={'Terms of Use'} />
      <TermsOfUse/>
      <Footer />
      <Scrollbar />
    </>
  )
}

export default TermsOfUsePage
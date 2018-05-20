import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Helmet from 'react-helmet'
import MainNav from '../components/main-nav';
import Footer from '../components/footer';

import './index.css'
import '../assets/globalCSS/global-css.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <MainNav/>
    <PageContainer>
      {children()}
    </PageContainer>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

//Styled Components
const PageContainer = styled.div`
  width: 100%;
  background: black;
`

//graphql
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

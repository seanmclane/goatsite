import React from "react"
import Link from 'gatsby-link'
import Helmet from "react-helmet"
import styled from "styled-components"

import SEO from "../components/SEO"
import config from "../../data/SiteConfig"
import MainHeader from '../components/Layout/Header'
import Download from '../components/Download/Download'

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
`

class DownloadPage extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <main>
          <MainHeader
            siteTitle={config.siteTitle}
            siteDescription={config.siteDescription}
            location={this.props.location}
            logo={config.siteLogo}
          />
          <BodyContainer>
            <Download />
          </BodyContainer>
        </main>
      </div>
    );
  }
}

export default DownloadPage;
import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import SEO from "../components/SEO"
import config from "../../data/SiteConfig"
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <span>{`\ud83d\udc10`}</span>
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <h2>Need another shitcoin?</h2>
            <p>Goatnickels is here</p>
            <CtaButton to={'/lesson-one'}>Learn more</CtaButton>
            <DownloadContainer>
            <CtaButton to={'/download'}>Download</CtaButton>
            </DownloadContainer>
          </BodyContainer>
        </main>
      </div>
    );
  }
}

export default Index;

const DownloadContainer = styled.div`
  margin-left: 20px;
  display: inline-block;
`

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 600;
  }
  & > span {
    font-size: 80px;
  }
  color: white;
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`


/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges { 
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

import React, { Component } from "react";
import styled from "styled-components"

class Download extends Component {
  render() {
    return (
      <div className="about">
        <section>
          <h1>Download GoatNickels (Pre-Alpha)</h1>
          <p>
            Get the cross-platform binary here.
          </p>
          <LinkContainer>
            <a href='https://s3-us-west-2.amazonaws.com/goatnickels.com/builds/goatnickels-pre-alpha.zip' >GoatNickels</a>
          </LinkContainer>
        </section>
        <section>
          <h1>Download GoatBucket (Pre-Alpha)</h1>
          <p>
            Choose the right link for your OS.
          </p>
          <LinkContainer>
            <a href='https://s3-us-west-2.amazonaws.com/goatnickels.com/builds/goatbucket-pre-alpha-osx-darwin.zip' > Mac OSX (darwin 64-bit)</a>
          </LinkContainer>
        </section>
      </div>
    );
  }
}

export default Download;

const LinkContainer = styled.div`
  font-size: 30px;
`
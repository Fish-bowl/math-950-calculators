import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import Calculators from './Calculators';
import Intro from './Intro';

class Home extends Component {
  render() {
    return (
      <Container>
        <Intro />
        <Segment inverted>
          <Calculators />
        </Segment>
      </Container>
    );
  }
}

export default Home;

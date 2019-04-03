import React, { Component } from 'react';
import { Container, Divider, Segment } from 'semantic-ui-react';
import Calculators from './Calculators';
import Intro from './Intro';
import Wolfram from './Wolfram';

class Home extends Component {
  render() {
    return (
      <Container>
        <Intro />
        <Segment inverted>
          <Calculators />
        </Segment>
        <Divider/>
        <Wolfram />
      </Container>
    );
  }
}

export default Home;

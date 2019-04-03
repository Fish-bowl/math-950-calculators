import React, { Component } from 'react';
import { Container, Divider, Segment } from 'semantic-ui-react';
import Calculators from './Calculators';
import Intro from './Intro';
import Wolfram from './Wolfram';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div style={styles.container} >
        <Intro />
        <Divider />
        <Segment inverted>
          <Calculators />
        </Segment>
        <Divider/>
        <Wolfram />
        <Divider />
        <Footer />
        <Divider />
      </div>
    );
  }
}

const styles = {
  container: {
    margin: '45px',
    backgroundColor: 'black'
  }
}

export default Home;

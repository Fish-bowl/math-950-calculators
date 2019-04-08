import React, { Component } from 'react';
import {Divider, Header, Button, Segment } from 'semantic-ui-react';
import Intro from './Intro';
import Wolfram from './Wolfram';
import Footer from './Footer';
import ModuleButtons from './ModuleButtons';

class Home extends Component {
  render() {
    return (
      <div style={styles.container} >
        <Intro />
        <Divider />
        <ModuleButtons />
        <Divider/>
        <Wolfram />
        <Divider />
        <Segment basic style={{display: 'flex', justifyContent: 'center'}} >
          <Footer />
        </Segment>
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

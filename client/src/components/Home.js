import React, { Component } from 'react';
import {Divider,Container, Segment } from 'semantic-ui-react';
import Intro from './Intro';
import Wolfram from './Wolfram';
import ModuleButtons from './ModuleButtons';

class Home extends Component {
  render() {
    return (
      <Container>
      {/* <div style={styles.container} > */}
        <Intro />
        <Divider />
        <ModuleButtons />
        <Divider/>
        <Wolfram />
        <Divider />
        <Segment 
          basic  
          style={{display: 'flex', justifyContent: 'center'}} 
        >
        </Segment>
        <Divider />
      {/* </div> */}
      </Container>
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

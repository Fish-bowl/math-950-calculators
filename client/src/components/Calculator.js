import React from 'react'
import {Container, Segment, Header, Divider} from 'semantic-ui-react'

class Calculator extends React.Component {
  render() {
    return (
      <Container>
        <Divider inverted/>
        <Header 
          inverted 
          textAlign='center' 
          as='h1'
        >
          here's a simple one so you dont always have to switch
        </Header>
        <Segment style={styles.segment} inverted >
          <iframe 
            title='Calculator widget' 
            src='https://www.embed.com/app/calculator/gray-calculator.html' 
            style={styles.iframe} 
            scrolling='no' 
            frameBorder='0'
          >
          </iframe>
        </Segment>
      </Container>
    )
  }
}

const styles = {
  segment: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  iframe: {
    width: '500px',
    height: '1000px',
    margin: '0',
  },
}

export default Calculator

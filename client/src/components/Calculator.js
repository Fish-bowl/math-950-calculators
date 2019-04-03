import React from 'react'
import {Segment,} from 'semantic-ui-react'

class Calculator extends React.Component {
  render() {
    return (
      <Segment style={styles.segment} inverted>
        <iframe title='Calculator widget' src='https://www.embed.com/app/calculator/gray-calculator.html' style={styles.iframe} scrolling='no' frameBorder='0'></iframe>
      </Segment>
    )
  }
}

const styles = {
  segment: {
    display: 'flex',
    justifyContent: 'center'
  },
  iframe: {
    width: '500px',
    height: '1000px',
    margin: '0',

  },
}

export default Calculator

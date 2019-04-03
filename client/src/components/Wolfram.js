import React from 'react'
import {Header, Segment, Card, CardGroup, CardContent} from 'semantic-ui-react'

class Wolfram extends React.Component{
  render() {
    return(
      <Segment inverted >
        <Header textAlign='center' as='h1'>Links to more good calculators:</Header>
        <CardGroup style={styles.card_group} >
          <Card target='_blank' href='https://www.wolframalpha.com/examples/mathematics/'>
            <Card.Header textAlign='center' style={styles.text} >Wolfram alfa's calculator database for advanced computation</Card.Header>
            <CardContent>
                Wolfram alfa
            </CardContent>
          </Card>
          <Card href='https://goodcalculators.com/ratio-calculator/' target='_blank'  >
            <Card.Header textAlign='center' style={styles.text} >simple ratio calculator with explanations</Card.Header>
            <CardContent>
              Ratio Calculator
            </CardContent>
          </Card>
        </CardGroup>
      </Segment>
    )
  }
}

const styles = {
  card_group: {
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: '1.5em'
  }
}

export default Wolfram

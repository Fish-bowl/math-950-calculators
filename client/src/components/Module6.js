import React from 'react'
import {Container, Divider, Segment, Header, Button,} from 'semantic-ui-react'

class Module6 extends React.Component{
  render(){
    return(
      <Container style={styles.container} >
        <Segment inverted>
          <Header textAlign='center' as='h2'>there's not much I can provide that other resources haven't already for this module. I highly recommend using wolfram alfa for unit conversions.</Header>
          <Button 
            fluid 
            as='a' 
            target='_blank' 
            color='red' 
            href='https://www.wolframalfa.com/'
          >
            Link to Wolfram Alfa
          </Button>
          <Divider />
          <Button 
            fluid 
            as='a' 
            target='_blank' 
            color='blue' 
            href='https://www.unitconverters.net/'
          >
            Unit converters
          </Button>
          <Divider />
        </Segment>
      </Container>
    )
  }
}

const styles = {
  container: {
    margin: '45px',
    backgroundColor: 'black',
    minHeight: '100vh'
  }
}

export default Module6

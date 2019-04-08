import React from 'react'
import {Container, Divider, Segment, Header, Button,} from 'semantic-ui-react'
import Footer from './Footer'

class Module6 extends React.Component{
  render(){
    return(
      <Container style={styles.container} >
        <Segment inverted>
          <Header textAlign='center' as='h2'>theres not really much I can provide that other recources havent already for this module. I highly reccoment using wolfram alfa for unit conversions because it can convert any unit to anyother no matter the steps</Header>
          <Button fluid as='a' target='_blank' color='red' href='https://www.wolframalfa.com/'>
            Link to Wolfram alfa
          </Button>
          <Divider />
          <Button fluid as='a' target='_blank' color='blue' href='https://www.unitconverters.net/'>
            Almost every unit converter
          </Button>
          <Divider />
        </Segment>
        <Footer />
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

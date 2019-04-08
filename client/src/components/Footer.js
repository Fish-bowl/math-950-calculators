import React from 'react'
import {Segment, Header} from 'semantic-ui-react'

class Footer extends React.Component{
  render() {
    return (
      <Segment inverted style={styles.segment} >
        <Header textAlign='center' as='h1'> Thank you for checking out my math resource all credit for the calculators belongs to the destination of each link</Header>
      </Segment>
    )
  }
}

const styles = {
  segment: {
    width: '100%',
    height: '10%',
  }
}

export default Footer

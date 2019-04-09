import React from 'react'
import {Button, Header, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ModuleButtons extends React.Component {
  render(){
    return (
      <Segment inverted >
        <Header as='h1' textAlign='center'>Please choose a module</Header>
        <Button.Group fluid style={styles.group} >
          <Button as={Link} to='/Module5' color='blue'>
            Module 5
          </Button>
          <Button as={Link} to='/Module6' color='green'>
            Module 6
          </Button>
        </Button.Group>
      </Segment>
    )
  }
}

const styles = {
  group: {
    // display: 'flex',
    // justifyContent: 'space-around'
  }
}

export default ModuleButtons

import React from 'react'
import {Header, Segment} from 'semantic-ui-react'

class Intro extends React.Component{
  render() {
    return(
      <Segment inverted style={styles.container}>
        <Header textAlign='center' as='h1'>Welcome to math 950's calculator library. this current page is for module 5</Header>
        <p style={styles.ptag}>
          I created this page because old fashioned cheating was taking to long and I wanter to speed up the process by having all the calculater per module in one place. 
        </p>
        <p style={styles.ptag} >
          feel free to use this resource as you may.
        </p>
      </Segment>
    )
  }
}

const styles = {
  container: {
    // display: 'flex',
    // justifyContent: 'center',
  },
  ptag: {
    textAlign: "center",
    fontSize: "18px",
  }
}

export default Intro

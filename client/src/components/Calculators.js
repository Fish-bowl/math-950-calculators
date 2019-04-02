import React from 'react'
import {Card, Segment,Header, Divider } from 'semantic-ui-react'

class Calculators extends React.Component{
  render() {
    return(
      <Segment inverted>
        <Header as='h1'>Ratios</Header>
        <Card.Group style={styles.card_group} >
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/math/ratios.php" onclick="window.open('https://www.calculatorsoup.com/calculators/math/ratios.php?do=pop','Ratio Calculator','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Ratio Calculator for solving a missing variable</a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/math/ratio-simplifier.php" onclick="window.open('https://www.calculatorsoup.com/calculators/math/ratio-simplifier.php?do=pop','Ratio Simplifier','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Ratio Simplifier for bringing ratios to simplest terms</a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/math/unit-rate-calculator.php" onclick="window.open('https://www.calculatorsoup.com/calculators/math/unit-rate-calculator.php?do=pop','Unit Rate Calculator','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Unit Rate Calculator for calculating the base unnit rate for a ratio</a>
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider/>
        <Header as='h1'>Fractions</Header>
        <Card.Group style={styles.card_group} >
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/math/fractionssolvex.php" onclick="window.open('https://www.calculatorsoup.com/calculators/math/fractionssolvex.php?do=pop','Fractions Solve for Unknown X','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Fractions Solve for Unknown X.</a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/math/fraction-to-percent-calculator.php" onclick="window.open('https://www.calculatorsoup.com/calculators/math/fraction-to-percent-calculator.php?do=pop','Fraction to Percent Calculator','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Fraction to Percent Calculator</a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/math/percent-to-fraction-calculator.php" onclick="window.open('https://www.calculatorsoup.com/calculators/math/percent-to-fraction-calculator.php?do=pop','Percent to Fraction Calculator','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Percent to Fraction Calculator</a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/math/decimal-to-fraction-calculator.php" onclick="window.open('https://www.calculatorsoup.com/calculators/math/decimal-to-fraction-calculator.php?do=pop','Decimal to Fraction Calculator','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Decimal to Fraction Calculator</a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/math/decimal-to-fraction-calculator.php" onclick="window.open('https://www.calculatorsoup.com/calculators/math/decimal-to-fraction-calculator.php?do=pop','Decimal to Fraction Calculator','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Decimal to Fraction Calculator</a>
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider/>
        <Header as='h1'>Percentage</Header>
        <Card.Group style={styles.card_group} >
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/algebra/percent-change-calculator.php" onclick="window.open('https://www.calculatorsoup.com/calculators/algebra/percent-change-calculator.php?do=pop','Percentage Change Calculator','width=400,height=500,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Percentage Change Calculator</a>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/math/percentage.php" onclick="window.open('https://www.calculatorsoup.com/calculators/math/percentage.php?do=pop','Percentage Calculator','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Percentage Calculator. find p(%) of x(num)</a>
            </Card.Content>
          </Card>
        </Card.Group>
        <Divider />
        <Header as='h1'>Simple Interest</Header>
        <Card.Group style={styles.card_group}>
          <Card>
            <Card.Content>
              <a href="https://www.calculatorsoup.com/calculators/financial/simple-interest-calculator.php" onclick="window.open('https://www.calculatorsoup.com/calculators/financial/simple-interest-calculator.php?do=pop','Simple Interest Calculator I = Prt','width=400,height=600,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');return false;">Simple Interest Calculator I = Prt</a>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    )
  }
}

const styles = {
  card_group: {
    display: 'flex',
    justifyContent: 'center',
  }
}

export default Calculators

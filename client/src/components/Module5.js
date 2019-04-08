import React from 'react'
import { Container, Card, Segment, Header, } from 'semantic-ui-react'
import Footer from './Footer'

const RatioItems = [
  {
    header: 'Ratio Calculator for solving a missing variable',
    description: 'A : B = C : D',
    href: "https://www.calculatorsoup.com/calculators/math/ratios.php",
    target: '_blank'
  },
  {
    header: 'Ratio Simplifier for bringing ratios to simplest terms',
    description: 'A : B = A : B. You must have at least one',
    href: "https://www.calculatorsoup.com/calculators/math/ratio-simplifier.php",
    target: '_blank'
  },
  {
    header: 'Unit Rate Calculator for calculating the base unnit rate for a ratio',
    description: 'Find the unit rate or unit price with this calculator.',
    href: "https://www.calculatorsoup.com/calculators/math/unit-rate-calculator.php",
    target: '_blank'
  },
]

const FractionItems = [
  {
    header: 'Fractions Solve for Unknown X.',
    description: 'A/B = X/Y. must have 3 out of 4 variables',
    href: "https://www.calculatorsoup.com/calculators/math/fractionssolvex.php",
    target: '_blank'
  },
  {
    header: 'Fraction to Percent Calculator',
    description: '2/4 => 50%',
    href: "https://www.calculatorsoup.com/calculators/math/fraction-to-percent-calculator.php",
    target: '_blank'
  },
  {
    header: 'Percent to Fraction Calculator',
    description: '50% => 1/2',
    href: "https://www.calculatorsoup.com/calculators/math/percent-to-fraction-calculator.php",
    target: '_blank'
  },
  {
    header: 'Decimal to Fraction Calculator',
    description: '.5 => 1/2',
    href: "https://www.calculatorsoup.com/calculators/math/decimal-to-fraction-calculator.php",
    target: '_blank'
  },
]

const PercentageItems = [
  {
    header: 'Percentage Change Calculator',
    description: '∆x to ∆y as a percentage',
    href: "https://www.calculatorsoup.com/calculators/algebra/percent-change-calculator.php",
    target: '_blank'
  },
  {
    header: 'Percentage Calculator',
    description: 'find p(%) of x(num)',
    href: "https://www.calculatorsoup.com/calculators/math/percentage.php",
    target: '_blank'
  },
]

const InterestItems = [
  {
    header: 'Simple Interest Calculator',
    description: 'calculates simple interest rates',
    href: 'https://www.calculatorsoup.com/calculators/financial/simple-interest-calculator.php',
    target: '_blank'
  }
]

class Module5 extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Segment inverted>
          <Header as='h1'>Ratios:</Header>

          <Card.Group style={styles.card_group} items={RatioItems} />

          <Header as='h1'>Fractions:</Header>

          <Card.Group style={styles.card_group} items={FractionItems} />

          <Header as='h1'>Percentage:</Header>

          <Card.Group style={styles.card_group} items={PercentageItems} />

          <Header as='h1'>Simple Interest:</Header>

          <Card.Group style={styles.card_group} items={InterestItems} />
        </Segment>
        <Footer />
      </Container>
    )
  }
}

const styles = {
  card_group: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    margin: '45px',
    backgroundColor: 'black',
    minHeight: '100vh'
  }
}

export default Module5

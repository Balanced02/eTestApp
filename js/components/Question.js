import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  ListItem,
  CheckBox,
} from 'native-base'
import { AppLoading } from 'expo'
import { Grid, Row, Col } from 'react-native-easy-grid'

import { selectOption, nextQuestion, prevQuestion } from '../actions/challenges'

let styles = {
  container: { alignContent: 'center' },
  text: { color: '#000000', marginRight: 5, marginLeft: 5 },
  option: { color: '#000000' },
  footerBtn: { flex: 1, alignContent: 'center', justifyContent: 'center' },
}

// Options Selector
function Option(props) {
  return (
    <ListItem >
      <CheckBox onPress={props.click} checked={props.checked} color={'green'} />
      <Body>
        <Text style={styles.option}>
          {props.text}
        </Text>
      </Body>
    </ListItem>
  )
}

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
    }
  }

  async componentWillMount() {
    if (this.props.challenge.challenge) {
      this.setState({ ready: true })
    }
  }

  render() {
    if (this.state.ready) {
      let challenge = this.props.challenge
      let name = challenge.challenge
      let progress = challenge.progress
      let question = challenge.current
      let options = question.answers
      let answer = challenge.answers[progress]
      return (
        <Container>
          <Content style={styles.container}>
            <Title style={{ ...styles.text, textDecorationLine: 'underline', marginBottom: 10 }}>
              {question.subject}
            </Title>
            <Grid>
              <Row>
                <Text style={styles.text}>
                  {progress + 1}. {question.question}
                </Text>
              </Row>
            </Grid>
            {options.map((option, i) =>
              <Option
                key={i}
                text={option.text}
                checked={answer === i}
                click={() => this.props.dispatch(selectOption(progress, i))}
              />
            )}
          </Content>
          <Footer>
            <Button onPress={() => this.props.dispatch(prevQuestion())} info style={styles.footerBtn}>
              <Text>Previous</Text>
            </Button>
            <Button onPress={() => this.props.dispatch(nextQuestion())} success style={styles.footerBtn}>
              <Text>Next</Text>
            </Button>
          </Footer>
        </Container>
      )
    } else {
      return <AppLoading />
    }
  }
}

const mapStateToProps = state => {
  return {
    challenge: state.challenge,
  }
}

export default connect(mapStateToProps)(Question)

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
import { View } from 'react-native'
// import { AppLoading } from 'expo'
import { Grid, Row, Col } from 'react-native-easy-grid'
import HTMLView from 'react-native-htmlview'
import {
  selectOption,
  nextQuestion,
  prevQuestion,
  calcScore,
  endChallenge,
} from '../actions/challenges'
// import ActionFab from './ActionFab'

let styles = {
  container: { alignContent: 'center', flex: 1 },
  text: { color: '#000000', marginRight: 5, marginLeft: 5 },
  option: { color: '#000000' },
  footerBtn: { flex: 1, alignContent: 'center', justifyContent: 'center' },
}

// Options Selector
function Option(props) {
  return (
    <ListItem>
      <CheckBox onPress={props.click} checked={props.checked} />
      <Body>
        <HTMLView value={props.text} />
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

  scrollToTop() {
    this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: true })
  }

  render() {
    if (this.state.ready) {
      let challenge = this.props.challenge
      let length = challenge.length
      let name = challenge.challenge
      let progress = challenge.progress
      let question = challenge.current
      let options = question.answers
      let title = question.title
      let answer = challenge.answers[progress]
      // console.log(progress, length)
      return (
        <Container>
          <Content
            padder
            enableResetScrollToCoords
            ref={ref => {
              this._scrollView = ref
            }}
            style={styles.container}
          >
            <Title style={{ ...styles.text, textDecorationLine: 'underline', marginBottom: 10 }}>
              {question.subject}
            </Title>
            <Grid>
              <Row>
                <HTMLView
                  value={`<p style='margin-bottom: -15px' >${title}</p>` + question.question}
                />
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
            {progress !== 0
              ? <Button
                  iconLeft
                  onPress={() => this.props.dispatch(prevQuestion())}
                  info
                  style={styles.footerBtn}
                >
                  <Text>Previous</Text>
                </Button>
              : <Button
                  danger
                  onPress={() => {
                    this.props.dispatch(endChallenge())
                    this.props.navigation.navigate('Challenges')
                  }}
                  style={styles.footerBtn}
                >
                  <Text>GO BACK</Text>
                </Button>}
            {progress < length - 1
              ? <Button
                  iconRight
                  onPress={() => {
                    this.props.dispatch(nextQuestion())
                  }}
                  success
                  style={styles.footerBtn}
                >
                  <Text>Next</Text>
                </Button>
              : <Button
                  onPress={() => {
                    this.props.dispatch(calcScore())
                    this.props.navigation.navigate('ShowScore')
                  }}
                  danger
                  style={styles.footerBtn}
                >
                  <Text>Finish Exam</Text>
                </Button>}
          </Footer>
          {/* <ActionFab /> */}
        </Container>
      )
    } else {
      return <Text>Loading...</Text>
    }
  }
}

const mapStateToProps = state => {
  return {
    challenge: state.challenge,
  }
}

export default connect(mapStateToProps)(Question)

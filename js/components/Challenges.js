import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Container, Content, Text, Button, Card, CardItem, Body, Icon } from 'native-base'
import { StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { loadChallenge } from '../actions/challenges'

let styles = {
  content: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    width: null,
  },
}

class Challenges extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Card style={styles.content}>
              <CardItem>
                <Button
                  success
                  iconLeft
                  style={styles.button}
                  onPress={() => {
                    this.props.dispatch(loadChallenge(1))
                    Actions.questions()
                    console.log('Challenge Button Pressed')
                  }}
                >
                  <Icon name="bookmarks" />
                  <Text>Start Challenge 1</Text>
                </Button>
              </CardItem>
            </Card>
          </Grid>
        </Content>
      </Container>
    )
  }
}

export default connect()(Challenges)
import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-native-easy-grid'
import {
  Container,
  Content,
  Text,
  Button,
  Card,
  CardItem,
  Body,
  Icon,
  List,
  ListItem,
  Right,
} from 'native-base'
import { StyleSheet } from 'react-native'
// import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { loadChallenge } from '../actions/challenges'
import { challenges } from '../reducers/challenges'

let styles = {
  content: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: '#000',
    paddingRight: 5
  }
}

class Challenges extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <List style={styles.content}>
              {challenges.map((challenge, i) => {
                return (
                  <ListItem key={i}>
                      <Text
                        style={styles.text}
                        onPress={() => {
                          this.props.dispatch(loadChallenge(i))
                          this.props.navigation.navigate('Question')
                        }}
                      >
                        {challenge.challengeName}
                      </Text>
                    <Right>
                      <Icon name='md-arrow-dropright' />
                    </Right>
                  </ListItem>
                )
              })}
            </List>
          </Grid>
        </Content>
      </Container>
    )
  }
}

export default connect()(Challenges)

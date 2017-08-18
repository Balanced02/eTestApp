import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-native-easy-grid'
import { Container, Content, Text, Button, Card, CardItem, Body } from 'native-base'
import { StyleSheet } from 'react-native'

let styles = {
  content: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
  },
}

export default class Challenges extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Card>
              <CardItem>
                <Body>
                  <Button
                    style={styles.button}
                    onPress={() => {
                      console.log('Challenge Button Pressed')
                    }}>
                    <Text>Start Challenge 1</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          </Grid>
        </Content>
      </Container>
    )
  }
}

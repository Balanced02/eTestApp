import React, { Component } from 'react'
import { Container, Content, Text, Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'
import { StyleSheet, Image } from 'react-native'

import logo from '../../assets/images/logo.png'

let styles = {
  top: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Row size={60} style={styles.top}>
            <Image source={logo} />
          </Row>

          <Row size={40} style={styles.bottom}>
            <Text>Welcome to eTestApp</Text>
            <Button rounded info>
              <Text>Take a Challenge</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    )
  }
}

import React, { Component } from 'react'
import { Container, Content, Text, Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
// import { Actions } from 'react-native-router-flux'
import { StyleSheet, Image, Dimensions } from 'react-native'

import logo from '../../assets/images/logo.png'

let {height, width} = Dimensions.get('window')

let styles = {
  top: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  bottom: {
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
  },
}

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Row size={60} style={styles.top}>
            <Image
              resizeMode="contain"
              style={{
                margin: 20,
                alignContent: 'center',
                width: width / 1.1
              }}
              source={logo}
            />
          </Row>

          <Row size={40} style={styles.bottom}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>
              Welcome to eTestApp
            </Text>
            <Button full rounded info onPress={() => this.props.navigation.navigate('Challenges')}>
              <Text style={{ fontFamily: 'Roboto', fontSize: 20 }}>Take a Challenge</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    )
  }
}

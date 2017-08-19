import React, { Component } from 'react'
import { Container, Content, Text, Button } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
// import { Actions } from 'react-native-router-flux'
import { StyleSheet, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import logo from '../../assets/images/checkmark.png'
import {endChallenge} from '../actions/challenges'

let { height, width } = Dimensions.get('window')

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

class ShowScore extends Component {
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
                width: width / 2,
              }}
              source={logo}
            />
            
          </Row>
          <Row size={10} style={{...styles.bottom, backgroundColor: '#fff'}} >
            <Text
              style={{
                fontSize: 30,
                color: '#3498db',
                alignSelf: 'center',
                textAlign: 'center'
              }}
            >
              You Scored {this.props.score} / 400
            </Text>
          </Row>

          <Row size={20} style={styles.bottom}>
            <Button
              full
              rounded
              danger
              onPress={() => {
                this.props.dispatch(endChallenge())
                this.props.navigation.navigate('Challenges')}
              }                 
            >
              <Text style={{ fontFamily: 'Roboto', fontSize: 20 }}>Go Back to Challenges</Text>
            </Button>
          </Row>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    score: state.challenge.score,
  }
}

export default connect(mapStateToProps)(ShowScore)

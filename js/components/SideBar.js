import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Text, Icon, ListItem, Content, Thumbnail, Left, Right, Body } from 'native-base'

import { Actions } from 'react-native-router-flux'

import { closeDrawer } from '../actions/drawer'

import logo from '../../assets/images/logo.png'

let styles = {
  links: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#ecf0f1',
  },
}

class SideBar extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: '#2c3e50' }}>
        <Thumbnail
          style={{
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 15,
            resizeMode: 'contain',
            height: 200,
            width: 200,
          }}
          circular
          source={logo}
        />
        <ListItem
          button
          onPress={() => {
            this.props.navigation.navigate('Home')
            this.props.closeDrawer()
          }}
          icon
          style={styles.links}>
          <Left>
            <Icon active name="md-home" />
          </Left>
          <Body>
            <Text>Home</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem
          button
          onPress={() => {
            this.props.navigation.navigate('Challenges')
            this.props.closeDrawer()
          }}
          icon
          style={styles.links}>
          <Left>
            <Icon active name="ios-bulb" />
          </Left>
          <Body>
            <Text>Challenges</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem
          button
          onPress={() => {
            this.props.navigation.navigate('ShowScore')
            this.props.closeDrawer()
          }}
          icon
          style={styles.links}>
          <Left>
            <Icon active name="ios-pie" />
          </Left>
          <Body>
            <Text>Scores</Text>
          </Body>
          <Right />
        </ListItem>
      </Content>
    )
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  }
}

export default connect(null, bindAction)(SideBar)

import React, { Component } from 'react'
import { StatusBar, Platform } from 'react-native'
import { connect } from 'react-redux'
// import { Router, Scene } from 'react-native-router-flux'
import { DrawerNavigator } from 'react-navigation'
import {
  Drawer,
  Text,
  Icon,
  ListItem,
  Content,
  Thumbnail,
  Left,
  Right,
  Body,
  Button,
  Title,
  Header,
  Container,
} from 'native-base'

import { closeDrawer, openDrawer } from './actions/drawer'

import Home from './components/Home'
import SideBar from './components/SideBar'
import Challenges from './components/Challenges'
import Question from './components/Question'
import ShowScore from './components/ShowScore'

// const RouterWithRedux = connect()(Router)

class MyAppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>eTestApp</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="md-more" />
          </Button>
        </Right>
      </Header>
    )
  }
}

const AppHeader = connect()(MyAppHeader)

const ReactNav = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Challenges: {
      screen: Challenges,
    },
    Question: {
      screen: Question,
    },
    ShowScore: {
      screen: ShowScore,
    },
  },
  {
    contentComponent: SideBar,
    initialRouteName: 'Home',
  }
)

class Navigator extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  }
  openDrawer = () => {
    this.drawer._root.open()
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#2ecc71" barStyle="light-content" />
        <AppHeader />
        <ReactNav />
      </Container>
    )
  }
}

export default connect()(Navigator)

import React, { Component } from 'react'
import { StatusBar, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
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
} from 'native-base'

import { closeDrawer } from './actions/drawer'

import Home from './components/Home'
import SideBar from './components/SideBar'
import Challenges from './components/Challenges'
import Question from './components/Question'

const RouterWithRedux = connect()(Router)

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.openDrawer()}>
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

class Navigator extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  }
  openDrawer = () => {
    this.drawer._root.open()
  }

  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref
        }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}
        type="overlay"
        tweenDuration={150}
        tapToClose
        acceptPan={false}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
      >
        <StatusBar backgroundColor="#2ecc71" barStyle="light-content" />
        <AppHeader openDrawer={this.openDrawer.bind(this)} />
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="home" component={Home} />
            <Scene key="challenges" component={Challenges} />
            <Scene key="questions" component={Question} />
          </Scene>
        </RouterWithRedux>
      </Drawer>
    )
  }
}

export default connect()(Navigator)

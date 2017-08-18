import React, { Component } from 'react'
import { StatusBar, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import { Drawer } from 'native-base'

import { closeDrawer } from './actions/drawer'

import Home from './components/Home'
import SideBar from './components/SideBar'
import Challenges from './components/Challenges'

const RouterWithRedux = connect()(Router)

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
        tweenHandler={ratio => {
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          }
        }}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}>
        <StatusBar backgroundColor="#2ecc71" barStyle="light-content" />
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="home" component={Home} />
            <Scene key="challenges" component={Challenges} />
          </Scene>
        </RouterWithRedux>
      </Drawer>
    )
  }
}

export default connect()(Navigator)

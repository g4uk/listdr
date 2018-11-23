import React from 'react'
import {createDrawerNavigator, createAppContainer} from 'react-navigation'

import Home from './Home'
import ProfileContainer from '../Profile/index'

import SideBar from '../../components/SideBar/SideBar'

const DrawNav = createDrawerNavigator(
  {
    Home: { screen: Home },
    Profile: { screen: ProfileContainer }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
)

const HomeContainer = createAppContainer(DrawNav)

export default HomeContainer

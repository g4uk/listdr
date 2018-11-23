import {createStackNavigator, createAppContainer} from 'react-navigation'

import Profile from './Profile'
//import EditScreenOne from './editScreenOne'
//import EditScreenTwo from './editScreenTwo'

const StackNav = createStackNavigator(
  {
     Profile: { screen: Profile }
    // EditScreenOne: { screen: EditScreenOne },
    // EditScreenTwo: { screen: EditScreenTwo }
  },
  {
    initialRouteName: "Profile"
  }
)

const ProfileContainer = createAppContainer(StackNav)

export default ProfileContainer

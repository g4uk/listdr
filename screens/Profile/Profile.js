import React from 'react'
import {AppRegistry, Alert} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Card,
  CardItem,
  Content,
  Right,
  Icon,
  Button,
  Text
} from 'native-base'
import PlatformIcon from '../../components/Icon/PlatformIcon'
//import EditScreenOne from './editScreenOne'
//import EditScreenTwo from './editScreenTwo'

export default class Profile extends React.Component {
  componentDidMount() {
    Alert.alert('No Users Found', 'Oops, Looks like you are not signed in')
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <PlatformIcon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <PlatformIcon name="close" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

Profile.navigationOptions = ({ navigation }) => ({
  header: (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
          <PlatformIcon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Profile</Title>
      </Body>
      <Right />
    </Header>
  )
})

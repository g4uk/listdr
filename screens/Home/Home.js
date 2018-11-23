import React from 'react'
import {Platform, StatusBar} from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from 'native-base'
import PlatformIcon from '../../components/Icon/PlatformIcon'

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <PlatformIcon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Listdr!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Profile')}
          >
            <Text>Goto Profile</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Home

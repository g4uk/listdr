import React from 'react'
import {AppRegistry, Image, ImageBackground, StatusBar, View} from "react-native";
import {
  Container,
  Content,
  Text,
  List,
  ListItem
} from 'native-base'

const routes = ['Home', 'Profile']

class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <ImageBackground
            source={{
              uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png'
            }}
            imageStyle={{resizeMode: 'stretch'}}
            style={{
              position: 'absolute',
              height: 120,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View>
              <Image
                square
                style={{
                  height: 80,
                  width: 70
                }}
                source={{
                  uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png'
                }}
              />
            </View>
          </ImageBackground>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              )
            }}
          />
        </Content>
      </Container>
    )
  }
}

export default SideBar

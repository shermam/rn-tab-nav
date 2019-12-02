import React from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "white"
      },
      labelStyle: {},
      indicatorStyle: {
        backgroundColor: "red"
      },
      upperCaseLabel: false,
      activeTintColor: "black",
      inactiveTintColor: "grey"
    }
  }
);

export default createAppContainer(TabNavigator);

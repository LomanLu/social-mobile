import React, { PureComponent } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./HomeScreen";

const Tab = createMaterialTopTabNavigator();

class HomeRootScreen extends PureComponent {
  static options() {
    return {
      bottomTabs: {
        visible: true
      },
      topBar: {
        visible: false
      },
      bottomTab: {
        icon: require("../../assets/tabbar/home_tab.png")
      }
    };
  }

  render() {
    return (
      <SafeAreaView
        style={{ width: "100%", height: "100%", backgroundColor: "#322" }}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={
            {
              tabBarItemStyle: { width: "auto" },
              tabBarIndicatorStyle: { height: 2, borderRadius: 0.25 }
            }
          }>
            <Tab.Screen name="Home" component={HomeScreen}
                        initialParams={{ componentId: this.props.componentId }} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

export default HomeRootScreen;

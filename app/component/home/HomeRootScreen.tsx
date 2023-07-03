import React, { PureComponent } from "react";
import { SafeAreaView } from "react-native";

class HomeRootScreen extends PureComponent {

  static options() {
    return ({
      bottomTabs: {
        visible: true
      },
      topBar: {
        visible: false
      },
      bottomTab: {
        icon: require("../../assets/tabbar/home_tab.png")
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#322" }}></SafeAreaView>
    );
  }
}

export default HomeRootScreen;

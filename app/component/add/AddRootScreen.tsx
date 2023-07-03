import React, { PureComponent } from "react";
import { SafeAreaView } from "react-native";

class AddRootScreen extends PureComponent {
  static options() {
    return ({
      bottomTabs: {
        visible: true
      },
      topBar: {
        visible: false
      },
      bottomTab: {
        icon: require("../../assets/tabbar/add_tab.png")
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "red" }}></SafeAreaView>
    );
  }
}

export default AddRootScreen;

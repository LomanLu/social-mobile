import React, { PureComponent } from "react";
import { SafeAreaView } from "react-native";

class MeRootScreen extends PureComponent {
  static options() {
    return ({
      bottomTabs: {
        visible: true
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#465543" }}></SafeAreaView>
    );
  }
}

export default MeRootScreen;

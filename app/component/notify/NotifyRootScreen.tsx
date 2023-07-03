import React, { PureComponent } from "react";
import { SafeAreaView } from "react-native";

class NotifyRootScreen extends PureComponent {
  static options() {
    return ({
      bottomTabs: {
        visible: true
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#FFFFFF" }}></SafeAreaView>
    );
  }
}

export default NotifyRootScreen;

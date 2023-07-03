import React, { PureComponent } from "react";
import { SafeAreaView } from "react-native";

class SearchDataRootScreen extends PureComponent {
  static options() {
    return ({
      bottomTabs: {
        visible: true
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#654ee1" }}></SafeAreaView>
    );
  }
}

export default SearchDataRootScreen;


import React, { PureComponent } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { MeRootStyle } from "./MeRootScreen.style";
import MeHeaderComponent from "./MeHeaderComponent";

class MeRootScreen extends PureComponent {

  static options() {
    return ({
      bottomTabs: {
        visible: true,
      },
      topBar: {
        visible: false,
      },
      bottomTab: {
        icon: require("../../assets/tabbar/me_tab.png"),
      },
    });
  }

  render() {
    return (
      <SafeAreaView style={MeRootStyle.root}>
        <MeHeaderComponent />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: "100%",
  },
  boxA: {
    backgroundColor: "#005342",
  },
  boxB: {
    backgroundColor: "#443224",
  },
  boxC: {
    backgroundColor: "#996452",
  },
  boxD: {
    backgroundColor: "#D8D8D8",
  },
});

export default MeRootScreen;

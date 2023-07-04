import { number, string } from "prop-types";
import React, { PureComponent } from "react";
import { SafeAreaView, NativeModules, StatusBar, Platform, View, ScrollView, Image, Text } from "react-native";
import { MeRootStyle } from "./MeRootScreen.style";
import SociabilityView from "./SociabilityView";

class MeRootScreen extends PureComponent {
  static options() {
    return ({
      bottomTabs: {
        visible: true
      },
      topBar: {
        visible: false
      },
      bottomTab: {
        icon: require("../../assets/tabbar/me_tab.png")
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={MeRootStyle.root}>
        <ScrollView alwaysBounceVertical={false} style={MeRootStyle.scrollView}>
          <View style={MeRootStyle.topAction}></View>
          <View style={MeRootStyle.userInfo}>
            <Image
              source={require("../../assets/tabbar/notify_tab.png")}
              style={MeRootStyle.avatar} />
            <Text style={MeRootStyle.name} numberOfLines={1}>Demo</Text>
            <Text style={MeRootStyle.nickName} numberOfLines={1}>@o3.network</Text>
            <View style={MeRootStyle.sociabilityView}>
              <SociabilityView title={"0"}
                               description={"followers"}
                               style={MeRootStyle.followers}
              />

              <Text numberOfLines={1}
                    style={
                      {
                        flex: 0
                      }
                    }
              >
                ‧
              </Text>

              <SociabilityView title={"0"}
                               description={"following"}
                               style={MeRootStyle.following}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default MeRootScreen;

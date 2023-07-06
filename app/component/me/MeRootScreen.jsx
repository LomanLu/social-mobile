import React, { PureComponent } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { MeRootStyle } from "./MeRootScreen.style";
import SociabilityView from "./SociabilityView";
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MeSegmentedBar from "./MeSegmentedBar";

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
        <ScrollView alwaysBounceVertical={false}
                    style={MeRootStyle.scrollView}
                    // stickyHeaderIndices={[0]}
        >
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
                               titleStyle={MeRootStyle.sociabilityNum}
                               descriptionStyle={MeRootStyle.sociabilityDec}
                               style={MeRootStyle.followers}
              />

              <Text numberOfLines={1}
                    style={MeRootStyle.sociabilityPoint}
              >
                ‧
              </Text>

              <SociabilityView title={"0"}
                               description={"following"}
                               titleStyle={MeRootStyle.sociabilityNum}
                               descriptionStyle={MeRootStyle.sociabilityDec}
              />
            </View>
          </View>
          <ScrollableTabView style={MeRootStyle.segmented}
                             scrollWithoutAnimation={true}
                             contentProps={{
                               bounces: false
                             }}
                             renderTabBar={() => <MeSegmentedBar/>}
          >
            <View tabLabel='Created'
                  style={{backgroundColor: 'red', height: 300}} />

            <View tabLabel='Saved'
                  style={{backgroundColor: 'yellow', height: 500}} />

          </ScrollableTabView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default MeRootScreen;

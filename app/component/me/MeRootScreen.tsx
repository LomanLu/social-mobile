import React, { PureComponent } from "react";
import MeHeaderComponent from "./MeHeaderComponent";
import { NestedScrollView, NestedScrollViewHeader } from "@sdcx/nested-scroll";
import { MeRootStyle } from "./MeRootScreen.style";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { SafeAreaView, ScrollView } from "react-native";
import { getAddressBalance, Test } from "../../util/service/api";


const renderScene = SceneMap({
  first: () => {
    return <ScrollView nestedScrollEnabled style={{ backgroundColor: "#fff" }} />;
  },
  second: () => {
    return <ScrollView nestedScrollEnabled style={{ backgroundColor: "#fff" }} />;
  }
});

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

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      selectIndex: 0,
      routes: [
        { key: "first", title: "First" },
        { key: "second", title: "Second" }
      ]
    };
  }

  render() {

    const index = this.state.selectIndex;
    const routes = this.state.routes;

    getAddressBalance<Test>({
      params: { "address": "0x37452DAd7cB716419FD71fbA3650754Ae217f22B", "chain_id": 1, "filter": "1" }
    }).then((res) => {
      console.log(res.data.address);
    }).catch((err) => {
      console.log(err);
    });

    return (
      <SafeAreaView>
        <NestedScrollView style={MeRootStyle.root}>
          <NestedScrollViewHeader stickyHeaderBeginIndex={1}>
            <MeHeaderComponent />
          </NestedScrollViewHeader>
          <TabView
            onIndexChange={index => {
              this.setState({
                selectIndex: index
              });
            }}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            renderTabBar={(props) => {
              return <TabBar
                {...props}
                style={{
                  backgroundColor: "#fff",
                  height: 44
                }}
                labelStyle={{ color: "#000" }}

                indicatorStyle={{
                  backgroundColor: "red",
                  position: "absolute",
                  top: 12,
                  left: 60,
                  width: "20%",
                  height: 24,
                  borderRadius: 12
                }}
              />;
            }}
          />
        </NestedScrollView>
      </SafeAreaView>
    );
  }
}

export default MeRootScreen;

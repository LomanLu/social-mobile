import React, { Component, PureComponent, useEffect, useState } from "react";
import MeHeaderComponent from "./MeHeaderComponent";
import { NestedScrollView, NestedScrollViewHeader } from "@sdcx/nested-scroll";
import { MeRootStyle } from "./MeRootScreen.style";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Animated, SafeAreaView, ScrollView, Text } from "react-native";
import { getAddressBalance, Test } from "../../util/service/api";
import MeTestData from "./MeTestData";
import add = Animated.add;
import { useDispatch } from "react-redux";
import { increase } from "../../util/redux/MeTest/MetestSlice";
import { onFocus } from "@reduxjs/toolkit/dist/query/core/setupListeners";


const renderScene = SceneMap({
  first: (props) => {
    return <ScrollView nestedScrollEnabled style={{ backgroundColor: "#fff" }} />
  },
  second: () => {
    return <ScrollView nestedScrollEnabled style={{ backgroundColor: "#fff" }} />;
  }
});

// class MeRootScreen extends Component {

const MeRootScreen = () => {

  const [index, setIndex] = useState(0)
  const [routes,  setRoutes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" }
  ])

  const {count, add, sub} = MeTestData()

  return (
    <SafeAreaView>
      <NestedScrollView style={MeRootStyle.root}>
        <NestedScrollViewHeader stickyHeaderBeginIndex={1}>
          <MeHeaderComponent count={count}/>
        </NestedScrollViewHeader>
        <TabView
          onIndexChange={(index) => {
            add()
            setIndex(index)
          }}
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={(props) => {
            return <TabBar
              {...props}
              style={{
                backgroundColor: count % 2 === 0 ? "#009815" : '#887421',
                height: 44
              }}
              labelStyle={{ color: "#000" }}

              indicatorStyle={{
                backgroundColor: 'red',
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

MeRootScreen.options = {
  bottomTabs: {
    visible: true
  },
  topBar: {
    visible: false
  },
  bottomTab: {
    icon: require("../../assets/tabbar/me_tab.png")
  }
}

export default MeRootScreen;

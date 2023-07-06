import React, { Component, PureComponent, useState } from "react";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
} from "react-native";

import PropTypes, { number } from "prop-types";

class MeSegmentedBar extends PureComponent {

  static propTypes = {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.scrollValue.addListener((value) => {
      // console.log(value);
    });
  }

  renderTabOption(tab, i) {
    let textColor = this.props.activeTab === i ? "#fff" : "#000";
    return (
      <View style={styles.tab} key={i}>
        <TouchableOpacity onPress={() => this.props.goToPage(i)}>
          <View style={styles.tabItem} >
            <Text style={[styles.tabText, { color: textColor }]}>
              {tab}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {

    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0,  containerWidth / numberOfTabs],
    });

    return (

      <View>

        <Animated.View style={{
          position: 'absolute',
          width: (containerWidth / numberOfTabs) - 80,
          height: 40,
          backgroundColor: 'navy',
          top: 5,
          left: 40,
          alignSelf: 'plex-start',
          transform: [
            { translateX },
          ]
        }} />

        <View style={styles.tabs}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    height: 65,
  },

  tab: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-start",
  },

  tabItem: {
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  tabText: {
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center"
  }

});


export default MeSegmentedBar;

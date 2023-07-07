import React, { PureComponent } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TabBarProps } from "react-native-collapsible-tab-view";

class MeRootTabBar extends PureComponent<TabBarProps> {


  componentDidMount() {
    
  }

  renderTabOption(tab: string, i: number) {
    let textColor = this.props.index.value === i ? "#fff" : "#000";
    return (
      <View style={styles.tab} key={i}>
        <TouchableOpacity onPress={() => this.props.onTabPress(tab)}>
          <View style={styles.tabItem}>
            <Text style={[styles.tabText, { color: textColor }]}>
              {tab}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View style={styles.tabs}>
          {this.props.tabNames.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    height: 45,
    backgroundColor: "red"
  },

  tab: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-start"
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

export default MeRootTabBar;

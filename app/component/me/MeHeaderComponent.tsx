import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SociabilityView from "./SociabilityView";

const MeHeaderComponent = (props: any) => {

  return (
    <View>
      <View style={styles.topAction}></View>
      <View style={styles.userInfo}>
        <Image
          source={require("../../assets/tabbar/notify_tab.png")}
          style={styles.avatar} />
        <Text style={styles.name} numberOfLines={1}>{props.count}</Text>
        <Text style={styles.nickName} numberOfLines={1}>@o3.network</Text>
        <View style={styles.sociabilityView}>
          <SociabilityView title={"0"}
                           description={"followers"}
                           titleStyle={styles.sociabilityNum}
                           descriptionStyle={styles.sociabilityDec}
                           style={styles.followers}
          />

          <Text numberOfLines={1} style={styles.sociabilityPoint}>‧</Text>

          <SociabilityView title={"0"}
                           description={"following"}
                           titleStyle={styles.sociabilityNum}
                           descriptionStyle={styles.sociabilityDec}
          />
        </View>
      </View>
    </View>
  );

};

export const styles = StyleSheet.create({
  topAction: {
    backgroundColor: "#432657",
    height: 44.0
  },

  userInfo: {
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },

  avatar: {
    width: 120,
    height: 120,
    marginTop: 18,
    borderRadius: 60
  },

  name: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 28,
    color: "#000000"
  },

  nickName: {
    marginTop: 10,
    fontWeight: "500",
    fontSize: 16,
    color: "#000000"
  },

  sociabilityView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20
  },

  sociabilityPoint: {
    flex: 0,
    fontWeight: "bold",
    fontSize: 18,
    color: "#000000"
  },

  sociabilityNum: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000000"
  },

  sociabilityDec: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000000"
  },

  followers: {
    justifyContent: "flex-end"
  },

  segmented: {
    marginTop: 24
  }

});

export default MeHeaderComponent;

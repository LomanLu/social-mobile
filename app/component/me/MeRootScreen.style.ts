import { StyleSheet, Platform } from "react-native";

export const MeRootStyle = StyleSheet.create({

  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff"
  },

  scrollView: {
    flexDirection: "column"
  },

  topAction: {
    backgroundColor: "#432657",
    height: 44.0
  },

  userInfo: {
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },

  avatar: {
    width: 120,
    height: 120,
    marginTop: 18,
    borderRadius: 60,
    backgroundColor: "red"
  },

  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000000'
  },

  nickName: {
    marginTop: 10,
    fontWeight: '500',
    fontSize: 16,
    color: '#000000'
  },

  sociabilityView: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  sociabilityPoint: {
    flex: 0,
    fontWeight: "bold",
    fontSize: 18,
    color: '#000000'
  },

  sociabilityNum: {
    fontWeight: "bold",
    fontSize: 16,
    color: '#000000'
  },

  sociabilityDec: {
    fontWeight: "bold",
    fontSize: 16,
    color: '#000000'
  },

  followers: {
    justifyContent: 'flex-end',
  },

  segmented: {
    marginTop: 24
  },

});

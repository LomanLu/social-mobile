import React, { PureComponent, useEffect } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import MeTestData from "../me/MeTestData";
import { getAddressBalance, Test } from "../../util/service/api";

// class NotifyRootScreen extends PureComponent {
const NotifyRootScreen = () => {

  const {count, add, sub} = MeTestData()

  // useEffect(() => {
  //   getAddressBalance<Test>({
  //     params: { "address": "0x37452DAd7cB716419FD71fbA3650754Ae217f22B", "chain_id": 1, "filter": "1" }
  //   }).then((res) => {
  //     console.log(res.data.address);
  //     add()
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }, [])

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#465543" }}>
      <Button title={'加'} onPress={add} />
      <Text style={{alignSelf: 'center'}}>{count}</Text>
      <Button title={'减'} onPress={sub}/>

    </SafeAreaView>
  );
}

NotifyRootScreen.options = {
  bottomTabs: {
    visible: true
  },
  topBar: {
    visible: false
  },
  bottomTab: {
    icon: require("../../assets/tabbar/notify_tab.png")
  }
}

export default NotifyRootScreen;

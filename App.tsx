/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { Navigation } from "react-native-navigation";
import SearchDataRootScreen from "./app/component/search/SearchDataRootScreen";
import NotifyRootScreen from "./app/component/notify/NotifyRootScreen";
import MeRootScreen from "./app/component/me/MeRootScreen";
import AddRootScreen from "./app/component/add/AddRootScreen";
import HomeRootScreen from "./app/component/home/HomeRootScreen";

Navigation.registerComponent("AddRoot", () => AddRootScreen);
Navigation.registerComponent("HomeRoot", () => HomeRootScreen);
Navigation.registerComponent("MeRoot", () => MeRootScreen);
Navigation.registerComponent("NotifyRoot", () => NotifyRootScreen);
Navigation.registerComponent("SearchDataRoot", () => SearchDataRootScreen);

const App = {
  root: {
    bottomTabs: {
      id: "TabBar",
      children: [
        {
          stack: {
            children: [{
              component: {
                name: "HomeRoot"
              }
            }]
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: "SearchDataRoot"
              }
            }]
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: "AddRoot"
              }
            }]
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: "NotifyRoot"
              }
            }]
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: "MeRoot"
              }
            }]
          }
        }
      ]
    }
  }
};

Navigation.setDefaultOptions({
  bottomTabs: {
    visible: false,
    hideShadow: true
  },
  bottomTab: {
    textColor: "#C7D6D6",
    selectedTextColor: "#222624",
    iconInsets: {
      top: 15,
      left: 0,
      right: 0,
      bottom: -10
    }
  },
  topBar: {
    visible: true,
    noBorder: true,
    animate: false,
    scrollEdgeAppearance: {
      noBorder: true,
      active: false
    },
    title: {
      color: "#303433",
      fontSize: 18.0
    },
    backButton: {
      showTitle: false,
      enableMenu: false
    }
  }
});

export default App;

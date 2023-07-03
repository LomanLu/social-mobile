/**
 * @format
 */

import App from "./App";
import { Navigation } from "react-native-navigation";

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(App).then(() => {

  });
});

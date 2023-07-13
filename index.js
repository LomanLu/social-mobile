/**
 * @format
 */

import App from "./App";
import { Navigation } from "react-native-navigation";

import appSchema from './app/model/schema'
import migrations from './app/model/migrations'
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { Database } from "@nozbe/watermelondb";
import { Platform } from "react-native";
// import Web3 from 'web3'
//
// var web3 = new Web3(new Web3.providers.HttpProvider("https://ethereum.publicnode.com"));

const adapter = new SQLiteAdapter({
  dbName: "",
  schema: appSchema,
  migrations: migrations,
  jsi: Platform.OS === 'ios',
  onSetUpError: error => {
    console.log('error: ' + error);
  }
})

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    // Post, // ⬅️ You'll add Models to Watermelon here
  ],
})

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(App).then(() => {

  });
});

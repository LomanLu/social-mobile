/**
 * @format
 */

import App from "./App";
import { Navigation } from "react-native-navigation";

import appSchema from "./app/watermelonDB/schema";
import migrations from "./app/watermelonDB/migrations";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import { Database, Q } from "@nozbe/watermelondb";
import { Platform } from "react-native";
import Post from "./app/watermelonDB/model/Post";

const adapter = new SQLiteAdapter({
  dbName: "",
  schema: appSchema,
  migrations: migrations,
  jsi: Platform.OS === "ios",
  onSetUpError: error => {
    console.log("error: " + error);
  },
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    Post,
  ],
});

setTimeout(async () => {
  console.log("开始查询数据");

  database.get(Post.table).query(
    Q.sortBy("is_pinned", "asc"),
    Q.sortBy("id", "desc"),
  ).fetch().then(list => {
    let item = list[0];
    console.log(`count: ${item.id + item.isPinned}`);
  }).catch(err => {
    console.log(`error: ${err}`);
  });
}, 5000);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(App).then(() => {

  });
});

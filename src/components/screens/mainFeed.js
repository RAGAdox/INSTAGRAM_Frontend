import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import { PostFeed } from "../container";
import config from "../../config";

export default class MainFeed extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: 100 + "%",
          height: 100 + "%",
          marginTop: StatusBar.currentHeight
        }}
      >
        <View style={styles.nav}>
          <Text style={{ fontSize: 30 }}>News Feed</Text>
        </View>

        {/**Post*/}
        <PostFeed />
        {/**End of Post */}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  nav: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center"
  }
});
// InstaClone;

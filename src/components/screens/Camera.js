import React from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";

import { Text, View } from "react-native";
export default class Camera extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          backgroundColor: "#00ff00",
          flex: 1
        }}
      >
        <Text>This is Camera Page</Text>
      </SafeAreaView>
    );
  }
}

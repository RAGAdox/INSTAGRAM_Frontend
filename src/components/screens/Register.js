import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { LinearGradient } from "expo";
export default class Register extends React.Component {
  _login() {
    this.props.navigation.navigate("mainTabs");
  }

  render() {
    return (
      <View style={styles.mainPage}>
        <LinearGradient
          colors={["#905DB3", "#9E3D92", "#C53766"]}
          start={[0, 0]}
          style={styles.mainPage}
        >
          <TextInput placeholder="Enter Username" style={styles.input} />
          <TextInput placeholder="Enter Email Address" style={styles.input} />
          <TextInput placeholder="Enter Password" style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={() => this._login()}>
            <Text style={{ fontSize: 20, color: "rgba(230,230,230,0.9)" }}>
              Register
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainPage: {
    height: 100 + "%",
    width: 100 + "%",
    flex: 1,
    justifyContent: "center"
    //alignItems: "center"
  },
  input: {
    borderWidth: 2,
    padding: 5,
    height: 50,
    borderColor: "transparent",
    backgroundColor: "rgba(255,255,255,0.1)",
    fontSize: 20,
    borderRadius: 10,
    margin: 10
  },
  button: {
    borderColor: "rgba(255,255,255,0.1)",
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    backgroundColor: "transparent",
    padding: 5,
    margin: 10,

    justifyContent: "center",
    alignItems: "center"
  }
});

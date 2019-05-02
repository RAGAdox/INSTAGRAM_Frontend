import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View
} from "react-native";
export default class LoginService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      isPressed: false,
      message: ""
    };
  }
  _login() {
    this.setState({
      isPressed: true
    });
    if (
      this.props.credentials.username == "admin" &&
      this.props.credentials.password == "admin"
    ) {
      this.setState({ success: true });
      this.props.navigation.navigate("mainTabs");
    } else {
      this.setState({
        isPressed: false,
        message: "Invalid Credentials"
      });
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={() => this._login()}>
          <Text style={styles.buttonText}>Login</Text>
          {this.state.isPressed && !this.state.success ? (
            <ActivityIndicator />
          ) : null}
        </TouchableOpacity>
        <Text>{this.state.message}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    borderColor: "rgba(255,255,255,0.1)",
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    backgroundColor: "transparent",
    padding: 5,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 20,
    color: "rgba(230,230,230,0.9)"
  }
});

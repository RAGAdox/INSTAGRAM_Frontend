import React from "react";
import {
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import {
  MainFeed,
  Login,
  Camera,
  Profile,
  Register
} from "./components/screens";
const Tab = createBottomTabNavigator({
  mainFeed: MainFeed,
  camera: Camera,
  profile: Profile
});
const Stack = createStackNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: () => ({
        title: `Login`
      })
    },
    register: {
      screen: Register,
      navigationOptions: () => ({
        title: `Create New Account`
      })
    }
  },
  {
    headerMode: "float",
    mode: "card",
    cardOverlayEnabled: true,
    headerLayoutPreset: "center"
  }
);
const MyNavigator = createSwitchNavigator(
  {
    login: Stack,
    mainTabs: Tab
  },
  {
    initialRouteKey: Stack
  }
);
const AppContainer = createAppContainer(MyNavigator);
export default class InstaClone extends React.Component {
  constructor() {
    super();
  }
  render() {
    //console.warn((SwitchNavigator = { login: Login }));
    return <AppContainer />;
  }
}

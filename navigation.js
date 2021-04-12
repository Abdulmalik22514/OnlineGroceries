import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./screens/onboarding";
import SignIn from "./screens/signIn";
import Number from "./screens/number";
import Verification from "./screens/verification";
import SelectLocation from "./screens/location";
import Login from "./screens/logIn";
import SignUp from "./screens/signup";
import Home from "./screens/home";

const Stack = createStackNavigator();

export default function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="number" component={Number} />
        <Stack.Screen name="verify" component={Verification} />
        <Stack.Screen name="location" component={SelectLocation} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

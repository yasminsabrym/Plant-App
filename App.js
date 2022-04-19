import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tutorial from "./Components/Tutorial";
import Signin from "./Components/Signin";
import Home from "./Components/Home";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerStyle: {
      //     elevation: 0,
      //     shadowOpacity: 0,
      //   },
      // }}
      >
        <Stack.Screen
          name="Tutorial"
          component={Tutorial}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          // options={{
          //   HeaderTitle: () => <Text>555555555</Text>,
          // }}
          options={{
            title: "",
            headerShown: true,
            headerShadowVisible: false,
            headerBackVisible: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{
          //   HeaderTitle: () => <Text>555555555</Text>,
          // }}
          options={{
            title: "",
            headerShown: false,
            headerShadowVisible: false,
            headerBackVisible: true,
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

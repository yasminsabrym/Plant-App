import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tutorial from "./Components/Tutorial";
import Signin from "./Components/Signin";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import { FirstTabNavigator, SecondTabNavigator } from "./TabNav";
// import SecondTabNavigator from "./TabNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          component={FirstTabNavigator}
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
        <Stack.Screen
          name="Profile"
          component={Profile}
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
}

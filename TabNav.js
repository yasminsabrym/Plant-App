import React from "react";
import { StyleSheet, Text, View, AppRegistry, Button } from "react-native";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Homes from "react-native-vector-icons/Fontisto";
import Profiles from "react-native-vector-icons/FontAwesome";
import Pluscircle from "react-native-vector-icons/AntDesign";
import Signin from "./Components/Signin";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Tab1 from "./Components/Tab1";
import Tab2 from "./Components/Tab2";
import Tab3 from "./Components/Tab3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const Toptab = createMaterialTopTabNavigator();

const SecondTabNavigator = () => {
  return (
    <>
      <Profile />
      <Toptab.Navigator
        tabBarPosition="top"
        screenOptions={{
          tabBarStyle: {
            showLabel: false,
            //   marginBottom: "100%",
            marginTop: "0%",
            //   position: "absolute",
            height: 40,
            backgroundColor: "green",
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <Toptab.Screen name="Articles" component={Tab1} />
        <Toptab.Screen name="Species" component={Tab2} />
        <Toptab.Screen name="Likes" component={Tab3} />
        {/* <Toptab.Screen name="Tab2" component={Tab2} /> */}
      </Toptab.Navigator>
    </>
  );
};

const FirstTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          showLabel: false,
          //   marginTop: "15%",
          position: "absolute",
          height: 80,
          backgroundColor: "#fff",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          //   titleStyle: { fontSize: 30 },
          headerShown: false,
          headerShadowVisible: false,
          //   headerBackVisible: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarActiveTintColor: "#2DDA93",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View
                  style={{
                    alignItems: "center",
                    alignText: "center",
                  }}
                >
                  <Homes name="home" size={30} color="#2DDA93" />
                  <Text style={{ color: "#2DDA93", fontWeight: "bold" }}>
                    Home
                  </Text>
                </View>
              );
            } else {
              return <Homes name="home" size={25} color="gray" />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Signin"
        component={Signin}
        options={{
          title: "",
          //   titleStyle: { fontSize: 30 },
          headerShown: false,
          headerShadowVisible: false,
          //   headerBackVisible: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarActiveTintColor: "#48A2F5",
          //   tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View
                  style={{
                    alignItems: "center",
                    height: 140,
                    backgroundColor: "#fff",
                    width: 150,
                    paddingTop: 5,
                    borderRadius: 100,
                  }}
                >
                  <Pluscircle
                    name="pluscircle"
                    size={60}
                    color="#48A2F5"
                    // style={{ marginBottom: 50 }}
                  />
                </View>
              );
            } else {
              return (
                <View
                  style={{
                    alignItems: "center",
                    height: 140,
                    backgroundColor: "#fff",
                    width: 150,
                    paddingTop: 5,
                    borderRadius: 100,
                  }}
                >
                  <Pluscircle
                    name="pluscircle"
                    size={60}
                    color="#48A2F5"
                    // style={{ marginBottom: 50 }}
                  />
                </View>
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SecondTabNavigator}
        options={{
          title: "",
          //   titleStyle: { fontSize: 30 },
          headerShown: false,
          headerShadowVisible: false,
          //   headerBackVisible: false,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarActiveTintColor: "#2DDA93",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <View
                  style={{
                    alignItems: "center",
                    alignText: "center",
                  }}
                >
                  <Profiles name="user" size={30} color="#2DDA93" />
                  <Text style={{ color: "#2DDA93", fontWeight: "bold" }}>
                    Profile
                  </Text>
                </View>
              );
            } else {
              return <Profiles name="user" size={25} color="gray" />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};
export { FirstTabNavigator, SecondTabNavigator };

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "grey",
    height: 100,
  },
});

import {
  StyleSheet,
  Text,
  View,
  Image,
  Link,
  ScrollView,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import bghome from "../assets/ppbg.png";
import pp from "../assets/pp2.jpg";
import Location from "react-native-vector-icons/Ionicons";

import Arrowleft from "react-native-vector-icons/SimpleLineIcons";
import Dotsvertical from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <ImageBackground
          source={bghome}
          style={{ width: "100%", height: 240 }}
          resizeMode="cover"
        >
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              marginLeft: "5%",
              marginTop: "15%",
              justifyContent: "space-between",
              // flexWrap: "wrap",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Arrowleft name="arrow-left" size={25} color="#FFF" />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "column",

                alignItems: "center",

                //   marginTop: "4%",
              }}
            >
              <Image source={pp} style={styles.pp} />

              <Text style={{ fontSize: 25, color: "#fff", marginTop: "5%" }}>
                John Doe
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Location
                  name="location"
                  size={20}
                  color="#FFF"
                  style={{ marginTop: 7, marginRight: 5 }}
                />
                <Text style={{ fontSize: 15, color: "#fff", marginTop: "5%" }}>
                  Los Angeles, California
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Dotsvertical name="dots-vertical" size={25} color="#FFF" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",

    fontFamily: "Avenir",
  },

  pp: {
    borderRadius: 100,
    resizeMode: "cover",
    width: 80,
    height: 80,
  },
});

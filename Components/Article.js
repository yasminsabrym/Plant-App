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
import bghome from "../assets/homeplant2.png";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Card, CardTitle, CardImage } from "react-native-cards";
import image1 from "../assets/plant1.png";
import Arrowleft from "react-native-vector-icons/SimpleLineIcons";
import Dotsvertical from "react-native-vector-icons/MaterialCommunityIcons";
const Article = ({ navigation, route }) => {
  const [fav, setfav] = useState(false);

  const follow = () => {
    setfav(!fav);
  };

  const [heart, setheart] = useState(false);

  const hearts = () => {
    setheart(!heart);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.bg}>
          <ImageBackground
            source={bghome}
            style={{ width: "100%", height: 350 }}
            resizeMode="cover"
          >
            <View
              style={{
                flexDirection: "row",
                width: "90%",
                marginLeft: "5%",
                marginTop: "15%",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Arrowleft name="arrow-left" size={25} color="#FFF" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Dotsvertical name="dots-vertical" size={25} color="#FFF" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            alignSelf: "flex-end",
          }}
        >
          <TouchableOpacity style={{ marginTop: -49 }} onPress={() => hearts()}>
            <Ionicons
              name={heart ? "heart-circle-outline" : "heart-circle-sharp"}
              size={75}
              color="#FF6262"
              style={{
                //   width: 65,
                borderRadius: 100,
                marginRight: 20,
                //   backgroundColor: "#fff",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              backgroundColor: "rgba(47,145,235,0.1)",
              paddingVertical: "1.5%",
              paddingHorizontal: "5%",
              borderRadius: 10,
              color: "#2F91EB",
              marginLeft: "5%",
            }}
          >
            Vegetables
          </Text>
          <Text
            style={{
              backgroundColor: "rgba(47,145,235,0.1)",
              paddingVertical: "1.5%",
              paddingHorizontal: "5%",
              borderRadius: 10,
              color: "#2F91EB",
              marginLeft: "5%",
            }}
          >
            hidden
          </Text>
          <Text
            style={{
              backgroundColor: "rgba(47,145,235,0.1)",
              paddingVertical: "1.5%",
              paddingHorizontal: "5%",
              borderRadius: 10,
              color: "#2F91EB",
              marginLeft: "5%",
            }}
          >
            Vegetables
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>
            Even on Urban Excursions, Finding Mother Nature's Charms
          </Text>
        </View>
        <View style={{ flexDirection: "row", margin: "5%" }}>
          <View style={{ flexDirection: "column", alignSelf: "flex-start" }}>
            <Image source={image1} style={styles.image1} />
          </View>

          <View
            style={{
              flexDirection: "column",
              marginLeft: "5%",
              // paddingBottom: "5%",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text text="John Smith">John Smith</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text text="John Smith">2019 . 01 . 01</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",

              marginLeft: "40%",
              // alignItems: "flex-end",
            }}
          >
            <TouchableOpacity style={{}} onPress={() => follow()}>
              <Text
                style={{
                  paddingHorizontal: "5%",
                  paddingVertical: "2%",
                  backgroundColor: "#2DDA93",
                  alignContent: "center",
                  color: "#FFFFFF",
                  borderRadius: 5,
                }}
              >
                {fav ? "+ follow" : "unfollow"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.article}>
            Public parks aside, getting a dose of nature can be a tricky task
            during an urban escape. But nat ure should and can fit into that
            city getaway, acc ording to Kally Ellis, the founder of the London
            fl orist company McQueens and the in-house florist for the Maybourne
            Hotel Group. {"\n"}
            {"\n"}“Connecting with the natural world wherever you are is a great
            antid ote to jet lag and travel tiredness,” she said. “Plan ts and
            flowers can refresh us, boost our energy and help us
            recalibrate.”Public parks aside, {"\n"}
            {"\n"}getting a dose of nature can be a tricky task during an urban
            escape. But nat ure should and can fit into that city getaway, acc
            ording to Kally Ellis, the founder of the London fl orist company
            McQueens and the in-house florist for the Maybourne Hotel Group.
            “Connecting with the natural world wherever you are is a great antid
            ote to jet lag and travel tiredness,” she said. “Plan ts and flowers
            can refresh us, boost our energy and help us recalibrate.”
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default Article;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    fontFamily: "Avenir",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "5%",
    // marginLeft: "5%",
    marginHorizontal: "5%",
  },
  image1: {
    // marginLeft: 15,
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 50,
  },
  article: {
    fontSize: 16,
    marginHorizontal: "5%",
    marginTop: "5%",
    paddingBottom: "5%",
  },
});

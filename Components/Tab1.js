import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Hearto from "react-native-vector-icons/AntDesign";
import Heart from "react-native-vector-icons/AntDesign";
import Bookmark from "react-native-vector-icons/Ionicons";
import Bookmarko from "react-native-vector-icons/Ionicons";

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-cards";
import image1 from "../assets/homeplant.png";
const Tab1 = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={{ fontSize: 17, color: "#36455A" }}>
          Interesting Articles
        </Text> */}
        {/* <View> */}

        <Card style={styles.card}>
          <CardImage source={image1} style={styles.cover} />
          <CardTitle
            // subtitle="Number 6"
            style={styles.title}
            title="David Austin, Who Breathed Life Into the Rose, Is Dead at 92"
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column", alignSelf: "flex-start" }}>
              <Image source={image1} style={styles.image1} />
            </View>

            <View
              style={{
                flexDirection: "column",
                marginLeft: "5%",
                paddingBottom: "5%",
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
                justifyContent: "flex-end",
                marginLeft: "15%",
              }}
            >
              {/* <TouchableOpacity
                onPress={
                  <>
                    <Heart name="heart" size={21} color="red" />
                  </>
                }
              > */}
              <Bookmarko
                name="bookmark-outline"
                size={25}
                color="#b9b9b9"
                style={{ marginRight: "25%" }}
              />
              {/* </TouchableOpacity> */}
              <Hearto
                name="hearto"
                size={21}
                color="#b9b9b9"
                style={{ marginRight: "0%" }}
              />
            </View>

            {/* <Bookmark name="bookmark" size={25} color="#48A2F5" /> */}
          </View>
          {/* <CardAction separator={true} inColumn={false}> */}
          {/* <CardButton onPress={() => {}} title="Share" color="#FEB557" />
            <CardButton onPress={() => {}} title="Explore" color="#FEB557" /> */}
          {/* </CardAction> */}
        </Card>
      </View>
      {/* </View> */}
    </ScrollView>
  );
};
export default Tab1;
const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "7%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 11,
  },
  card: {
    width: 333,
    // height: 210,
    alignSelf: "center",
    backgroundColor: "#fff",
    // alignItems: "center",
    // marginBottom: "1%",
    marginTop: "5%",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 0.2,
  },
  cover: {
    borderRadius: 10,
  },
  image1: {
    marginLeft: 15,
    width: 28,
    height: 28,
    resizeMode: "cover",
    borderRadius: 50,
  },
});

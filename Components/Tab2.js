import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import Circle from "react-native-vector-icons/Entypo";
import { Card } from "react-native-cards";
import image1 from "../assets/homeplant.png";

const Tab2 = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={{ fontSize: 17, color: "#36455A" }}>
            Your collected Plants
          </Text>
          <View style={{ flexDirection: "row", marginTop: "8%" }}>
            <Circle
              name="circle"
              size={15}
              color="blue"
              style={{ marginRight: "1%" }}
            />
            <Text style={styles.bold}>Alagatre Plant</Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: "2%", marginLeft: "5%" }}
          >
            <Text>02 . 01 . 2019</Text>
          </View>

          <Card style={styles.card}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Image source={image1} style={styles.image1} />
              </View>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Image source={image1} style={styles.image2} />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image source={image1} style={styles.image2} />
                </View>
              </View>
            </View>
          </Card>
          <View style={{ flexDirection: "row", marginTop: "8%" }}>
            <Circle
              name="circle"
              size={15}
              color="blue"
              style={{ marginRight: "1%" }}
            />
            <Text style={styles.bold}>Alagatre Plant</Text>
          </View>
          <View
            style={{ flexDirection: "row", marginTop: "2%", marginLeft: "5%" }}
          >
            <Text>02 . 01 . 2019</Text>
          </View>
          <Card style={styles.card}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Image source={image1} style={styles.image1} />
              </View>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Image source={image1} style={styles.image2} />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image source={image1} style={styles.image2} />
                </View>
              </View>
            </View>
          </Card>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
export default Tab2;

const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "2%",
    marginBottom: "25%",
  },
  bold: {
    fontWeight: "bold",
  },
  card: {
    width: 332,
    height: 330,
    alignSelf: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: "5%",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 0.2,
  },
  image1: {
    width: 146,
    height: 300,
    resizeMode: "stretch",
    borderRadius: 3,
  },
  image2: {
    width: 146,
    height: 146,
    resizeMode: "stretch",
    marginLeft: "6%",
    marginBottom: "6%",
    borderRadius: 3,
  },
});

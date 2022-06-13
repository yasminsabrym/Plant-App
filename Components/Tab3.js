import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Card, CardTitle, CardImage } from "react-native-cards";
import image1 from "../assets/plant1.png";
const Tab3 = ({ navigation, route }) => {
  const [fav, setfav] = useState(false);

  const bookmark = () => {
    setfav(!fav);
  };

  const [heart, setheart] = useState(false);

  const hearts = () => {
    setheart(!heart);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("Article")}>
            <Card style={styles.card}>
              <CardImage source={image1} style={styles.cover} />
              <CardTitle
                style={styles.title}
                title="David Austin, Who Breathed Life Into the Rose, Is Dead at 92"
              />
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ flexDirection: "column", alignSelf: "flex-start" }}
                >
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
                  <TouchableOpacity onPress={() => bookmark()}>
                    <Ionicons
                      name={fav ? "bookmark-outline" : "bookmark"}
                      size={25}
                      color="#48A2F5"
                      style={{ marginRight: "25%" }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => hearts()}>
                    <Ionicons
                      name={heart ? "heart-outline" : "heart"}
                      size={25}
                      color="red"
                      style={{ marginRight: "0%" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Article")}>
            <Card style={styles.card}>
              <CardImage source={image1} style={styles.cover} />
              <CardTitle
                style={styles.title}
                title="David Austin, Who Breathed Life Into the Rose, Is Dead at 92"
              />
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ flexDirection: "column", alignSelf: "flex-start" }}
                >
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
                  <TouchableOpacity onPress={() => bookmark()}>
                    <Ionicons
                      name={fav ? "bookmark-outline" : "bookmark"}
                      size={25}
                      color="#48A2F5"
                      style={{ marginRight: "25%" }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => hearts()}>
                    <Ionicons
                      name={heart ? "heart-outline" : "heart"}
                      size={25}
                      color="red"
                      style={{ marginRight: "0%" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* <CardAction separator={true} inColumn={false}> */}
              {/* <CardButton onPress={() => {}} title="Share" color="#FEB557" />
            <CardButton onPress={() => {}} title="Explore" color="#FEB557" /> */}
              {/* </CardAction> */}
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Tab3;

const styles = StyleSheet.create({
  container: {
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "25%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 11,
  },
  card: {
    width: 333,
    alignSelf: "center",
    backgroundColor: "#fff",
    marginTop: "5%",
    justifyContent: "center",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 0.3,
    overflow: "hidden",
  },
  cover: {
    // height: 200,
    // marginTop: "5%",
    borderRadius: 15,
    // borderTopWidth: 0.2,
  },
  image1: {
    marginLeft: 15,
    width: 28,
    height: 28,
    resizeMode: "cover",
    borderRadius: 50,
  },
});

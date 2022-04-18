import { StatusBar } from "expo-status-bar";
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
import bghome from "../assets/bghome.png";
import pp from "../assets/pp.png";
import { SearchBar } from "react-native-elements";
import Camera from "react-native-vector-icons/Feather";
import Leaf from "react-native-vector-icons/MaterialCommunityIcons";
import Bookopen from "react-native-vector-icons/Feather";
import MyCarousel from "./Carousel";
const Home = () => {
  const [search, usesearch] = useState(1);
  // const [search, setChecked] = useState(false);
  updateSearch = (search) => {
    // search();
  };
  // const { usesearch } = this.state;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.bg}>
          <ImageBackground
            source={bghome}
            style={{ width: "100%", height: 196 }}
            resizeMode="cover"
          >
            <View
              style={{
                flexDirection: "row",
                width: "90%",

                marginTop: "3%",
                justifyContent: "space-between",
                // flexWrap: "wrap",
              }}
            >
              <Text style={styles.title}>Hello Zebby,</Text>
              <Image source={pp} style={styles.pp} />
            </View>
            <Text style={styles.subtitle}>Let’s Learn More About Plants</Text>
            {/* <View style={{ width: "90%" }}> */}
            <SearchBar
              placeholder="search"
              onChangeText={updateSearch}
              // value={search}
              containerStyle={{
                backgroundColor: "transparent",
                width: "100%",
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
              }}
              round
              inputContainerStyle={{
                backgroundColor: "#fff",
                width: "100%",
                alignSelf: "center",
              }}
            />
            {/* </View> */}
          </ImageBackground>
        </View>
        <View style={styles.container2}>
          <View style={styles.boxesContainer} height={100}>
            <View style={styles.box}>
              <Camera
                name="camera"
                size={30}
                style={{ marginBottom: 5 }}
                color="#2DDA93"
              />
              <Text style={{ color: "#000" }}>Identify</Text>
            </View>
            <View style={styles.box}>
              <Leaf
                name="leaf"
                size={30}
                style={{ marginBottom: 5 }}
                color="#2DDA93"
              />
              <Text style={{ color: "#000" }}>Species</Text>
            </View>
            <View style={styles.box}>
              <Bookopen
                name="book-open"
                size={30}
                style={{ marginBottom: 5 }}
                color="#2DDA93"
              />
              <Text style={{ color: "#000" }}>Articles</Text>
            </View>
          </View>
          <Text style={{ marginTop: "7%", fontSize: 16 }}>Plant Types</Text>
        </View>
        <MyCarousel />
      </View>
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  boxesContainer: {
    marginTop: "5%",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  box: {
    // flex: 1,
    backgroundColor: "#fff",
    // paddingVertical: 0,
    paddingHorizontal: 30,
    marginTop: "5%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",

    fontFamily: "Avenir",
  },
  container2: {
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    fontSize: 30,
    color: "white",
    marginTop: "17%",
    marginLeft: "5%",
  },
  pp: {
    marginTop: "17%",
    // alignSelf: "flex-end",
    // alignItems: "flex-end",
    // justifyContent: "flex-end",
    width: "15%",
    height: "50%",
  },
  subtitle: {
    fontSize: 16,
    marginTop: "2%",
    color: "white",
    marginLeft: "5%",
  },
  inputTitle: {
    fontSize: 15,
    color: "grey",
    marginTop: "8%",
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#2DDA93",
    width: "100%",
    fontSize: 17,
    fontWeight: "bold",
    marginTop: "2%",
    // alignSelf: "center",
  },
  Button: {
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#2DDA93",
    padding: 15,
    color: "#fff",
    borderRadius: 10,
    marginBottom: 30,
    width: "100%",
    marginTop: "10%",
  },
  ButtonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
  //   bg: { flex: 1, height: "100%" },
});

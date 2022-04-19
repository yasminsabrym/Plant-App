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
} from "react-native";

import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
const slides = [
  {
    key: 1,
    text: "You can identify the plants you don't know through your camera",
    title: "Identify Plants",
    image: require("../assets/1.png"),
  },
  {
    key: 2,
    text: "Let's learn about the many plant species that exist in this world",
    title: "Learn Many Plants Species",
    image: require("../assets/2.png"),
  },
  {
    key: 3,
    title: "Read Many Articles About Plant",
    text: "Let's learn more about beautiful plants and read many articles about plants and gardening",
    image: require("../assets/3.png"),
    // backgroundColor: "#22bcb5",
  },
];
//
const Tutorial = ({ navigation, route }) => {
  const [state, setState] = useState(1);
  _renderItem = ({ item }) => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={item.image} style={styles.headerImage} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </ScrollView>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setState({ state: true });
  };
  _done = () => {
    return (
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Signin")}
      >
        <Text style={styles.ButtonText}>SIGN IN</Text>
      </TouchableOpacity>
    );
  };
  _next = () => {
    return <Text style={styles.Button}>NEXT </Text>;
  };
  // render();
  if (state) {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        dotClickEnabled={true}
        activeDotStyle={{ backgroundColor: "#2DDA93" }}
        bottomButton
        renderDoneButton={_done}
        renderNextButton={_next}
      />
    );
  } else {
    // return (this.props.navigation.navigate("Login"));
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
};
export default Tutorial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerImage: {
    marginTop: "40%",
  },
  title: {
    fontSize: 20,
    marginTop: "10%",
  },
  text: {
    width: "65%",
    textAlign: "center",
    marginTop: "5%",
  },
  Button: {
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#2DDA93",
    padding: 15,
    color: "#fff",
    borderRadius: 10,
    marginBottom: 30,
  },
  ButtonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});

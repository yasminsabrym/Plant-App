import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
const slides = [
  {
    key: 1,
    text: "You can identify the plants you don't know through your camera",
    title: "Identify Plants",
    image: require("./assets/1.png"),
    // backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    text: "Let's learn about the many plant species that exist in this world",
    title: "Learn Many Plants Species",
    image: require("./assets/2.png"),
    // backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Read Many Articles About Plant",
    text: "Let's learn more about beautiful plants and read many articles about plants and gardening",
    image: require("./assets/3.png"),
    // backgroundColor: "#22bcb5",
  },
];

export default class Tutorial extends React.Component {
  state = {
    showRealApp: false,
  };
  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.headerImage} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  _done = () => {
    return (
      <Text
        style={{
          fontSize: 15,
          textAlign: "center",
          backgroundColor: "#2DDA93",
          padding: 15,
          color: "white",
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        SIGN UP
      </Text>
    );
  };
  _next = () => {
    return (
      <Text
        style={{
          fontSize: 15,
          textAlign: "center",
          backgroundColor: "#2DDA93",
          padding: 15,
          color: "white",
          borderRadius: 10,
          marginBottom: 30,
        }}
      >
        NEXT{" "}
      </Text>
    );
  };
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
          dotClickEnabled={true}
          activeDotStyle={{ backgroundColor: "#2DDA93" }}
          bottomButton
          renderDoneButton={this._done}
          renderNextButton={this._next}
          // buttonStyle={{ backgroundColor: "#2DDA93" }}
          // showSkipButton={true}
          // renderSkipButton={this._onSkip}
          // showPrevButton={true}
          // renderPrevButton={this._onPrev}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    // marginTop: 150,
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
});

// import Tutorial from "./Components/Tutorial";
// import { useNavigation, useRoute } from "@react-navigation/native";

// function TutorialScreen(props) {
//   const navigation = useNavigation();
//   const route = useRoute();
//   return <Tutorial {...props} navigation={navigation} route={route} />;
// }

// const Stack = createStackNavigator();

// <Stack.Screen
// name="AdCancellation"
// component={AdCancellationScreen}
// options={{
//   cardStyle: { backgroundColor: "#fff" },
//   animationTypeForReplace: state.isSignout ? "pop" : "push",
//   header: () => {
//     "none";
//   },
// }}
// />

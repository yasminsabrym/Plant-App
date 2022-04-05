import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
const slides = [
  {
    key: 1,
    // title: "Title 1",
    text: "Say something cool",
    image: require("./assets/1.png"),
    // backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    // title: "Title 2",
    text: "Other cool stuff",
    image: require("./assets/2.png"),
    // style: { marginTop: 100 },
    // backgroundColor: "#febe29",
  },
  // {
  //   key: 3,
  //   title: 'Rocket guy',
  //   text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
  //   image: require('./assets/3.jpg'),
  //   backgroundColor: '#22bcb5',
  // }
];

export default class Tutorial extends React.Component {
  state = {
    showRealApp: false,
  };
  _renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.headerImage} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
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
          //   activeDotStyle={{ backgroundColor: "rgba(255, 255, 0, .9)" }}
          showSkipButton={true}
          showPrevButton={true}
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
    marginTop: 450,
  },
  headerImage: {
    marginTop: 200,
  },
});

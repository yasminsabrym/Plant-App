import React, { useRef, useState, useEffect } from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import homeplant from "../assets/homeplant.png";
const MyCarousel2 = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  //   const goForward = () => {
  //     carouselRef.current.snapToNext();
  //   };
  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const ENTRIES1 = [
    {
      title: "#Mini",
      // subtitle: "68 Types of Plants",

      illustration: require("../assets/plant1.png"), //  "../assets/homeplant.png",
      //   illustration: "https://i.imgur.com/UPrs1EWl.jpg",
      // illustration: require("../assets/2.png"),
    },
    {
      title: "#Homely",
      // subtitle: "102 Type Of Plants",
      illustration: require("../assets/plant2.png"), //  "../assets/homeplant.png",

      // illustration: "https://i.imgur.com/UPrs1EWl.jpg",
    },
    {
      title: "#Cute",
      // subtitle: "102 Type Of Plants",
      illustration: require("../assets/plant3.png"), //  "../assets/homeplant.png",

      // illustration: "https://i.imgur.com/MABUbpDl.jpg",
    },
    {
      title: "#Mini",

      illustration: require("../assets/plant1.png"),
      //  "../assets/homeplant.png",
      // subtitle: "68 Types of Plants",
      // illustration: "https://i.imgur.com/KZsmUi2l.jpg",
    },
  ];

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.illustration}
          containerStyle={styles.imageContainer}
          style={styles.image}
          fadeDuration={500}
          dimensions={{ width: 200, height: 200 }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {item.subtitle}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={goForward}>
        <Text>+</Text>
      </TouchableOpacity> */}
      <Carousel
        ref={carouselRef}
        sliderWidth={600}
        sliderHeight={200}
        itemWidth={146}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        windowSize={1}
      />
    </View>
  );
};
export default MyCarousel2;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: "5%",
    marginRight: "5%",
    marginLeft: -225,
    // flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    height: 160,
  },
  item: {
    width: 128,
    height: 190,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "transparent",
    borderRadius: 3,
  },
  title: {
    alignSelf: "flex-start",
    justifyContent: "flex-start",

    marginTop: -35,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "50%",
    fontWeight: "bold",
    fontSize: 13,
    color: "black",
    paddingLeft: "8%",
    marginLeft: "0%",
  },

  image: {
    // ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    // width: 20,
  },
});

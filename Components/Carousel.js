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

const MyCarousel = (props) => {
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
      title: "Home Plants",
      subtitle: "68 Types of Plants",

      illustration: require("../assets/homeplant.png"), //  "../assets/homeplant.png",
      //   illustration: "https://i.imgur.com/UPrs1EWl.jpg",
      // illustration: require("../assets/2.png"),
    },
    {
      title: "Huge Plants",
      subtitle: "102 Type Of Plants",
      illustration: require("../assets/homeplant2.png"), //  "../assets/homeplant.png",

      // illustration: "https://i.imgur.com/UPrs1EWl.jpg",
    },
    {
      title: "Huge Plants",
      subtitle: "102 Type Of Plants",
      illustration: require("../assets/homeplant.png"), //  "../assets/homeplant.png",

      // illustration: "https://i.imgur.com/MABUbpDl.jpg",
    },
    {
      title: "Home Plants",

      illustration: require("../assets/homeplant2.png"),
      //  "../assets/homeplant.png",
      subtitle: "68 Types of Plants",
      // illustration: "https://i.imgur.com/KZsmUi2l.jpg",
    },
  ];
  function Cameras() {
    const devices = useCameraDevices("wide-angle-camera");
    const device = devices.back;

    if (device == null)
      <>
        <LoadingView />
      </>;
    else
      <>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      </>;
  }
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
        sliderWidth={500}
        sliderHeight={200}
        itemWidth={300}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        windowSize={1}
      />
    </View>
  );
};
export default MyCarousel;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: "5%",
    marginRight: "5%",
    marginLeft: -100,
    // flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    height: 160,
  },
  item: {
    width: 307,
    height: 140,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "transparent",
    borderRadius: 3,
  },
  title: {
    marginTop: -110,
    paddingBottom: 20,
    fontSize: 20,
    color: "white",
    marginLeft: "3%",
  },
  subtitle: {
    marginTop: -20,
    paddingBottom: 5,
    fontSize: 12,
    color: "white",
    marginLeft: "3%",
  },
  image: {
    // ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    // width: 20,
  },
});

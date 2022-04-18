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
import Checkbox from "expo-checkbox";

import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Signin = ({ navigation, route }) => {
  //   const [state, setState] = useState(1);
  const [isChecked, setChecked] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>Let’s Learn More About Plants</Text>
        <Text style={styles.inputTitle}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder=" Username"
          maxLength={15}
          //   onChangeText={(newText) => setText(newText)}
          //   defaultValue={text}
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          maxLength={20}
          //   onChangeText={(newText) => setText(newText)}
          //   defaultValue={text}
        />
        <View
          style={{
            flexDirection: "row",
            marginRight: "5%",
            // justifyContent: "space-around",
            // justifyItems: "space-around",
            // alignItems: "center",
            // alignContent: "space-around",
            // textAlign: "center",
            marginTop: "9%",
          }}
        >
          {/* <View style={{ height: 20 }}> */}
          <Checkbox
            //   style={}
            value={isChecked}
            style={{ margin: "0%" }}
            onValueChange={setChecked}
            color={isChecked ? "#2DDA93" : undefined}
          />
          <Text style={{ marginLeft: "3%" }}>Remember Me</Text>
          <Text style={{ marginLeft: "41%" }}>forgot password</Text>
          {/* </View> */}
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.ButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: "center" }}>
          Don’t Have Account? {/* <Link> */}
          <Text style={{ color: "#2DDA93" }}>Sign up</Text>
          {/* </Link> */}
        </Text>
      </View>
    </ScrollView>
  );
};
export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // marginTop: 150,
    marginLeft: "5%",
    marginRight: "5%",
    fontFamily: "Avenir",
    // marginTop: "1%",
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 16,
    marginTop: "2%",
    color: "grey",
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
});

// import Tutorial from "./Components/Tutorial";
// import { useNavigation, useRoute } from "@react-navigation/native";

// function Tutorialcreen(props) {
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

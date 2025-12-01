import { View, StyleSheet, Pressable, Alert } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Subheading from "./Subheading";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBarBackground,
    height: 80,
    gap: 15
  },
  text: {
    color: theme.colors.appBarText
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert("Repositories pressed")}>
        <Subheading style={styles.text}>Repositories</Subheading>
      </Pressable>

      <Pressable onPress={() => Alert.alert("Sign in pressed")}>
        <Subheading style={styles.text}>Sign in</Subheading>
      </Pressable>
    </View>
  );
};

export default AppBar;

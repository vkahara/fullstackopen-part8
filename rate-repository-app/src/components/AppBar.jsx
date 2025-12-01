import { View, StyleSheet, Pressable, Alert } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Subheading from "./Subheading";
import { Link } from "react-router-native";

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
      <Link to='/'>
        <Subheading style={styles.text}>Repositories</Subheading>
      </Link>

      <Link to='/sign-in'>
        <Subheading style={styles.text}>Sign in</Subheading>
      </Link>
    </View>
  );
};

export default AppBar;

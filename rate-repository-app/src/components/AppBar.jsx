import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Subheading from "./Subheading";
import { Link } from "react-router-native";
import { ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    height: 80
  },
  text: {
    color: theme.colors.appBarText
  },
  scrollView: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    gap: 15
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <Link to='/'>
          <Subheading style={styles.text}>Repositories</Subheading>
        </Link>

        <Link to='/sign-in'>
          <Subheading style={styles.text}>Sign in</Subheading>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;

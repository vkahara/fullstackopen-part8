import { View, StyleSheet, Pressable, Alert } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Subheading from './Subheading';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBarBackground,
    height: 80,
    // ...
  },
  text: {
    color: theme.colors.appBarText,
  }
});

const AppBar = (props) => {
  return <Pressable
  onPress={() => Alert.alert('App Bar pressed')}>
    <View style={styles.container}><Subheading style={styles.text}>{props.title}</Subheading></View>
    </Pressable>;
};

export default AppBar;

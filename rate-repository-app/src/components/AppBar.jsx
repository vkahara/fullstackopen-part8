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

  },
  text: {
    color: theme.colors.appBarText,
  }
});

//each app bar has flexGrow 1 so they share the space equally  
const AppBar = (props) => {
  return <Pressable
  style={{ flexGrow: 1 }}
  onPress={() => Alert.alert('App Bar pressed')}>
    <View style={styles.container}><Subheading style={styles.text}>{props.title}</Subheading></View>
    </Pressable>;
};

export default AppBar;

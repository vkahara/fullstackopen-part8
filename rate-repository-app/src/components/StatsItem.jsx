import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
});

//if value >= 1000, show in k format
const formatValue = (value) => {
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'k';
  }
  return value.toString();
};

const StatsItem = ({ value, label }) => (
  <View style={styles.container}>
    <Text fontWeight="bold">{formatValue(value)}</Text>
    <Text color="textSecondary">{label}</Text>
  </View>
);

export default StatsItem;
import { StyleSheet, View } from 'react-native';

import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
  appBarContainer: {
    flexDirection: 'row',
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appBarContainer}>
        <AppBar title="Repositories"/>
        <AppBar title="Sign in"/>
        
      </View>
      
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
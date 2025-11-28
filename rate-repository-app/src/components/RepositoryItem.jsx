import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';
import Subheading from './Subheading';
import StatsItem from './StatsItem';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryItemBackground,
    padding: 15,
    marginVertical: 3,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 15,
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  mainInfoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },

  languageBox: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 4,
    marginTop: 4,
  },
  languageText: {
    color: 'white',
  },
});

const RepositoryItem = ({fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl}) => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
        <Image source={{uri: ownerAvatarUrl}} style={styles.avatar} />
        <View style={styles.mainInfoContainer}>
            <Subheading>{fullName}</Subheading>
            <Text color="textSecondary">{description}</Text>
            <View style={styles.languageBox}>
              <Text style={styles.languageText}>{language}</Text>
            </View>
        </View>
    </View>
    <View style={styles.statsContainer}>
        <StatsItem value={stargazersCount} label="Stars" />
        <StatsItem value={forksCount} label="Forks" />
        <StatsItem value={reviewCount} label="Reviews" />
        <StatsItem value={ratingAverage} label="Rating" />
    </View>
  </View>
);

export default RepositoryItem;
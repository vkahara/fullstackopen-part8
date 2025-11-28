import { View, Text } from 'react-native';

const RepositoryItem = ({fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl}) => (
  <View>
    <Text>Full name: {fullName}</Text>
    <Text>Description: {description}</Text>
    <Text>Language: {language}</Text>
    <Text>Forks: {forksCount}</Text>
    <Text>Stars: {stargazersCount}</Text>
    <Text>Rating: {ratingAverage}</Text>
    <Text>Reviews: {reviewCount}</Text>
    <Text>Owner Avatar URL: {ownerAvatarUrl}</Text>
  </View>
);

export default RepositoryItem;
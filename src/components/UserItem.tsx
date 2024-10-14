import { memo } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { User } from '@hooks/useFetchUsers';

const { width: screenWidth } = Dimensions.get('window');

const ITEM_WIDTH = screenWidth * 0.9;

type Props = {
  item: User;
};

const UserItem = ({ item }: Props) => {
  return (
    <View style={styles.itemCard}>
      <Text style={styles.accentText}>{item.name}</Text>
      <Text style={styles.tinyText}>{item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    width: ITEM_WIDTH,
  },
  accentText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tinyText: {
    color: '#666',
    fontSize: 14,
  },
});

export default memo(UserItem);

import Constants from 'expo-constants';
import { FlatList, StyleSheet, View } from 'react-native';
import { User } from '@hooks/useFetchUsers';
import UserItem from '@components/UserItem';

type IProps = {
  data: User[] | null;
};

export default function Users({ data }: IProps) {
  const keyExtractor = (item: User) => String(item.id);

  const renderItem = ({ item }: { item: User }) => <UserItem item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={keyExtractor}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});

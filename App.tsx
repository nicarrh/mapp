import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import useFetchUsers from '@hooks/useFetchUsers';
import Loading from '@components/Loading';
import Users from '@screens/Users';

export default function App() {
  const { data, error, loading } = useFetchUsers(
    'https://jsonplaceholder.typicode.com/users',
  );

  const renderError = () => (
    <View style={styles.container}>
      <Text style={styles.tinyText}>{error}</Text>
    </View>
  );

  if (error) return renderError();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {loading && !data ? <Loading /> : <Users data={data} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyText: {
    color: '#666',
    fontSize: 14,
  },
});

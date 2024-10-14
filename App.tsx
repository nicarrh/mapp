import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import useFetchUsers from '@hooks/useFetchUsers';
import Loading from '@components/Loading';
import Users from '@screens/Users';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  _experiments: {
    profilesSampleRate: 1.0,
  },
});
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
      {loading && !data ? (
        <Loading />
      ) : (
        <Users
          data={data}
          onEndReached={() => {
            Sentry.captureException(new Error('No hay más datos disponibles'));
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  tinyText: {
    color: '#666',
    fontSize: 14,
  },
  btn: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

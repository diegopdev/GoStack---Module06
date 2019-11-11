import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => (
  <View style={styles.container}>
    <Text>Teste</Text>
  </View>
);

export default App;

import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World Again!</Text>
      <Text style={{ margin: 16, padding: 8, borderColor: 'red', borderWidth: 1 }}>
        Hello World!
      </Text>
      <Button title="Press me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { 
    margin: 8, 
    padding: 16, 
    borderColor: 'blue', 
    borderWidth: 2 }
});

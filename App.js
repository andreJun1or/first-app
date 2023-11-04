import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Teste from './Teste';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 30
      }}>Cuida macho</Text>
      <Text>Digite algo: </Text>
      <Teste style={styles.input} placeholder='Digite algo' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  input: {
    borderWidth: 1,
    borderColor: 'thistle',
    borderRadius: 5,
    marginTop: 3,
    padding: 5,
    width: '100%'
  }
});

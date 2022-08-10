import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, TextInput } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("");
  const postandFetch = (e) => {
    axios.post("http://10.0.2.2:8000/api/",{
      name:name
    }).then((d) => {
      setName(d.data.name)
    })
  }
  return (
    <View style={styles.container}>
      <Text>Hey {name}, from the database</Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter your name"
        />
        <Button
        title='Save'
        onPress={postandFetch}
        />
      </SafeAreaView>
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300
  }
});

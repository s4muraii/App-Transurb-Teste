import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('./Img/logo.png')} style={styles.logo} />
    </View>
  )
}

const Body = () => {
  return (
    <View style={styles.body}>
      <View style={styles.caixabody}>
        <View style={styles.recarga}>
          <Text>Realizar Recarga</Text>
        </View>
      </View>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E06C00',
    height: 100,
    width: '100%',
  },

  logo: {
    flex: 1,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },

  body: {
    display: 'flex',
    backgroundColor: 'red',
    width: '100%',
    height: 500,
  },

  caixabody: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },

  recarga: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
    width: '40%',
  }
});

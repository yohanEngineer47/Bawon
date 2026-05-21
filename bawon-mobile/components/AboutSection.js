import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default function AboutSection() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/bout1.png')}
        style={styles.image}
      />

      <View style={styles.card}>
        <Text style={styles.title}>À propos</Text>

        <Text style={styles.text}>
          BAWON+ est né d’une ambition : révéler l’excellence haïtienne au monde.
          Inspiré par l’héritage culturel et spirituel d’Haïti.
        </Text>
      </View>

      <Image
        source={require('../assets/images/bout2.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f0e7',
    paddingVertical: 30,
    alignItems: 'center',
  },

  image: {
    width: '90%',
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
  },

  card: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },

  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },

  text: {
    color: '#000',
    textAlign: 'center',
    lineHeight: 28,
    fontSize: 16,
  },
});

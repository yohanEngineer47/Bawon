import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const data = [
  'Cacao',
  'Boutique',
  'Spiritualité',
  'Parfums',
  'Divers',
  'Prêt à porter',
  'Santé',
  'Musique',
  'Hôtellerie',
];

export default function PolesGrid() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NOS PÔLES</Text>

      <View style={styles.grid}>
        {data.map((item, index) => (
          <ImageBackground
            key={index}
            source={require('../assets/images/grid-bg.png')}
            style={styles.card}
            imageStyle={{ borderRadius: 16 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          </ImageBackground>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#000',
  },

  title: {
    color: '#d9b790',
    textAlign: 'center',
    fontSize: 38,
    marginBottom: 30,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    height: 160,
    marginBottom: 16,
    overflow: 'hidden',
    borderRadius: 16,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

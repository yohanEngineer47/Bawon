import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

export default function HeroSection() {
  return (
    <ImageBackground
      source={require('../assets/images/hero-bg.png')}
      style={styles.hero}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>BAWON</Text>

        <Text style={styles.tagline}>
          L'excellence haïtienne,{"\n"}
          du passé vers le futur.
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.whiteBtn}>
            <Text style={styles.whiteBtnText}>Découvrir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.purpleBtn}>
            <Text style={styles.purpleBtnText}>Investir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    height: 700,
    justifyContent: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    color: '#ffb11f',
    fontSize: 64,
    fontWeight: '200',
    letterSpacing: 4,
    marginBottom: 25,
  },

  tagline: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 34,
    fontStyle: 'italic',
    marginBottom: 40,
  },

  buttons: {
    width: '100%',
    gap: 18,
  },

  whiteBtn: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  whiteBtnText: {
    color: '#111',
    fontWeight: '700',
});

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.socials}>
        <Image source={require('../assets/icons/youtube.png')} style={styles.icon} />
        <Image source={require('../assets/icons/x.png')} style={styles.icon} />
        <Image source={require('../assets/icons/facebook.png')} style={styles.icon} />
      </View>

      <View style={styles.nav}>
        <TouchableOpacity>
          <Text style={styles.link}>Services</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Réserver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.95)',
  },

  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 20,
  },

  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  link: {
    color: '#d9b790',
    fontWeight: '600',
  },

  button: {
    backgroundColor: '#d9b790',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: '#000',
    fontWeight: '700',
  },
});

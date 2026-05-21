import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Video from 'react-native-video';

export default function VideoSection() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.text}>Éveillez vos sens</Text>
        <Text style={styles.text}>Connectez-vous</Text>
        <Text style={styles.text}>Explorez les mystères</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Abonnez-vous</Text>
        </TouchableOpacity>
      </View>

      <Video
        source={require('../assets/videos/pub.mp4')}
        style={styles.video}
        repeat
        muted
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 20,
  },

  left: {
    marginBottom: 30,
  },

  text: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 12,
  },

  button: {
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
  },

  video: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
});

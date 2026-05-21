import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import VideoSection from '../components/VideoSection';
import PolesGrid from '../components/PolesGrid';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <PolesGrid />
        <ContactSection />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

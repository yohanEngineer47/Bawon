import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function ContactSection() {
  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: '',
  });

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    if (
      !form.nom ||
      !form.prenom ||
      !form.email ||
      !form.message
    ) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    Alert.alert(
      'Message envoyé',
      'Votre message a bien été envoyé.'
    );

    setForm({
      nom: '',
      prenom: '',
      email: '',
      message: '',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.logo}>BAWON+</Text>
      </View>

      <Text style={styles.title}>NOUS CONTACTER</Text>

      <Text style={styles.subtitle}>
        15 rue du Château, Paris, France
      </Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nom"
          placeholderTextColor="#777"
          style={styles.input}
          value={form.nom}
          onChangeText={(text) => handleChange('nom', text)}
        />

        <TextInput
          placeholder="Prénom"
          placeholderTextColor="#777"
          style={styles.input}
          value={form.prenom}
          onChangeText={(text) => handleChange('prenom', text)}
        />

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#777"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          value={form.email}
          onChangeText={(text) => handleChange('email', text)}
        />

        <TextInput
          placeholder="Rédigez votre message ici..."
          placeholderTextColor="#777"
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          style={styles.textarea}
          value={form.message}
          onChangeText={(text) => handleChange('message', text)}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 50,
  },

  logoBox: {
    backgroundColor: '#000',
    width: 140,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },

  logo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 2,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    color: '#111',
    marginBottom: 10,
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 35,
    fontSize: 14,
  },

  form: {
    gap: 16,
  },

  input: {
    borderWidth: 2,
    borderColor: '#111',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111',
  },

  textarea: {
    borderWidth: 2,
    borderColor: '#111',
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 160,
    fontSize: 16,
    color: '#111',
  },

  button: {
    backgroundColor: '#111',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

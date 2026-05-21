import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

export default function HomePage() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HERO */}
      <ImageBackground
      source={require('@/assets/images/img_back.png')}
        style={styles.hero}
      >
        <View style={styles.overlay}>
          {/* HEADER */}
          <View style={styles.header}>
            <View style={styles.logoRow}>
              <Image
                source={require('@/assets/images/ytb.png')}
                style={styles.icon}
              />

              <Image
                source={require('@/assets/images/x.png')}
                style={styles.icon}
              />

              <Image
                source={require('@/assets/images/facebook.png')}
                style={styles.icon}
              />
            </View>

            <View style={styles.nav}>
              <TouchableOpacity>
                <Text style={styles.navText}>Services</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.navText}>Contact</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cta}>
                <Text style={styles.ctaText}>Réserver</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* HERO CONTENT */}
          <View style={styles.heroContent}>
            <Text style={styles.title}>BAWON</Text>

            <Text style={styles.tagline}>
              L'excellence haïtienne,{'\n'}
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
        </View>
      </ImageBackground>

      {/* ABOUT */}
      <View style={styles.about}>
        <Image
          source={require('@/assets/images/bout1.png')}
          style={styles.aboutImage}
        />

        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>À propos</Text>

          <Text style={styles.aboutText}>
            BAWON+ est né d’une ambition :
            révéler l’excellence haïtienne
            au monde.
          </Text>
        </View>

        <Image
          source={require('@/assets/images/bout2.png')}
          style={styles.aboutImage}
        />
      </View>

      {/* VIDEO SECTION */}
      <View style={styles.videoSection}>
        <View>
          <Text style={styles.videoText}>Éveillez vos sens</Text>
          <Text style={styles.videoText}>Connectez-vous</Text>
          <Text style={styles.videoText}>Explorez les mystères</Text>

          <TouchableOpacity style={styles.subscribeBtn}>
            <Text style={styles.subscribeText}>
              Abonnez-vous
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('@/assets/videos/pub.mp4')}
          style={styles.videoPreview}
        />
      </View>

      {/* NOS PÔLES */}
      <View style={styles.poles}>
        <Text style={styles.sectionTitle}>NOS PÔLES</Text>

        <View style={styles.grid}>
          {[
            'Cacao',
            'Boutique',
            'Spiritualité',
            'Parfums',
            'Divers',
            'Prêt à porter',
            'Santé',
            'Musique',
            'Hôtellerie',
          ].map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* CONTACT */}
      <View style={styles.contact}>
        <View style={styles.brandBox}>
          <Text style={styles.brandText}>BAWON+</Text>
        </View>

        <Text style={styles.contactTitle}>
          NOUS CONTACTER
        </Text>

        <Text style={styles.contactMeta}>
          15 rue du Château, Paris, France
        </Text>

        <TextInput
          placeholder="Nom"
          placeholderTextColor="#777"
          style={styles.input}
        />

        <TextInput
          placeholder="Prénom"
          placeholderTextColor="#777"
          style={styles.input}
        />

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#777"
          style={styles.input}
        />

        <TextInput
          placeholder="Votre message..."
          placeholderTextColor="#777"
          multiline
          style={styles.textarea}
        />

        <TouchableOpacity style={styles.sendBtn}>
          <Text style={styles.sendText}>Envoyer</Text>
        </TouchableOpacity>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          MENTIONS LÉGALES
        </Text>

        <Text style={styles.footerText}>
          POLITIQUE DE CONFIDENTIALITÉ
        </Text>

        <Text style={styles.copy}>
          © 2026 BAWON+
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  hero: {
    height: 850,
    justifyContent: 'center',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    marginBottom: 80,
  },

  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 25,
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

  navText: {
    color: '#d9b790',
    fontSize: 15,
  },

  cta: {
    backgroundColor: '#d9b790',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 8,
  },

  ctaText: {
    color: '#000',
    fontWeight: '700',
  },

  heroContent: {
    alignItems: 'center',
    marginTop: 80,
  },

  title: {
    fontSize: 70,
    color: '#ffb11f',
    fontWeight: '200',
    letterSpacing: 5,
    marginBottom: 25,
  },

  tagline: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 34,
    fontStyle: 'italic',
    marginBottom: 35,
  },

  buttons: {
    width: '100%',
    gap: 16,
  },

  whiteBtn: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  whiteBtnText: {
    color: '#111',
    fontWeight: '700',
  },

  purpleBtn: {
    backgroundColor: '#6a3be0',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  purpleBtnText: {
    color: '#fff',
    fontWeight: '700',
  },

  about: {
    backgroundColor: '#f3eee3',
    paddingVertical: 40,
    alignItems: 'center',
  },

  aboutImage: {
    width: '90%',
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
  },

  aboutCard: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  aboutTitle: {
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
    color: '#000',
  },

  aboutText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 17,
    lineHeight: 28,
  },

  videoSection: {
    backgroundColor: '#000',
    padding: 25,
    gap: 30,
  },

  videoText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 12,
  },

  subscribeBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 15,
  },

  subscribeText: {
    color: '#fff',
  },

  videoPreview: {
    width: '100%',
    height: 240,
    borderRadius: 16,
  },

  poles: {
    padding: 20,
  },

  sectionTitle: {
    textAlign: 'center',
    color: '#d9b790',
    fontSize: 40,
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
    borderWidth: 2,
    borderColor: '#975811',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  cardText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },

  contact: {
    backgroundColor: '#fff',
    padding: 24,
  },

  brandBox: {
    backgroundColor: '#000',
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },

  brandText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },

  contactTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 10,
  },

  contactMeta: {
    textAlign: 'center',
    color: '#444',
    marginBottom: 30,
  },

  input: {
    borderWidth: 2,
    borderColor: '#111',
    padding: 14,
    marginBottom: 15,
  },

  textarea: {
    borderWidth: 2,
    borderColor: '#111',
    minHeight: 160,
    padding: 14,
    textAlignVertical: 'top',
    marginBottom: 20,
  },

  sendBtn: {
    backgroundColor: '#111',
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 8,
  },

  sendText: {
    color: '#fff',
    fontWeight: '700',
  },

  footer: {
    backgroundColor: '#000',
    padding: 30,
    alignItems: 'center',
  },

  footerText: {
    color: '#888',
    marginBottom: 12,
  },

  copy: {
    color: '#555',
    marginTop: 20,
  },
});


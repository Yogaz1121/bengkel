import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../core/colors';

/// Bagian atas sidebar: logo kunci pas + nama aplikasi.
export default function SidebarHeader() {
  return (
    <View style={styles.row}>
      <View style={styles.logo}>
        <Ionicons name="construct" size={22} color="white" />
      </View>
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.title}>MekanikPro</Text>
        <Text style={styles.subtitle}>WORKSHOP POS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingTop: 28, paddingBottom: 24 },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.primaryBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { color: 'white', fontWeight: '700', fontSize: 16 },
  subtitle: { color: '#94A3B8', fontSize: 10, letterSpacing: 1.2, marginTop: 2 },
});

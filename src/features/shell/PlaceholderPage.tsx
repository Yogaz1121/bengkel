import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../core/colors';

/// Halaman sementara untuk menu yang belum dibuat.
export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Halaman {title} (belum dibuat)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: colors.textMuted, fontSize: 16 },
});

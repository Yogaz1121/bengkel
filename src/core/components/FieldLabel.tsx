import { StyleSheet, Text } from 'react-native';
import { colors } from '../colors';

/// Teks label kecil di atas kolom isian.
export default function FieldLabel({ text }: { text: string }) {
  return <Text style={styles.label}>{text}</Text>;
}

const styles = StyleSheet.create({
  label: { fontSize: 12, fontWeight: '600', color: colors.textDark, marginBottom: 6 },
});

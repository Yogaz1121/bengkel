import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../core/colors';
import { formatRupiah } from '../../../core/formatRupiah';

type Props = { totalBiaya: number; saving: boolean; onSimpan: () => void };

/// Footer bawah: TOTAL BIAYA + tombol SIMPAN & CETAK NOTA.
export default function FooterAksi({ totalBiaya, saving, onSimpan }: Props) {
  return (
    <View style={styles.footer}>
      <Text style={styles.total}>TOTAL BIAYA: {formatRupiah(totalBiaya)}</Text>
      <Pressable style={[styles.button, saving && { opacity: 0.6 }]} disabled={saving} onPress={onSimpan}>
        {saving ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>SIMPAN & CETAK NOTA</Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  total: { fontSize: 18, fontWeight: '800', color: colors.textDark, marginRight: 24 },
  button: {
    backgroundColor: colors.primaryBlue,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: '700', fontSize: 14 },
});

import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../core/colors';
import { formatRupiah } from '../../../core/formatRupiah';

type Props = { visible: boolean; total: number; onClose: () => void };

/// Dialog "Nota Berhasil Dibuat" setelah data tersimpan.
export default function SuksesModal({ visible, total, onClose }: Props) {
  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <View style={styles.circle}>
            <Ionicons name="checkmark" size={28} color={colors.primaryBlue} />
          </View>
          <Text style={styles.title}>Nota Berhasil Dibuat</Text>
          <Text style={styles.desc}>Data servis telah tersimpan dan siap diproses.</Text>

          <View style={styles.box}>
            <View style={styles.boxRow}>
              <Text style={styles.boxLabel}>Total biaya</Text>
              <Text style={styles.boxValue}>{formatRupiah(total)}</Text>
            </View>
            <View style={[styles.boxRow, { marginTop: 6 }]}>
              <Text style={styles.boxLabel}>Status</Text>
              <Text style={[styles.boxValue, { color: colors.primaryBlue }]}>Menunggu proses</Text>
            </View>
          </View>

          <Pressable style={styles.button} onPress={onClose}>
            <Text style={{ color: 'white', fontWeight: '600' }}>Tutup</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(15,23,42,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: { width: 360, maxWidth: '92%', backgroundColor: 'white', borderRadius: 16, padding: 24, alignItems: 'center' },
  circle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 18, fontWeight: '700', marginTop: 16, color: colors.textDark },
  desc: { fontSize: 13, color: colors.textMuted, marginTop: 6, textAlign: 'center' },
  box: {
    alignSelf: 'stretch',
    marginTop: 16,
    padding: 12,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
  },
  boxRow: { flexDirection: 'row', justifyContent: 'space-between' },
  boxLabel: { fontSize: 12, color: colors.textMuted },
  boxValue: { fontSize: 12, fontWeight: '700', color: colors.textDark },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: colors.primaryBlue,
  },
});

import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../core/colors';
import { formatRupiah } from '../../../core/formatRupiah';
import { SparepartItem, subtotalItem } from '../../../data/models';

type Props = {
  items: SparepartItem[];
  onTambah: () => void;
  onHapus: (index: number) => void;
};

/// Baris 5: tabel sparepart yang dipilih + tombol "+ Tambah Sparepart".
export default function SparepartSection({ items, onTambah, onHapus }: Props) {
  return (
    <View>
      {items.length > 0 && (
        <View style={styles.table}>
          <View style={[styles.row, styles.head]}>
            <Text style={[styles.headText, { flex: 4 }]}>Sparepart</Text>
            <Text style={[styles.headText, { flex: 1 }]}>Qty</Text>
            <Text style={[styles.headText, { flex: 2 }]}>Harga Satuan</Text>
            <Text style={[styles.headText, { flex: 2 }]}>Subtotal</Text>
            <View style={{ width: 40 }} />
          </View>
          {items.map((it, i) => (
            <View key={it.nama} style={[styles.row, styles.bodyRow]}>
              <Text style={[styles.cell, { flex: 4 }]}>{it.nama}</Text>
              <Text style={[styles.cell, { flex: 1 }]}>{it.qty}</Text>
              <Text style={[styles.cell, { flex: 2 }]}>{formatRupiah(it.harga)}</Text>
              <Text style={[styles.cell, { flex: 2, fontWeight: '700' }]}>
                {formatRupiah(subtotalItem(it))}
              </Text>
              <Pressable style={{ width: 40, alignItems: 'center' }} onPress={() => onHapus(i)}>
                <Ionicons name="trash-outline" size={18} color="#EF4444" />
              </Pressable>
            </View>
          ))}
        </View>
      )}

      <Pressable style={styles.button} onPress={onTambah}>
        <Text style={styles.buttonText}>+ Tambah Sparepart (Opsional)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  table: { borderWidth: 1, borderColor: colors.border, borderRadius: 8, marginBottom: 12, overflow: 'hidden' },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 },
  head: { backgroundColor: colors.background, paddingVertical: 10 },
  headText: { fontSize: 12, fontWeight: '700', color: colors.textMuted },
  bodyRow: { paddingVertical: 10, borderTopWidth: 1, borderTopColor: colors.border },
  cell: { fontSize: 13, color: colors.textDark },
  button: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: { color: colors.primaryBlue, fontWeight: '600', fontSize: 14 },
});

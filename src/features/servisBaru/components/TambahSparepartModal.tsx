import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../core/colors';
import Dropdown from '../../../core/components/Dropdown';
import FieldLabel from '../../../core/components/FieldLabel';
import { formatRupiah } from '../../../core/formatRupiah';
import { daftarSparepart, labelSparepart } from '../../../data/dummyData';
import { SparepartItem } from '../../../data/models';

type Props = {
  visible: boolean;
  onClose: () => void;
  onTambah: (item: SparepartItem) => void;
};

/// Dialog pilih sparepart + qty.
export default function TambahSparepartModal({ visible, onClose, onTambah }: Props) {
  const [nama, setNama] = useState<string | null>(null);
  const [qty, setQty] = useState(1);

  const terpilih = daftarSparepart.find((s) => s.nama === nama);

  const tutup = () => {
    setNama(null);
    setQty(1);
    onClose();
  };

  const tambahkan = () => {
    if (!terpilih) return;
    onTambah({ nama: terpilih.nama, harga: terpilih.harga, qty });
    tutup();
  };

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={tutup}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.title}>Tambah Sparepart</Text>

          <FieldLabel text="Pilih Sparepart" />
          <Dropdown
            value={nama}
            options={daftarSparepart.map((s) => ({ label: labelSparepart(s), value: s.nama }))}
            placeholder="Pilih sparepart"
            onChange={setNama}
          />

          <View style={{ height: 16 }} />
          <FieldLabel text="Jumlah (Qty)" />
          <View style={styles.qtyRow}>
            <Pressable
              style={[styles.qtyBtn, qty <= 1 && { opacity: 0.4 }]}
              disabled={qty <= 1}
              onPress={() => setQty(qty - 1)}
            >
              <Ionicons name="remove" size={20} color={colors.textDark} />
            </Pressable>
            <Text style={styles.qtyText}>{qty}</Text>
            <Pressable style={styles.qtyBtn} onPress={() => setQty(qty + 1)}>
              <Ionicons name="add" size={20} color={colors.textDark} />
            </Pressable>
          </View>

          <View style={styles.subtotalBox}>
            <Text style={{ color: colors.textMuted }}>Subtotal</Text>
            <Text style={{ fontWeight: '700' }}>{formatRupiah((terpilih?.harga ?? 0) * qty)}</Text>
          </View>

          <View style={styles.actions}>
            <Pressable style={styles.cancel} onPress={tutup}>
              <Text style={{ color: colors.primaryBlue, fontWeight: '600' }}>Batal</Text>
            </Pressable>
            <Pressable
              style={[styles.add, !terpilih && { opacity: 0.4 }]}
              disabled={!terpilih}
              onPress={tambahkan}
            >
              <Text style={{ color: 'white', fontWeight: '600' }}>Tambahkan</Text>
            </Pressable>
          </View>
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
  card: { width: 440, maxWidth: '92%', backgroundColor: 'white', borderRadius: 14, padding: 24 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 20, color: colors.textDark },
  qtyRow: { flexDirection: 'row', alignItems: 'center' },
  qtyBtn: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyText: { fontSize: 18, fontWeight: '700', marginHorizontal: 20 },
  subtotalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 12,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
  },
  actions: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 24 },
  cancel: { paddingVertical: 10, paddingHorizontal: 16, marginRight: 8 },
  add: { backgroundColor: colors.primaryBlue, paddingVertical: 10, paddingHorizontal: 18, borderRadius: 8 },
});

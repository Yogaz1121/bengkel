import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../core/colors';
import { Jasa, SparepartItem, subtotalItem, TransaksiServis } from '../../data/models';
import { TransaksiRepository } from '../../data/repositories/TransaksiRepository';
import DataPelangganSection from './components/DataPelangganSection';
import FooterAksi from './components/FooterAksi';
import JasaSection from './components/JasaSection';
import SparepartSection from './components/SparepartSection';
import SuksesModal from './components/SuksesModal';
import TambahSparepartModal from './components/TambahSparepartModal';

/// Halaman "Input Servis Kendaraan".
/// File ini berisi STATE dan LOGIKA saja; tampilan dipecah ke folder components/.
export default function ServisBaruPage({ repository }: { repository: TransaksiRepository }) {
  // ---------- STATE ----------
  const [nama, setNama] = useState('');
  const [plat, setPlat] = useState('');
  const [hp, setHp] = useState('');
  const [keluhan, setKeluhan] = useState('');
  const [merek, setMerek] = useState<string | null>(null);
  const [jasa, setJasa] = useState<Jasa | null>(null);
  const [spareparts, setSpareparts] = useState<SparepartItem[]>([]);

  const [namaError, setNamaError] = useState<string>();
  const [platError, setPlatError] = useState<string>();
  const [saving, setSaving] = useState(false);
  const [showTambah, setShowTambah] = useState(false);
  const [showSukses, setShowSukses] = useState(false);
  const [totalTersimpan, setTotalTersimpan] = useState(0);

  // ---------- KALKULASI ----------
  const hargaJasa = jasa?.harga ?? 0;
  const totalSparepart = spareparts.reduce((sum, s) => sum + subtotalItem(s), 0);
  const totalBiaya = hargaJasa + totalSparepart;

  // ---------- AKSI ----------
  const tambahSparepart = (item: SparepartItem) => {
    setSpareparts((lama) => {
      const ada = lama.find((s) => s.nama === item.nama);
      if (ada) {
        // sparepart sama -> gabung qty
        return lama.map((s) => (s.nama === item.nama ? { ...s, qty: s.qty + item.qty } : s));
      }
      return [...lama, item];
    });
  };

  const hapusSparepart = (index: number) => {
    setSpareparts((lama) => lama.filter((_, i) => i !== index));
  };

  const validasi = (): boolean => {
    const eNama = nama.trim() ? undefined : 'Nama lengkap wajib diisi';
    const ePlat = plat.trim() ? undefined : 'No. plat wajib diisi';
    setNamaError(eNama);
    setPlatError(ePlat);
    return !eNama && !ePlat;
  };

  const resetForm = () => {
    setNama('');
    setPlat('');
    setHp('');
    setKeluhan('');
    setMerek(null);
    setJasa(null);
    setSpareparts([]);
    setNamaError(undefined);
    setPlatError(undefined);
  };

  const simpan = async () => {
    if (!validasi()) return;

    setSaving(true);
    try {
      const transaksi: TransaksiServis = {
        nama_pelanggan: nama.trim(),
        plat_nomor: plat.trim().toUpperCase(),
        no_hp: hp.trim(),
        merek_kendaraan: merek ?? '',
        keluhan: keluhan.trim(),
        jasa_servis: jasa?.nama ?? '',
        harga_jasa: hargaJasa,
        list_sparepart: spareparts.map((s) => ({ ...s, subtotal: subtotalItem(s) })),
        total_biaya: totalBiaya,
        status: 'Menunggu Proses',
        created_at: new Date(),
      };

      await repository.simpan(transaksi);

      setTotalTersimpan(transaksi.total_biaya);
      setShowSukses(true);
    } catch (e) {
      console.warn('Gagal menyimpan', e);
    } finally {
      setSaving(false);
    }
  };

  const tutupSukses = () => {
    setShowSukses(false);
    resetForm();
  };

  // ---------- TAMPILAN ----------
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.breadcrumb}>Dashboard {'>'} Servis Baru</Text>
          <Text style={styles.title}>Input Servis Kendaraan</Text>

          <View style={styles.card}>
            <DataPelangganSection
              nama={nama}
              setNama={setNama}
              namaError={namaError}
              plat={plat}
              setPlat={setPlat}
              platError={platError}
              hp={hp}
              setHp={setHp}
              merek={merek}
              setMerek={setMerek}
              keluhan={keluhan}
              setKeluhan={setKeluhan}
            />

            <View style={styles.divider} />

            <JasaSection jasa={jasa} onChange={setJasa} />
            <View style={{ height: 16 }} />
            <SparepartSection
              items={spareparts}
              onTambah={() => setShowTambah(true)}
              onHapus={hapusSparepart}
            />
          </View>
        </View>
      </ScrollView>

      <FooterAksi totalBiaya={totalBiaya} saving={saving} onSimpan={simpan} />

      <TambahSparepartModal
        visible={showTambah}
        onClose={() => setShowTambah(false)}
        onTambah={tambahSparepart}
      />
      <SuksesModal visible={showSukses} total={totalTersimpan} onClose={tutupSukses} />
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { padding: 24, alignItems: 'center' },
  container: { width: '100%', maxWidth: 1000 },
  breadcrumb: { color: colors.textMuted, fontSize: 12 },
  title: { fontSize: 26, fontWeight: '800', color: colors.textDark, marginTop: 6, marginBottom: 20 },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
  },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 24 },
});

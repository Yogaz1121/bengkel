import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../core/colors';
import { MemoryTransaksiRepository } from '../../data/repositories/MemoryTransaksiRepository';
import ServisBaruPage from '../servisBaru/ServisBaruPage';
import PlaceholderPage from './PlaceholderPage';
import Sidebar from './components/Sidebar';
import { daftarMenu } from './menuData';

/// Kerangka utama: Sidebar di kiri + halaman aktif di kanan.
export default function HomeShell() {
  const [menuIndex, setMenuIndex] = useState(1); // 'Servis Baru' aktif

  // Penyimpanan data. Nanti ganti dengan versi Firebase di SINI SAJA.
  const repository = useMemo(() => new MemoryTransaksiRepository(), []);

  return (
    <View style={styles.root}>
      <Sidebar selectedIndex={menuIndex} onSelect={setMenuIndex} />
      <View style={styles.content}>
        {menuIndex === 1 ? (
          <ServisBaruPage repository={repository} />
        ) : (
          <PlaceholderPage title={daftarMenu[menuIndex].label} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, flexDirection: 'row', backgroundColor: colors.background },
  content: { flex: 1 },
});

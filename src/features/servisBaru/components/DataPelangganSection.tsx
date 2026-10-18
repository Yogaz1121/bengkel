import { View } from 'react-native';
import Dropdown from '../../../core/components/Dropdown';
import LabeledField from '../../../core/components/LabeledField';
import ResponsiveRow from '../../../core/components/ResponsiveRow';
import TextField from '../../../core/components/TextField';
import { daftarMerek } from '../../../data/dummyData';

type Props = {
  nama: string;
  setNama: (v: string) => void;
  namaError?: string;
  plat: string;
  setPlat: (v: string) => void;
  platError?: string;
  hp: string;
  setHp: (v: string) => void;
  merek: string | null;
  setMerek: (v: string) => void;
  keluhan: string;
  setKeluhan: (v: string) => void;
};

/// Baris 1-3: data pelanggan, kendaraan, dan keluhan.
export default function DataPelangganSection(p: Props) {
  return (
    <View>
      {/* Baris 1 */}
      <ResponsiveRow
        left={
          <LabeledField label="Nama Lengkap *">
            <TextField value={p.nama} onChangeText={p.setNama} placeholder="Ketik nama" error={p.namaError} />
          </LabeledField>
        }
        right={
          <LabeledField label="No. Plat Kendaraan *">
            <TextField
              value={p.plat}
              onChangeText={p.setPlat}
              placeholder="Contoh: DK 1234 AB"
              autoCapitalize="characters"
              error={p.platError}
            />
          </LabeledField>
        }
      />

      <View style={{ height: 16 }} />

      {/* Baris 2 */}
      <ResponsiveRow
        left={
          <LabeledField label="Nomor HP">
            <TextField
              value={p.hp}
              onChangeText={(t) => p.setHp(t.replace(/[^0-9+]/g, ''))}
              placeholder="Contoh: 081234..."
              keyboardType="phone-pad"
            />
          </LabeledField>
        }
        right={
          <LabeledField label="Merek/Jenis Kendaraan">
            <Dropdown
              value={p.merek}
              options={daftarMerek.map((m) => ({ label: m, value: m }))}
              placeholder="Contoh: Honda Vario"
              onChange={p.setMerek}
            />
          </LabeledField>
        }
      />

      <View style={{ height: 16 }} />

      {/* Baris 3 */}
      <LabeledField label="Keluhan Kendaraan">
        <TextField
          value={p.keluhan}
          onChangeText={p.setKeluhan}
          placeholder="Jelaskan keluhan pelanggan di sini..."
          multiline
        />
      </LabeledField>
    </View>
  );
}

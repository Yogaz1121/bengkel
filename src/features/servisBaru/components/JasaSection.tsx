import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../core/colors';
import Dropdown from '../../../core/components/Dropdown';
import LabeledField from '../../../core/components/LabeledField';
import ResponsiveRow from '../../../core/components/ResponsiveRow';
import TextField from '../../../core/components/TextField';
import { formatRupiah } from '../../../core/formatRupiah';
import { daftarJasa, labelJasa } from '../../../data/dummyData';
import { Jasa } from '../../../data/models';

type Props = { jasa: Jasa | null; onChange: (jasa: Jasa) => void };

/// Baris 4: pilih jasa servis + harga jasa (terisi otomatis, tidak bisa diketik).
export default function JasaSection({ jasa, onChange }: Props) {
  return (
    <ResponsiveRow
      left={
        <LabeledField label="Pilih Jasa Servis">
          <Dropdown
            value={jasa?.nama ?? null}
            options={daftarJasa.map((j) => ({ label: labelJasa(j), value: j.nama }))}
            placeholder="Pilih jasa servis"
            onChange={(nama) => onChange(daftarJasa.find((j) => j.nama === nama)!)}
          />
        </LabeledField>
      }
      right={
        <LabeledField label="Harga Jasa">
          <View>
            <TextField value={formatRupiah(jasa?.harga ?? 0)} readOnly />
            <Ionicons name="lock-closed-outline" size={16} color={colors.textMuted} style={styles.lock} />
          </View>
        </LabeledField>
      }
    />
  );
}

const styles = StyleSheet.create({
  lock: { position: 'absolute', right: 14, top: 14 },
});

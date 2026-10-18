import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../colors';

export type DropdownOption = { label: string; value: string };

type Props = {
  value: string | null;
  options: DropdownOption[];
  placeholder: string;
  onChange: (value: string) => void;
};

/// Dropdown buatan sendiri (tanpa library tambahan), jalan di web & HP.
export default function Dropdown({ value, options, placeholder, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const terpilih = options.find((o) => o.value === value);

  return (
    <>
      <Pressable style={styles.box} onPress={() => setOpen(true)}>
        <Text
          numberOfLines={1}
          style={[styles.text, !terpilih && { color: '#94A3B8' }]}
        >
          {terpilih ? terpilih.label : placeholder}
        </Text>
        <Ionicons name="chevron-down" size={16} color={colors.textMuted} />
      </Pressable>

      <Modal transparent animationType="fade" visible={open} onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <View style={styles.card}>
            <ScrollView>
              {options.map((o) => (
                <Pressable
                  key={o.value}
                  style={[styles.option, o.value === value && styles.optionActive]}
                  onPress={() => {
                    onChange(o.value);
                    setOpen(false);
                  }}
                >
                  <Text style={styles.optionText}>{o.label}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  text: { flex: 1, fontSize: 14, color: colors.textDark, marginRight: 8 },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(15,23,42,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 380,
    maxWidth: '90%',
    maxHeight: '70%',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 6,
  },
  option: { paddingHorizontal: 16, paddingVertical: 14 },
  optionActive: { backgroundColor: '#EFF6FF' },
  optionText: { fontSize: 14, color: colors.textDark },
});

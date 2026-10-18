import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../../core/colors';

type Props = {
  label: string;
  icon: ComponentProps<typeof Ionicons>['name'];
  active: boolean;
  onPress: () => void;
};

/// Satu baris menu di sidebar. Biru jika sedang aktif.
export default function SidebarItem({ label, icon, active, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.item, active && styles.itemActive]}>
      <Ionicons name={icon} size={20} color={active ? 'white' : '#94A3B8'} />
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
      {active && <Ionicons name="chevron-forward" size={18} color="white" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 2,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
  },
  itemActive: { backgroundColor: colors.primaryBlue },
  label: { flex: 1, marginLeft: 12, fontSize: 14, fontWeight: '500', color: '#CBD5E1' },
  labelActive: { color: 'white', fontWeight: '600' },
});

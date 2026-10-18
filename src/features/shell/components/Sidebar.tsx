import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../core/colors';
import { daftarMenu } from '../menuData';
import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarItem from './SidebarItem';

type Props = { selectedIndex: number; onSelect: (index: number) => void };

/// Sidebar kiri, lebar tetap 240px.
export default function Sidebar({ selectedIndex, onSelect }: Props) {
  return (
    <View style={styles.sidebar}>
      <SidebarHeader />
      <Text style={styles.section}>MENU UTAMA</Text>
      {daftarMenu.map((m, i) => (
        <SidebarItem
          key={m.label}
          label={m.label}
          icon={m.icon}
          active={i === selectedIndex}
          onPress={() => onSelect(i)}
        />
      ))}
      <View style={{ flex: 1 }} />
      <SidebarFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: { width: 240, backgroundColor: colors.sidebar },
  section: {
    color: '#64748B',
    fontSize: 11,
    letterSpacing: 1.2,
    fontWeight: '600',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 10,
  },
});

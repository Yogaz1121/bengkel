import { ReactNode } from 'react';
import { View, useWindowDimensions } from 'react-native';

/// Dua kolom sejajar di layar lebar, otomatis menjadi satu kolom di layar sempit.
export default function ResponsiveRow({ left, right }: { left: ReactNode; right: ReactNode }) {
  const { width } = useWindowDimensions();
  const sempit = width < 900; // sidebar 240px + konten

  if (sempit) {
    return (
      <View>
        {left}
        <View style={{ height: 16 }} />
        {right}
      </View>
    );
  }
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
      <View style={{ flex: 1 }}>{left}</View>
      <View style={{ width: 20 }} />
      <View style={{ flex: 1 }}>{right}</View>
    </View>
  );
}

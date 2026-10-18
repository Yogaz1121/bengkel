import { ReactNode } from 'react';
import { View } from 'react-native';
import FieldLabel from './FieldLabel';

/// Label + kolom isian dalam satu kesatuan.
export default function LabeledField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View>
      <FieldLabel text={label} />
      {children}
    </View>
  );
}

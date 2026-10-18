import { Ionicons } from '@expo/vector-icons';
import { ComponentProps } from 'react';

type IconName = ComponentProps<typeof Ionicons>['name'];

/// Daftar menu di sidebar.
export const daftarMenu: { label: string; icon: IconName }[] = [
  { label: 'Dashboard', icon: 'grid-outline' },
  { label: 'Servis Baru', icon: 'add-circle-outline' },
  { label: 'Servis Aktif', icon: 'document-text-outline' },
  { label: 'Riwayat Servis', icon: 'time-outline' },
];

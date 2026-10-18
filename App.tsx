import { StatusBar } from 'expo-status-bar';
import HomeShell from './src/features/shell/HomeShell';

/// TITIK AWAL APLIKASI: hanya menampilkan HomeShell.
export default function App() {
  return (
    <>
      <StatusBar style="light" hidden />
      <HomeShell />
    </>
  );
}

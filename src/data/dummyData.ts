import { formatRupiah } from '../core/formatRupiah';
import { Jasa, SparepartMaster } from './models';

/// Data pilihan untuk dropdown. Nanti bisa diganti data dari database.
export const daftarMerek = [
  'Honda Vario 125',
  'Honda Beat',
  'Yamaha NMAX',
  'Honda Scoopy',
  'Yamaha Aerox',
  'Lainnya',
];

export const daftarJasa: Jasa[] = [
  { nama: 'Servis Ringan', harga: 45000 },
  { nama: 'Servis Lengkap/Tune Up', harga: 75000 },
  { nama: 'Ganti Kampas Rem', harga: 35000 },
  { nama: 'Cek Kelistrikan', harga: 30000 },
];

export const daftarSparepart: SparepartMaster[] = [
  { nama: 'Oli MPX2', harga: 50000 },
  { nama: 'Kampas Rem Depan', harga: 55000 },
  { nama: 'Busi CPR9', harga: 25000 },
];

/// Teks yang tampil di dropdown.
export const labelJasa = (j: Jasa) => `${j.nama} (${formatRupiah(j.harga)})`;
export const labelSparepart = (s: SparepartMaster) => `${s.nama} - ${formatRupiah(s.harga)}`;

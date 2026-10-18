/// Bentuk-bentuk data yang dipakai aplikasi.

export type Jasa = { nama: string; harga: number };

/// Sparepart yang tersedia untuk dipilih (belum ada jumlahnya).
export type SparepartMaster = { nama: string; harga: number };

/// Sparepart yang sudah dipilih untuk satu transaksi, lengkap dengan jumlahnya.
export type SparepartItem = { nama: string; harga: number; qty: number };

export const subtotalItem = (item: SparepartItem) => item.harga * item.qty;

/// Satu nota/transaksi servis kendaraan.
/// Nama field sengaja sama dengan yang akan dipakai di Firestore nanti.
export type TransaksiServis = {
  nama_pelanggan: string;
  plat_nomor: string;
  no_hp: string;
  merek_kendaraan: string;
  keluhan: string;
  jasa_servis: string;
  harga_jasa: number;
  list_sparepart: (SparepartItem & { subtotal: number })[];
  total_biaya: number;
  status: string;
  created_at: Date;
};

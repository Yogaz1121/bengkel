import { TransaksiServis } from '../models';

/// KONTRAK penyimpanan data.
/// Halaman hanya tahu "simpan" dan "ambilSemua", tidak peduli datanya disimpan di mana.
/// Saat siap memakai Firebase, cukup buat FirestoreTransaksiRepository
/// yang mengikuti kontrak ini, tanpa mengubah tampilan sama sekali.
export interface TransaksiRepository {
  simpan(transaksi: TransaksiServis): Promise<void>;
  ambilSemua(): Promise<TransaksiServis[]>;
}

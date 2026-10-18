import { TransaksiServis } from '../models';
import { TransaksiRepository } from './TransaksiRepository';

/// Penyimpanan sementara di memori (hilang saat aplikasi ditutup/di-refresh).
/// Dipakai selama belum ada Firebase.
export class MemoryTransaksiRepository implements TransaksiRepository {
  private data: TransaksiServis[] = [];

  async simpan(transaksi: TransaksiServis): Promise<void> {
    await new Promise((r) => setTimeout(r, 400)); // simulasi loading
    this.data.push(transaksi);
  }

  async ambilSemua(): Promise<TransaksiServis[]> {
    return [...this.data];
  }
}

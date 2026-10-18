/// Mengubah angka menjadi format rupiah. Contoh: 45000 -> "Rp 45.000"
export function formatRupiah(nilai: number): string {
  const s = Math.abs(Math.trunc(nilai)).toString();
  const denganTitik = s.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${nilai < 0 ? '-' : ''}Rp ${denganTitik}`;
}

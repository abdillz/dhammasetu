# DHAMMASETU (prototipe)

Prototipe aplikasi web progresif (PWA) untuk esai "DHAMMASETU: Jembatan Digital IABN Sriwijaya bagi Siswa Buddha yang Belajar Agama Sendirian". Semua nama, sekolah, vihara, dan angka di dalamnya adalah data contoh.

## Isi folder

- `index.html`: kerangka halaman
- `styles.css`: tampilan
- `app.js`: seluruh layar dan logika demo
- `manifest.webmanifest`, `sw.js`, `icons/`: agar bisa dipasang di layar utama ponsel dan dibuka tanpa internet

## Cara membuka

1. Ekstrak zip, lalu klik dua kali `index.html`. Prototipe langsung jalan di browser.
2. Fitur pasang ke layar utama (PWA) baru aktif setelah di-hosting (lihat bawah).

## Cara online di Vercel (seperti JEDA)

1. Buka vercel.com, masuk, pilih Add New lalu Project.
2. Pilih Deploy tanpa Git dengan menyeret folder `dhammasetu` ini, atau jalankan `npx vercel` di dalam folder.
3. Framework preset: Other. Tidak perlu build command.
4. Setelah selesai, tautan seperti `https://dhammasetu.vercel.app` bisa dicantumkan di esai dan dijadikan QR di lampiran.

## Alur demo yang disarankan untuk juri

1. Masuk sebagai **Siswa**: lihat jadwal kelas gabungan dan grafik "6 sekolah, 1 kelas", masuk kelas, catat kehadiran, buka Pertemuan Vihara, lalu Rapor (status masih menunggu validasi).
2. Keluar, masuk sebagai **Pengajar**: lihat 8 rombel Kab. Serang (24 JP per minggu), lalu validasi nilai Fase D-1.
3. Keluar, masuk lagi sebagai **Siswa**: status rapor kini terkirim ke e-rapor sekolah asal.
4. Masuk sebagai **Operator sekolah**: tambah siswa. Penyimpanan ditolak sampai persetujuan orang tua dicentang (UU PDP).
5. Masuk sebagai **Kemenag atau dinas**: dasbor rekomendasi formasi guru per wilayah, hanya data agregat.

Tautan "Atur ulang data demo" di samping layar (tampilan desktop) mengembalikan semua data ke kondisi awal.

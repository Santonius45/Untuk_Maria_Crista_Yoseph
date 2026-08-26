# Untuk Maria Crista Yoseph ❤️

Website romantis statis yang dibuat khusus untuk Maria Crista Yoseph, 26.

## Struktur
- `index.html` — halaman utama
- `style.css` — desain dan animasi
- `script.js` — countdown, animasi, tombol surat, dan musik ambient
- `assets/` — 4 foto Maria dari file yang diberikan

## Sebelum dikirim
1. Buka `script.js`.
2. Cari `SPECIAL_DATE`.
3. Ganti `2026-12-31T00:00:00` dengan tanggal anniversary/tanggal spesial yang benar.
4. Buka `index.html` untuk preview.

Tidak ada backend/database. Website ini sengaja dibuat sebagai static site sehingga mudah di-deploy ke Vercel.

## Deploy ke Vercel
Cara paling mudah:
1. Upload folder ini ke GitHub.
2. Di Vercel pilih **Add New Project**.
3. Import repository tersebut.
4. Framework Preset: **Other**.
5. Build Command: kosong.
6. Output Directory: `.` (atau biarkan default).
7. Deploy.

Setelah berhasil, Vercel akan memberikan URL `*.vercel.app`.

## Catatan
Musik pada tombol `♫` dibuat menggunakan Web Audio API di browser, jadi tidak membutuhkan file lagu eksternal atau aset berhak cipta.

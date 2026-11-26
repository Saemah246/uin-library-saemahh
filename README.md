# UIN Library — Prototype UI/UX

## Menjalankan website
1. Ekstrak ZIP.
2. Buka folder hasil ekstrak di Visual Studio Code.
3. Pastikan `index.html`, `style.css`, dan `script.js` berada di folder yang sama.
4. Buka `index.html` di browser atau gunakan ekstensi Live Server.

## Cara mencoba
- Mahasiswa: isi nama lengkap dan NIM, lalu klik Masuk sebagai mahasiswa.
- Dosen/pengunjung: klik tombol Masuk sebagai Dosen / Pengunjung. Tidak memerlukan NIM.
- Sapaan dan profil berubah mengikuti jenis akses dan nama pengguna.
- Riwayat peminjaman demo dosen dipisahkan dari data mahasiswa.

## Fitur prototype
Beranda, katalog dan pencarian buku, kategori, detail buku, pratinjau baca, simulasi peminjaman, riwayat, profil, dan keluar.

## Teknologi dan batasan
HTML, CSS, JavaScript, localStorage, dan sessionStorage. Login mahasiswa belum memvalidasi NIM ke database kampus. Data tersimpan lokal di browser/perangkat, belum tersinkron ke server. Akun Dosen/Pengunjung merupakan akses demo tanpa NIM, bukan autentikasi dosen sungguhan. Katalog dan isi buku adalah data contoh.

## Upload ke GitHub Pages
Unggah **isi folder** ini ke repository GitHub (jangan hanya ZIP). Pastikan `index.html`, `style.css`, `script.js`, dan folder `assets` berada di root repository. Aktifkan Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save.

# UIN Library — Prototype UI/UX Perpustakaan Digital

Prototype antarmuka perpustakaan digital untuk tugas UI/UX. Dibuat menggunakan HTML, CSS, dan JavaScript tanpa framework.

## Menjalankan secara lokal
1. Ekstrak ZIP.
2. Buka folder hasil ekstrak di Visual Studio Code.
3. Jalankan `index.html` melalui ekstensi Live Server (disarankan), atau buka langsung di browser.
4. Pastikan folder `assets` tetap berada satu tingkat dengan `index.html`.

## Cara mencoba
- **Mahasiswa:** isi nama lengkap dan NIM, lalu klik Masuk sebagai mahasiswa.
- **Dosen/pengunjung:** isi nama lengkap, lalu klik Masuk sebagai Dosen/Pengunjung. NIM tidak diperlukan.
- Nama pada sapaan, header, dan profil mengikuti nama yang dimasukkan.
- Foto Saemah hanya muncul ketika nama akun yang dimasukkan adalah “Saemah”. Pengguna lain ditampilkan dengan inisial namanya.

## Fitur yang tersedia
- Login simulasi untuk mahasiswa dan dosen/pengunjung.
- Sapaan personal berdasarkan nama pengguna.
- Beranda, katalog, pencarian, filter kategori, dan pengurutan judul.
- Detail buku dengan deskripsi dan metadata contoh.
- Pratinjau baca tiga halaman dengan materi yang berbeda untuk setiap judul.
- Simulasi peminjaman maksimal tiga buku aktif per akun.
- Stok berkurang saat peminjaman dan bertambah saat buku ditandai dikembalikan.
- Riwayat peminjaman per akun.
- Profil, notifikasi demo, bantuan, dan logout.
- Penyimpanan lokal menggunakan `localStorage` dan `sessionStorage`.

## Catatan akurasi dan batasan
- Ini adalah **prototype tugas UI/UX**, bukan aplikasi resmi UIN dan bukan sistem transaksi perpustakaan sungguhan.
- Judul, penulis, penerbit, tahun, stok, serta isi pratinjau merupakan **data simulasi/contoh** untuk menunjukkan alur dan perbedaan konten per buku. Data tersebut tidak boleh dianggap sebagai katalog atau isi buku resmi.
- Login tidak memvalidasi NIM ke database kampus. Akses dosen/pengunjung juga merupakan mode demo, bukan autentikasi dosen.
- Data akun, stok, dan peminjaman tersimpan pada browser/perangkat yang digunakan. Data tidak tersinkron antarperangkat atau antar-pengguna dan dapat hilang jika data browser dibersihkan.
- Untuk penggunaan nyata diperlukan backend, database, validasi identitas, pengelolaan koleksi, dan aturan sirkulasi yang disetujui perpustakaan.

## Memperbarui website GitHub Pages yang sudah ada
Tidak perlu membuat repository atau alamat website baru.
1. Ekstrak ZIP ini.
2. Buka repository GitHub yang sudah digunakan.
3. Pilih **Add file → Upload files**.
4. Unggah dan timpa `index.html`, `script.js`, `style.css`, `README.md`, serta folder `assets` dengan versi dari ZIP ini.
5. Klik **Commit changes**.
6. Tunggu proses GitHub Pages selesai. Alamat website yang lama tetap sama; refresh dengan `Ctrl + F5`.

Pastikan file `index.html`, `script.js`, `style.css`, `README.md`, dan folder `assets` berada di root repository (bukan di dalam folder tambahan).

/* UIN Library — prototype interaktif UI/UX
   Seluruh akun, katalog, stok, dan peminjaman disimpan lokal di browser.
   Tidak terhubung ke database atau sistem resmi kampus. */
const books = [
  {id:1,title:"Pemrograman Python",author:"Tim Penyusun (data contoh)",category:"Teknologi",cover:"python",stock:8,year:2024,publisher:"Data simulasi",description:"Materi pengantar pemrograman Python: pengenalan bahasa, variabel, tipe data, percabangan, perulangan, fungsi, dan latihan program sederhana."},
  {id:2,title:"Data Science untuk Pemula",author:"Tim Penyusun (data contoh)",category:"Teknologi",cover:"data",stock:5,year:2024,publisher:"Data simulasi",description:"Materi dasar ilmu data yang membahas pengumpulan data, pembersihan, eksplorasi, visualisasi, analisis, dan penyampaian hasil."},
  {id:3,title:"Artificial Intelligence",author:"Tim Penyusun (data contoh)",category:"Teknologi",cover:"ai",stock:4,year:2025,publisher:"Data simulasi",description:"Materi pengantar kecerdasan buatan, machine learning, proses pelatihan model, evaluasi, penerapan, serta tanggung jawab penggunaan AI."},
  {id:4,title:"Basis Data Modern",author:"Tim Penyusun (data contoh)",category:"Teknologi",cover:"web",stock:6,year:2024,publisher:"Data simulasi",description:"Materi basis data relasional, tabel, primary key, foreign key, SQL, normalisasi, dan integritas data."},
  {id:5,title:"Desain untuk Kehidupan",author:"Tim Penyusun (data contoh)",category:"Sosial",cover:"design",stock:3,year:2025,publisher:"Data simulasi",description:"Materi pemikiran desain yang berpusat pada manusia, empati, perumusan masalah, ideasi, prototipe, pengujian, dan iterasi."},
  {id:6,title:"Strategi Belajar Efektif",author:"Tim Penyusun (data contoh)",category:"Pendidikan",cover:"edu",stock:7,year:2025,publisher:"Data simulasi",description:"Materi kebiasaan belajar, pembelajaran aktif, pengulangan berjeda, pengelolaan waktu, dan evaluasi proses belajar."}
];
const readerContents = {
  1: [
    ["Mengenal Python", "Python adalah bahasa pemrograman tingkat tinggi yang dikenal karena sintaksnya relatif mudah dibaca. Python dapat digunakan untuk membuat program sederhana, mengolah data, membangun aplikasi web, hingga mengembangkan kecerdasan buatan.", "Program Python ditulis dalam instruksi yang dijalankan oleh interpreter. Sebuah perintah sederhana seperti print(\"Halo, dunia!\") dapat digunakan untuk menampilkan teks ke layar. Dari contoh kecil ini, pembaca mulai mengenal cara program menerima dan menjalankan instruksi."],
    ["Variabel dan alur program", "Variabel digunakan untuk menyimpan nilai. Contohnya, nama = \"Saemah\" menyimpan teks, sedangkan umur = 20 menyimpan bilangan. Python juga memiliki tipe data seperti string, integer, float, dan boolean.", "Percabangan if-elif-else membantu program mengambil keputusan berdasarkan kondisi. Sementara itu, perulangan for dan while digunakan untuk menjalankan instruksi berulang kali. Kombinasi keduanya menjadi dasar untuk membangun logika program."],
    ["Fungsi dan latihan", "Fungsi mengelompokkan instruksi agar dapat digunakan kembali. Fungsi dibuat dengan kata kunci def, dapat menerima parameter, dan dapat mengembalikan hasil menggunakan return.", "Sebagai latihan, buat program sederhana untuk menghitung luas persegi panjang dari panjang dan lebar yang dimasukkan pengguna. Pecah prosesnya menjadi input, perhitungan, dan output. Latihan kecil seperti ini membantu menguatkan pemahaman dasar Python."]
  ],
  2: [
    ["Apa itu Data Science?", "Data Science adalah bidang yang menggabungkan statistik, pemrograman, dan pemahaman konteks untuk memperoleh wawasan dari data. Tujuannya bukan sekadar mengumpulkan angka, melainkan menjawab pertanyaan dan membantu pengambilan keputusan.", "Prosesnya biasanya dimulai dari merumuskan masalah dan mengumpulkan data yang relevan. Data dapat berasal dari survei, transaksi, sensor, maupun sumber terbuka. Kualitas data sangat memengaruhi kualitas kesimpulan yang dihasilkan."],
    ["Membersihkan dan mengeksplorasi data", "Sebelum dianalisis, data perlu diperiksa: apakah ada nilai kosong, data ganda, format yang tidak konsisten, atau nilai yang tidak masuk akal. Tahap pembersihan membantu mengurangi kesalahan saat analisis.", "Analisis eksploratif dilakukan dengan ringkasan statistik dan visualisasi seperti histogram, diagram batang, atau scatter plot. Visualisasi membantu menemukan pola, sebaran, dan kemungkinan hubungan antarvariabel."],
    ["Menarik kesimpulan", "Setelah pola dipahami, analis memilih metode yang sesuai dengan pertanyaan. Misalnya, pengelompokan untuk melihat segmen data atau model prediksi untuk memperkirakan nilai berdasarkan informasi sebelumnya.", "Hasil analisis perlu disampaikan dengan jelas, menyebutkan keterbatasan data, dan menghindari kesimpulan yang tidak didukung bukti. Wawasan yang baik harus dapat dipahami dan digunakan oleh pihak yang membutuhkan."]
  ],
  3: [
    ["Pengantar Artificial Intelligence", "Artificial Intelligence (AI) atau kecerdasan buatan adalah bidang yang mempelajari cara membuat sistem komputer melakukan tugas yang biasanya memerlukan kemampuan manusia, seperti mengenali pola, memahami bahasa, dan membantu mengambil keputusan.", "AI merupakan istilah luas. Salah satu cabangnya adalah machine learning, yaitu pendekatan yang memungkinkan sistem mempelajari pola dari data. Karena itu, kualitas dan keterwakilan data berpengaruh besar terhadap hasil sistem."],
    ["Bagaimana machine learning bekerja?", "Dalam pembelajaran terawasi, model dilatih menggunakan contoh data yang sudah memiliki label. Model mempelajari hubungan antara masukan dan jawaban, lalu diuji menggunakan data yang tidak dipakai saat pelatihan.", "Contohnya, model klasifikasi dapat mempelajari ciri pesan spam dan bukan spam. Kinerja model dievaluasi menggunakan ukuran seperti akurasi, precision, dan recall, sesuai dengan tujuan serta risiko kesalahan pada kasus yang ditangani."],
    ["Manfaat dan tanggung jawab", "AI digunakan dalam berbagai bidang, misalnya membantu menyaring informasi, mengenali objek pada gambar, menerjemahkan bahasa, dan mendukung analisis. Sistem AI sebaiknya dipandang sebagai alat bantu, bukan pengganti penilaian manusia dalam semua situasi.", "Pengembangan AI perlu memperhatikan privasi, keamanan, bias, transparansi, dan dampak terhadap masyarakat. Pengguna juga perlu memeriksa keluaran sistem, terutama ketika keputusan memiliki konsekuensi penting."]
  ],
  4: [
    ["Dasar-dasar basis data", "Basis data adalah kumpulan data yang disusun agar dapat disimpan, dicari, dan dikelola secara terstruktur. Sistem manajemen basis data (DBMS) membantu pengguna membuat, membaca, memperbarui, dan menghapus data.", "Dalam basis data relasional, informasi disimpan dalam tabel yang terdiri atas baris dan kolom. Setiap tabel mewakili suatu entitas, misalnya mahasiswa, buku, atau transaksi."],
    ["Relasi dan SQL", "Primary key digunakan untuk mengidentifikasi setiap baris secara unik. Foreign key menghubungkan satu tabel dengan tabel lain sehingga hubungan data dapat dijaga dengan konsisten.", "SQL (Structured Query Language) digunakan untuk berinteraksi dengan basis data relasional. Perintah SELECT mengambil data, INSERT menambahkan data, UPDATE mengubah data, dan DELETE menghapus data."],
    ["Normalisasi dan integritas", "Normalisasi membantu mengurangi pengulangan data dan mencegah anomali saat data ditambah, diubah, atau dihapus. Proses ini dilakukan dengan membagi data ke tabel yang sesuai dan menetapkan relasi.", "Selain desain tabel, aturan seperti NOT NULL, UNIQUE, dan FOREIGN KEY membantu menjaga integritas data. Rancangan yang baik membuat informasi lebih konsisten serta lebih mudah dipelihara."]
  ],
  5: [
    ["Memahami pemikiran desain", "Design thinking merupakan pendekatan pemecahan masalah yang berangkat dari kebutuhan manusia. Proses ini mendorong perancang memahami pengalaman pengguna sebelum menentukan bentuk solusi.", "Tahap awalnya adalah berempati: mengamati, mendengarkan, dan memahami tantangan yang dialami orang. Temuan tersebut kemudian dirumuskan menjadi masalah yang spesifik agar proses perancangan memiliki arah."],
    ["Ide, prototipe, dan pengujian", "Setelah masalah dirumuskan, tim menghasilkan beberapa kemungkinan ide. Ide yang dipilih dapat diwujudkan menjadi prototipe sederhana, misalnya sketsa, alur layanan, atau rancangan antarmuka.", "Prototipe diuji kepada calon pengguna untuk mengetahui bagian yang mudah dipahami dan bagian yang membingungkan. Masukan pengguna menjadi dasar perbaikan, sehingga solusi berkembang melalui proses berulang."],
    ["Desain yang berdampak", "Desain yang baik tidak hanya menarik secara visual. Solusi juga perlu mudah digunakan, inklusif, dapat diakses, dan sesuai dengan konteks orang yang akan memakainya.", "Dengan memahami kebutuhan pengguna, menguji asumsi, dan memperbaiki rancangan, proses desain dapat menghasilkan layanan atau produk yang lebih bermanfaat dalam kehidupan sehari-hari."]
  ],
  6: [
    ["Membangun kebiasaan belajar", "Belajar efektif dimulai dengan tujuan yang jelas dan kebiasaan yang realistis. Tentukan materi yang ingin dipahami, pecah menjadi bagian kecil, lalu jadwalkan waktu belajar secara teratur.", "Lingkungan belajar yang nyaman dan minim gangguan dapat membantu fokus. Namun, setiap orang memiliki cara belajar yang berbeda, sehingga strategi perlu dievaluasi dan disesuaikan."],
    ["Strategi memahami materi", "Belajar aktif lebih dari sekadar membaca ulang. Cobalah menjelaskan kembali materi dengan kata-kata sendiri, membuat pertanyaan, mengerjakan latihan, atau menghubungkan konsep baru dengan pengetahuan sebelumnya.", "Pengulangan berjeda membantu mengingat informasi dalam jangka panjang. Beri jeda antar sesi dan kembali tinjau materi setelah beberapa waktu, daripada memaksakan semua materi sekaligus."],
    ["Mengatur waktu dan mengevaluasi", "Buat daftar prioritas berdasarkan tenggat dan tingkat kesulitan. Sesi belajar yang terfokus dapat diselingi istirahat singkat agar energi dan perhatian tetap terjaga.", "Di akhir sesi, catat bagian yang sudah dipahami dan hal yang masih perlu dipelajari. Evaluasi sederhana ini membantu menentukan langkah berikutnya dan membuat proses belajar lebih terarah."]
  ]
};
let selectedCategory = "Semua";
let currentBook = books[0];
let readerPage = 1;
let currentUser = safeParse(sessionStorage.getItem("uinLibraryCurrentUser"), null);
let loans = [];
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const INVENTORY_KEY = "uinLibraryInventory_v2";

function safeParse(value, fallback) {
  try { return value ? JSON.parse(value) : fallback; } catch { return fallback; }
}
function normalized(value) {
  return String(value || "").trim().toLocaleLowerCase("id-ID").replace(/\s+/g, " ");
}
function userKey() {
  if (!currentUser) return "uinLibraryLoans_v2_guest";
  const identity = currentUser.role === "student" ? currentUser.nim : normalized(currentUser.name);
  return `uinLibraryLoans_v2_${currentUser.role}_${encodeURIComponent(identity || "guest")}`;
}
function getInventory() {
  const saved = safeParse(localStorage.getItem(INVENTORY_KEY), {});
  const inventory = {};
  books.forEach(book => {
    const value = Number(saved[book.id]);
    inventory[book.id] = Number.isInteger(value) && value >= 0 ? value : book.stock;
  });
  return inventory;
}
let inventory = getInventory();
function saveInventory() {
  localStorage.setItem(INVENTORY_KEY, JSON.stringify(inventory));
}
function loadUserLoans() {
  loans = safeParse(localStorage.getItem(userKey()), []);
  if (!Array.isArray(loans)) loans = [];
}
function saveCurrentUser() {
  sessionStorage.setItem("uinLibraryCurrentUser", JSON.stringify(currentUser));
}
function applyUserProfile() {
  if (!currentUser) return;
  const name = currentUser.name;
  const isGuest = currentUser.role === "guest";
  const roleLabel = isGuest ? "Dosen / Pengunjung" : "Mahasiswa";
  $("#welcomeName").textContent = `${name}!`;
  $("#headerName").textContent = name;
  $("#headerRole").textContent = roleLabel;
  $("#profileName").textContent = name;
  $("#profileNim").textContent = isGuest ? "Tidak diperlukan" : currentUser.nim;
  $("#profileStudy").textContent = isGuest ? "Akses demo perpustakaan" : "Mahasiswa";
  $("#headerInitial").textContent = name.charAt(0).toLocaleUpperCase("id-ID");
  $("#profileInitial").textContent = name.charAt(0).toLocaleUpperCase("id-ID");
  $("#profileFullName").textContent = name;
  $("#profileRole").textContent = roleLabel;
  $("#profileId").textContent = isGuest ? "Tidak diperlukan" : currentUser.nim;
  $("#profileStatus").textContent = isGuest ? "Mode demo" : "Prototype";
  $("#memberTag").textContent = isGuest ? "✦ Dosen / Pengunjung" : "✦ Anggota demo";
  const isSaemah = normalized(name) === "saemah";
  $("#profilePhoto").classList.toggle("hidden", !isSaemah);
  $("#profileInitial").classList.toggle("hidden", isSaemah);
}
function finishLogin(name, nim, role = "student") {
  currentUser = { name: name.trim(), nim: (nim || "").trim(), role };
  saveCurrentUser();
  loadUserLoans();
  applyUserProfile();
  $("#loginScreen").classList.add("hidden");
  $("#appShell").classList.remove("hidden");
  renderBooks();
  renderLoans();
  showPage("home");
}
function coverMarkup(book) {
  return `<div class="cover ${book.cover}"><small>UIN LIBRARY</small><span class="cover-mark">✦</span><strong>${book.title}</strong><em>${book.author}</em></div>`;
}
function cardMarkup(book) {
  const stock = inventory[book.id] ?? book.stock;
  return `<article class="book-card"><div class="cover-wrap">${coverMarkup(book)}</div><span class="book-category">${book.category}</span><h3>${book.title}</h3><p class="book-author">${book.author}</p><div class="book-meta"><span>▣ ${stock} eksemplar tersedia</span></div><button class="button button-primary" data-detail="${book.id}">Lihat detail</button></article>`;
}
function renderBooks() {
  $("#popularBooks").innerHTML = books.slice(0, 4).map(cardMarkup).join("");
  filterBooks();
}
function filterBooks() {
  const q = ($("#searchInput")?.value || "").toLocaleLowerCase("id-ID");
  let list = books.filter(book =>
    (selectedCategory === "Semua" || book.category === selectedCategory) &&
    [book.title, book.author, book.category, book.description].join(" ").toLocaleLowerCase("id-ID").includes(q)
  );
  if ($("#sortSelect")?.value === "az") list.sort((a, b) => a.title.localeCompare(b.title, "id"));
  $("#catalogBooks").innerHTML = list.map(cardMarkup).join("");
  $("#resultCount").textContent = `${list.length} buku ditemukan`;
  $("#emptyState").classList.toggle("hidden", list.length > 0);
}
function showPage(name) {
  const pages = ["home", "catalog", "detail", "reader", "loans", "history", "profile"];
  pages.forEach(page => $("#page-" + page).classList.toggle("active", page === name));
  $$(".nav-link[data-page]").forEach(button => button.classList.toggle("active", button.dataset.page === name));
  const labels = {home:"Beranda",catalog:"Cari Buku",detail:"Detail Buku",reader:"Baca Buku",loans:"Pinjam Buku",history:"Riwayat",profile:"Profil"};
  $("#crumb").textContent = labels[name] || "Beranda";
  $("#sidebar").classList.remove("open");
  if (name === "loans" || name === "history") renderLoans();
  window.scrollTo({top:0, behavior:"smooth"});
}
function openDetail(id) {
  currentBook = books.find(book => book.id === Number(id)) || books[0];
  renderDetail();
  showPage("detail");
}
function renderDetail() {
  const book = currentBook;
  const stock = inventory[book.id] ?? book.stock;
  $("#bookDetail").innerHTML = `<div class="detail-cover-area">${coverMarkup(book)}</div><div class="detail-copy"><span class="eyebrow">${book.category.toUpperCase()} · KOLEKSI CONTOH</span><h1>${book.title}</h1><div class="author">Penulis: ${book.author}</div><p>${book.description}</p><div class="detail-facts"><div><small>Ketersediaan</small><b class="availability">${stock > 0 ? `● ${stock} eksemplar tersedia` : "Tidak tersedia"}</b></div><div><small>Penerbit</small><b>${book.publisher}</b></div><div><small>Tahun data</small><b>${book.year} (simulasi)</b></div><div><small>Kategori</small><b>${book.category}</b></div></div><p class="catalog-note">Catatan: judul, penulis, penerbit, tahun, dan stok merupakan data simulasi untuk demonstrasi tugas UI/UX, bukan data katalog resmi perpustakaan.</p><div class="detail-actions"><button class="button button-primary" id="borrowBtn" ${stock === 0 ? "disabled" : ""}>Pinjam buku →</button><button class="button button-soft" id="readBtn">Baca pratinjau</button></div></div>`;
  $("#borrowBtn").addEventListener("click", borrowBook);
  $("#readBtn").addEventListener("click", openReader);
}
function openReader() {
  $("#readerTitle").textContent = currentBook.title;
  $("#readerAuthor").textContent = `Oleh ${currentBook.author} · Materi contoh`;
  readerPage = 1;
  updateReader();
  showPage("reader");
}
function updateReader() {
  const pages = readerContents[currentBook.id] || readerContents[1];
  const content = pages[readerPage - 1];
  $("#pageNumber").textContent = `Halaman ${readerPage} dari ${pages.length}`;
  $("#prevPage").disabled = readerPage === 1;
  $("#nextPage").disabled = readerPage === pages.length;
  $("#readerSectionTitle").textContent = content[0];
  $(".reader-paper").querySelectorAll("p:not(.reader-author)").forEach((paragraph, index) => {
    paragraph.textContent = content[index + 1] || "";
  });
  $(".reader-page-number").textContent = `— 0${readerPage} —`;
}
function formatDate(date) {
  return date.toLocaleDateString("id-ID", {day:"2-digit", month:"short", year:"numeric"});
}
function borrowBook() {
  const activeLoans = loans.filter(loan => loan.status === "Dipinjam");
  if (activeLoans.some(loan => loan.bookId === currentBook.id)) {
    toast("Buku ini sudah ada dalam daftar peminjaman aktif.");
    return;
  }
  if (activeLoans.length >= 3) {
    toast("Prototype membatasi maksimal 3 buku aktif per akun.");
    return;
  }
  if ((inventory[currentBook.id] ?? 0) < 1) {
    toast("Maaf, stok buku sedang tidak tersedia.");
    renderDetail();
    return;
  }
  const now = new Date();
  const due = new Date(now);
  due.setDate(due.getDate() + 14);
  loans.unshift({
    bookId: currentBook.id,
    title: currentBook.title,
    author: currentBook.author,
    borrowedAt: now.toISOString(),
    dueAt: due.toISOString(),
    borrowed: formatDate(now),
    due: formatDate(due),
    status: "Dipinjam"
  });
  inventory[currentBook.id] -= 1;
  saveInventory();
  saveLoans();
  renderBooks();
  renderDetail();
  $("#modalTitle").textContent = "Peminjaman berhasil!";
  $("#modalText").textContent = `“${currentBook.title}” masuk ke daftar peminjaman. Batas waktu simulasi peminjaman adalah 14 hari.`;
  $("#modalIcon").textContent = "✓";
  $("#modalBackdrop").classList.remove("hidden");
}
function returnBook(index) {
  const loan = loans[index];
  if (!loan || loan.status !== "Dipinjam") return;
  loan.status = "Dikembalikan";
  if (loan.bookId && books.some(book => book.id === loan.bookId)) {
    inventory[loan.bookId] = (inventory[loan.bookId] ?? 0) + 1;
    saveInventory();
  }
  saveLoans();
  renderBooks();
  toast("Buku berhasil ditandai sudah dikembalikan.");
}
function saveLoans() {
  localStorage.setItem(userKey(), JSON.stringify(loans));
  renderLoans();
}
function renderLoans() {
  const active = loans.filter(loan => loan.status === "Dipinjam");
  $("#activeLoanCount").textContent = `${active.length} buku`;
  $("#activeLoansTable").innerHTML = active.map(loan =>
    `<tr><td>${loan.title}<br><small style="color:#aaa">${loan.author || ""}</small></td><td>${loan.borrowed || "—"}</td><td>${loan.due || "—"}</td><td><span class="status active">Dipinjam</span><br><button class="return-action" data-return="${loans.indexOf(loan)}">Tandai dikembalikan</button></td></tr>`
  ).join("");
  $("#loansEmpty").classList.toggle("hidden", active.length > 0);
  $("#historyTable").innerHTML = loans.map(loan =>
    `<tr><td>${loan.title}</td><td>${loan.borrowed || "—"}</td><td>${loan.due || "—"}</td><td><span class="status ${loan.status === "Dipinjam" ? "active" : "returned"}">${loan.status}</span></td></tr>`
  ).join("");
  $("#historyEmpty").classList.toggle("hidden", loans.length > 0);
  $("#historyCount").textContent = `${loans.length} aktivitas`;
}
function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  setTimeout(() => element.classList.remove("show"), 2500);
}

/* Navigasi dan interaksi */
$$(".nav-link[data-page]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.page)));
$$("[data-go]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.go)));
$$(".user-chip").forEach(button => button.addEventListener("click", () => showPage("profile")));
document.addEventListener("click", event => {
  const detailButton = event.target.closest("[data-detail]");
  if (detailButton) openDetail(detailButton.dataset.detail);
  const returnButton = event.target.closest("[data-return]");
  if (returnButton) returnBook(Number(returnButton.dataset.return));
});
$("#searchInput").addEventListener("input", filterBooks);
$("#sortSelect").addEventListener("change", filterBooks);
$("#categoryRow").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  $$(".category-pill").forEach(item => item.classList.toggle("selected", item === button));
  filterBooks();
});
$("#prevPage").addEventListener("click", () => { if (readerPage > 1) { readerPage--; updateReader(); } });
$("#nextPage").addEventListener("click", () => {
  const pages = readerContents[currentBook.id] || readerContents[1];
  if (readerPage < pages.length) { readerPage++; updateReader(); }
});
$("#modalClose").addEventListener("click", () => $("#modalBackdrop").classList.add("hidden"));
$("#modalSecondary").addEventListener("click", () => $("#modalBackdrop").classList.add("hidden"));
$("#modalPrimary").addEventListener("click", () => { $("#modalBackdrop").classList.add("hidden"); showPage("history"); });
$("#modalBackdrop").addEventListener("click", event => {
  if (event.target.id === "modalBackdrop") event.currentTarget.classList.add("hidden");
});
$("#mobileMenu").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
$("#helpBtn").addEventListener("click", () => toast("Prototype bantuan: silakan hubungi petugas perpustakaan kampus untuk informasi resmi."));
$("#notifBtn").addEventListener("click", () => toast("Belum ada notifikasi pada prototype ini."));
$("#logoutBtn").addEventListener("click", () => {
  sessionStorage.removeItem("uinLibraryCurrentUser");
  $("#loginForm").reset();
  currentUser = null;
  loans = [];
  $("#appShell").classList.add("hidden");
  $("#loginScreen").classList.remove("hidden");
  $("#loginForm").reset();
  $("#loginNim").required = false;
  toast("Kamu sudah keluar dari akun.");
});
$("#loginForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = $("#loginName").value.trim();
  const nim = $("#loginNim").value.trim();
  if (!name) { toast("Masukkan nama lengkap terlebih dahulu."); $("#loginName").focus(); return; }
  if (!nim) { toast("NIM wajib diisi untuk akses mahasiswa."); $("#loginNim").focus(); return; }
  finishLogin(name, nim, "student");
});
$("#teacherDemoBtn").addEventListener("click", () => {
  const name = $("#loginName").value.trim();
  if (!name) {
    toast("Isi nama lengkap terlebih dahulu. Dosen/pengunjung tidak perlu mengisi NIM.");
    $("#loginName").focus();
    return;
  }
  finishLogin(name, "", "guest");
});
document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    showPage("catalog");
    $("#searchInput").focus();
  }
  if (event.key === "Escape") $("#modalBackdrop").classList.add("hidden");
});

$("#loginNim").required = false;
renderBooks();
if (currentUser && currentUser.name && currentUser.name !== "Dosen / Pengunjung") {
  loadUserLoans();
  applyUserProfile();
  $("#loginScreen").classList.add("hidden");
  $("#appShell").classList.remove("hidden");
  renderLoans();
} else {
  currentUser = null;
  $("#appShell").classList.add("hidden");
  $("#loginScreen").classList.remove("hidden");
}

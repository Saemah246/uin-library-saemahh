const books = [
  {id:1,title:"Pemrograman Python",author:"John Doe",category:"Teknologi",rating:"4.9",reviews:"980",cover:"python",stock:8,year:2022,publisher:"Informatika Press",description:"Panduan praktis untuk mengenal dasar pemrograman Python, mulai dari sintaks, tipe data, percabangan, perulangan, hingga penerapan dalam proyek sederhana."},
  {id:2,title:"Data Science untuk Pemula",author:"Andi Saputra",category:"Teknologi",rating:"4.8",reviews:"760",cover:"data",stock:5,year:2023,publisher:"Media Edukasi",description:"Pengantar ilmu data yang membahas proses pengolahan, analisis, dan interpretasi data untuk menghasilkan informasi yang bermanfaat."},
  {id:3,title:"Artificial Intelligence",author:"Budi Santoso",category:"Teknologi",rating:"4.9",reviews:"1.2k",cover:"ai",stock:4,year:2024,publisher:"Techno Media",description:"Mengenal konsep kecerdasan buatan, machine learning, dan penerapannya dalam berbagai bidang kehidupan."},
  {id:4,title:"Basis Data Modern",author:"Dewi Lestari",category:"Teknologi",rating:"4.7",reviews:"540",cover:"web",stock:6,year:2021,publisher:"Informatika Press",description:"Mempelajari konsep basis data, perancangan relasi, SQL, normalisasi, dan pengelolaan data secara terstruktur."},
  {id:5,title:"Desain untuk Kehidupan",author:"Nadia Putri",category:"Sosial",rating:"4.8",reviews:"420",cover:"design",stock:3,year:2022,publisher:"Ruang Baca",description:"Buku pengantar kreativitas dan pemikiran desain untuk memahami kebutuhan manusia dan merancang solusi yang bermanfaat."},
  {id:6,title:"Strategi Belajar Efektif",author:"Rina Maharani",category:"Pendidikan",rating:"4.7",reviews:"390",cover:"edu",stock:7,year:2023,publisher:"Cendekia",description:"Membahas kebiasaan belajar, manajemen waktu, dan strategi memahami materi agar proses belajar lebih terarah."}
];
let selectedCategory="Semua", currentBook=books[0], readerPage=1;
let currentUser=JSON.parse(sessionStorage.getItem("uinLibraryCurrentUser")||"null");
let loginRole="student";
let loans=[];
function userKey(){return currentUser ? `uinLibraryLoans_${currentUser.role}_${currentUser.nim||"demo"}` : "uinLibraryLoans_guest"}
function loadUserLoans(){loans=JSON.parse(localStorage.getItem(userKey())||"[]")}
function saveCurrentUser(){sessionStorage.setItem("uinLibraryCurrentUser",JSON.stringify(currentUser))}
function applyUserProfile(){
 if(!currentUser)return;
 const name=currentUser.name;
 const isGuest=currentUser.role==="guest";
 const roleLabel=isGuest?"Dosen / Pengunjung":"Mahasiswa";
 $("#welcomeName").textContent=isGuest?"Dosen!":name+"!";
 $("#headerName").textContent=name;
 $("#headerRole").textContent=roleLabel;
 $("#profileName").textContent=name;
 $("#profileNim").textContent=isGuest?"Tidak diperlukan":currentUser.nim;
 $("#profileStudy").textContent=isGuest?"Akses demo perpustakaan":"Mahasiswa";
 $("#headerInitial").textContent=name.charAt(0).toUpperCase();
 $("#profileInitial").textContent=name.charAt(0).toUpperCase();
 $("#profileFullName").textContent=name;
 $("#profileRole").textContent=roleLabel;
 $("#profileId").textContent=isGuest?"Tidak diperlukan":currentUser.nim;
 $("#profileStatus").textContent=isGuest?"Akses demo":"Prototype";
 $("#memberTag").textContent=isGuest?"✦ Pengunjung perpustakaan":"✦ Anggota perpustakaan";
}
function finishLogin(name,nim,role="student"){
 currentUser={name:name.trim(),nim:(nim||"").trim(),role,study:role==="guest"?"Dosen / Pengunjung":"Mahasiswa"};
 saveCurrentUser();loadUserLoans();applyUserProfile();
 $("#loginScreen").classList.add("hidden");
 $("#appShell").classList.remove("hidden");
 renderLoans();showPage("home");
}
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
function coverMarkup(book){return `<div class="cover ${book.cover}"><small>UIN LIBRARY</small><span class="cover-mark">✦</span><strong>${book.title}</strong><em>${book.author}</em></div>`}
function cardMarkup(book){return `<article class="book-card"><div class="cover-wrap">${coverMarkup(book)}</div><span class="book-category">${book.category}</span><h3>${book.title}</h3><p class="book-author">${book.author}</p><div class="book-meta"><span class="rating">★ ${book.rating}</span><span>▣ ${book.stock} tersedia</span></div><button class="button button-primary" data-detail="${book.id}">Lihat detail</button></article>`}
function renderBooks(){ $("#popularBooks").innerHTML=books.slice(0,4).map(cardMarkup).join(""); filterBooks(); }
function filterBooks(){
 let q=($("#searchInput")?.value||"").toLowerCase();
 let list=books.filter(b=>(selectedCategory==="Semua"||b.category===selectedCategory||(selectedCategory==="Sains"&&b.category==="Teknologi"))&&[b.title,b.author,b.category].join(" ").toLowerCase().includes(q));
 if($("#sortSelect")?.value==="az") list.sort((a,b)=>a.title.localeCompare(b.title));
 $("#catalogBooks").innerHTML=list.map(cardMarkup).join(""); $("#resultCount").textContent=`${list.length} buku ditemukan`; $("#emptyState").classList.toggle("hidden",list.length>0);
}
function showPage(name){
 const pages=["home","catalog","detail","reader","loans","history","profile"];
 pages.forEach(p=>$("#page-"+p).classList.toggle("active",p===name));
 $$(".nav-link[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===name));
 const labels={home:"Beranda",catalog:"Cari Buku",detail:"Detail Buku",reader:"Baca Buku",loans:"Pinjam Buku",history:"Riwayat",profile:"Profil"};
 $("#crumb").textContent=labels[name]||"Beranda"; $("#sidebar").classList.remove("open");
 if(name==="loans"||name==="history")renderLoans();
 window.scrollTo({top:0,behavior:"smooth"});
}
function openDetail(id){currentBook=books.find(b=>b.id===Number(id))||books[0];renderDetail();showPage("detail")}
function renderDetail(){
 const b=currentBook;
 $("#bookDetail").innerHTML=`<div class="detail-cover-area">${coverMarkup(b)}</div><div class="detail-copy"><span class="eyebrow">${b.category.toUpperCase()} · KOLEKSI BUKU</span><h1>${b.title}</h1><div class="author">Oleh ${b.author}</div><div class="detail-rating">★ ${b.rating} <span style="color:#9993aa">(${b.reviews} ulasan pembaca)</span></div><p>${b.description}</p><div class="detail-facts"><div><small>Ketersediaan</small><b class="availability">${b.stock>0?"● Tersedia":"Tidak tersedia"}</b></div><div><small>Penerbit</small><b>${b.publisher}</b></div><div><small>Tahun terbit</small><b>${b.year}</b></div><div><small>Kategori</small><b>${b.category}</b></div></div><div class="detail-actions"><button class="button button-primary" id="borrowBtn" ${b.stock===0?"disabled":""}>Pinjam buku →</button><button class="button button-soft" id="readBtn">Baca pratinjau</button></div></div>`;
 $("#borrowBtn").addEventListener("click",borrowBook); $("#readBtn").addEventListener("click",()=>openReader());
}
function openReader(){ $("#readerTitle").textContent=currentBook.title;$("#readerAuthor").textContent="Oleh "+currentBook.author;readerPage=1;updateReader();showPage("reader");}
function updateReader(){ $("#pageNumber").textContent=`Halaman ${readerPage} dari 3`;$("#prevPage").disabled=readerPage===1;$("#nextPage").disabled=readerPage===3;const paras=[["Selamat datang di ruang baca digital UIN Library. Membaca merupakan salah satu cara untuk memperluas wawasan, melatih pemikiran kritis, dan membangun pemahaman baru.","Setiap pengetahuan berawal dari rasa ingin tahu. Melalui buku ini, pembaca diajak untuk mengenali gagasan utama, memahami konsep secara bertahap, dan menghubungkannya dengan kehidupan sehari-hari.","Gunakan waktu membaca dengan nyaman. Catat bagian penting, renungkan informasi yang diperoleh, dan terus kembangkan semangat belajar."],["Pada bagian ini, pembaca diajak memahami konsep dasar secara runtut. Perhatikan istilah penting dan contoh yang disajikan agar hubungan antar gagasan menjadi lebih mudah dipahami.","Cobalah menghubungkan materi dengan pengalaman atau pengetahuan yang telah dimiliki. Cara ini membantu proses belajar menjadi lebih bermakna."],["Sebagai penutup, ingatlah bahwa proses belajar berlangsung secara bertahap. Teruslah membaca, bertanya, dan mengeksplorasi sumber pengetahuan yang tepercaya.","Terima kasih telah membaca melalui UIN Library. Selamat melanjutkan perjalanan belajar!"]];const content=paras[readerPage-1];$(".reader-paper").querySelectorAll("p:not(.reader-author)").forEach((p,i)=>p.textContent=content[i]||"");}
function borrowBook(){
 if(loans.some(l=>l.bookId===currentBook.id&&l.status==="Dipinjam")){toast("Buku ini sudah ada dalam peminjaman aktif.");return}
 const now=new Date(), due=new Date(now);due.setDate(due.getDate()+14);
 const fmt=d=>d.toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"});
 loans.unshift({bookId:currentBook.id,title:currentBook.title,author:currentBook.author,borrowed:fmt(now),due:fmt(due),status:"Dipinjam"});
 saveLoans();$("#modalTitle").textContent="Peminjaman berhasil!";$("#modalText").textContent=`Buku “${currentBook.title}” berhasil ditambahkan ke daftar peminjaman. Batas waktu peminjaman 14 hari.`;$("#modalIcon").textContent="✓";$("#modalBackdrop").classList.remove("hidden");
}
function saveLoans(){localStorage.setItem(userKey(),JSON.stringify(loans));renderLoans()}
function renderLoans(){
 const active=loans.filter(l=>l.status==="Dipinjam");$("#activeLoanCount").textContent=`${active.length} buku`;
 $("#activeLoansTable").innerHTML=active.map(l=>`<tr><td>${l.title}<br><small style="color:#aaa">${l.author}</small></td><td>${l.borrowed}</td><td>${l.due}</td><td><span class="status active">Dipinjam</span></td></tr>`).join("");
 $("#loansEmpty").classList.toggle("hidden",active.length>0);
 $("#historyTable").innerHTML=loans.map(l=>`<tr><td>${l.title}</td><td>${l.borrowed}</td><td>${l.due}</td><td><span class="status ${l.status==="Dipinjam"?"active":"returned"}">${l.status}</span></td></tr>`).join("");
 $("#historyEmpty").classList.toggle("hidden",loans.length>0);$("#historyCount").textContent=`${loans.length} aktivitas`;
}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2300)}
$$(".nav-link[data-page]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.go)));
$$(".user-chip").forEach(b=>b.addEventListener("click",()=>showPage("profile")));
document.addEventListener("click",e=>{const d=e.target.closest("[data-detail]");if(d)openDetail(d.dataset.detail)});
$("#searchInput").addEventListener("input",filterBooks);$("#sortSelect").addEventListener("change",filterBooks);
$("#categoryRow").addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;selectedCategory=b.dataset.category;$$(".category-pill").forEach(x=>x.classList.toggle("selected",x===b));filterBooks()});
$("#prevPage").addEventListener("click",()=>{if(readerPage>1){readerPage--;updateReader()}});
$("#nextPage").addEventListener("click",()=>{if(readerPage<3){readerPage++;updateReader()}});
$("#modalClose").addEventListener("click",()=>$("#modalBackdrop").classList.add("hidden"));
$("#modalSecondary").addEventListener("click",()=>$("#modalBackdrop").classList.add("hidden"));
$("#modalPrimary").addEventListener("click",()=>{$("#modalBackdrop").classList.add("hidden");showPage("history")});
$("#modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")e.currentTarget.classList.add("hidden")});
$("#mobileMenu").addEventListener("click",()=>$("#sidebar").classList.toggle("open"));
$("#helpBtn").addEventListener("click",()=>toast("Hubungi petugas perpustakaan kampus untuk bantuan."));
$("#notifBtn").addEventListener("click",()=>toast("Belum ada notifikasi baru."));
$("#logoutBtn").addEventListener("click",()=>{
 sessionStorage.removeItem("uinLibraryCurrentUser");currentUser=null;
 $("#appShell").classList.add("hidden");$("#loginScreen").classList.remove("hidden");
 $("#loginForm").reset();setLoginRole("student");toast("Kamu sudah keluar dari akun.");
});
$("#loginForm").addEventListener("submit",e=>{
 e.preventDefault();
 const name=$("#loginName").value.trim(),nim=$("#loginNim").value.trim();
 if(!name||!nim){toast("Nama dan NIM mahasiswa perlu diisi.");return}
 finishLogin(name,nim,"student");
});
$("#teacherDemoBtn").addEventListener("click",()=>{
 finishLogin("Dosen / Pengunjung","","guest");
});
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();showPage("catalog");$("#searchInput").focus()}if(e.key==="Escape")$("#modalBackdrop").classList.add("hidden")});
renderBooks();
if(currentUser){loadUserLoans();applyUserProfile();$("#loginScreen").classList.add("hidden");$("#appShell").classList.remove("hidden");renderLoans();}
else{$("#appShell").classList.add("hidden");$("#loginScreen").classList.remove("hidden");}

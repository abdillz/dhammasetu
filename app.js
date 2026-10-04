/* DHAMMASETU prototipe. Semua data adalah contoh untuk demonstrasi. */
(function () {
  "use strict";

  // ---------- ikon ----------
  const I = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>',
    cls: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    vihara: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M7 9h10l-2-4H9z"/><path d="M5 13h14l-2-4H7z"/><path d="M6 13v8h12v-8M10 21v-4h4v4"/></svg>',
    rapor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5 5 0 0 1 5.5 5.5"/></svg>',
    school: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10l9-5 9 5-9 5z"/><path d="M7 12v5c3 2 7 2 10 0v-5"/></svg>',
    teach: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="11" rx="1.5"/><path d="M8 20l4-5 4 5"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
    back: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    out: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5V3h4M16 17l5-5-5-5M21 12H9"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',
    dl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>'
  };

  // ---------- data contoh ----------
  const SEED = {
    role: null,
    view: null,
    attended: false,
    materiSaved: false,
    viharaConfirmed: false,
    nilaiValidated: false,
    students: [
      { nama: "Mei Lestari", kelas: "8B", fase: "D", rombel: "Fase D-1" },
      { nama: "Kevin Pratama", kelas: "7A", fase: "D", rombel: "Fase D-1" },
      { nama: "Sinta Wijaya", kelas: "9C", fase: "D", rombel: "Fase D-2" }
    ],
    rombel: [
      { id: "SD-A", nama: "Fase A (kelas 1 dan 2)", siswa: 17, sekolah: 9, jadwal: "Senin 08.00" },
      { id: "SD-B", nama: "Fase B (kelas 3 dan 4)", siswa: 17, sekolah: 8, jadwal: "Senin 10.00" },
      { id: "SD-C1", nama: "Fase C-1 (kelas 5 dan 6)", siswa: 17, sekolah: 7, jadwal: "Rabu 08.00" },
      { id: "SD-C2", nama: "Fase C-2 (kelas 5 dan 6)", siswa: 17, sekolah: 8, jadwal: "Rabu 10.00" },
      { id: "SMP-D1", nama: "Fase D-1 (SMP)", siswa: 17, sekolah: 6, jadwal: "Selasa 09.00", mine: true },
      { id: "SMP-D2", nama: "Fase D-2 (SMP)", siswa: 17, sekolah: 7, jadwal: "Kamis 09.00" },
      { id: "SMA-E", nama: "Fase E (kelas 10)", siswa: 17, sekolah: 6, jadwal: "Selasa 13.00" },
      { id: "SMA-F", nama: "Fase F (kelas 11 dan 12)", siswa: 17, sekolah: 7, jadwal: "Kamis 13.00" }
    ],
    wilayah: [
      { nama: "Kab. Serang", siswa: 135 },
      { nama: "Kota Cilegon", siswa: 96 },
      { nama: "Kab. Pandeglang", siswa: 24 },
      { nama: "Kab. Lebak", siswa: 31 }
    ]
  };
  const CLASSMATES = [
    ["Mei Lestari (kamu)", "SMPN 1 Kragilan"], ["Kevin Pratama", "SMPN 1 Kragilan"],
    ["Andre Gunawan", "SMPN 2 Cikande"], ["Felicia Tan", "SMPN 1 Kibin"],
    ["Rizky Wibowo", "SMPN 1 Ciruas"], ["Clara Santoso", "SMPN 3 Kramatwatu"],
    ["Yohan Setiadi", "SMPN 1 Anyar"]
  ];
  const SCHOOLS = ["Kragilan", "Cikande", "Kibin", "Ciruas", "Kramatwatu", "Anyar"];

  const KEY = "dhammasetu-demo-v1";
  let S = load();
  function load() {
    try { const raw = localStorage.getItem(KEY); if (raw) return Object.assign(clone(SEED), JSON.parse(raw)); } catch (e) {}
    return clone(SEED);
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

  const app = document.getElementById("app");
  const toastEl = document.getElementById("toast");
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
  }

  // ---------- navigasi per peran ----------
  const NAVS = {
    siswa: [["beranda", "Beranda", I.home], ["kelas", "Kelas", I.cls], ["vihara", "Vihara", I.vihara], ["rapor", "Rapor", I.rapor]],
    sekolah: [["peta", "Peta Siswa", I.users], ["tambah", "Tambah", I.school]],
    pengajar: [["rombel", "Rombel", I.teach], ["validasi", "Validasi", I.rapor]],
    kemenag: [["dasbor", "Dasbor", I.chart]]
  };

  function go(view) { S.view = view; save(); render(); app.querySelector(".screen")?.scrollTo(0, 0); }

  function shell(inner) {
    const nav = NAVS[S.role] || [];
    const navHtml = nav.length > 1 ? `<nav class="nav" aria-label="Navigasi utama">${nav.map(([v, l, ic]) =>
      `<button data-go="${v}" ${S.view === v ? 'aria-current="page"' : ""}>${ic}<span>${l}</span></button>`).join("")}</nav>` : "";
    return `<div class="screen">${inner}</div>${navHtml}`;
  }
  function top(title, opts = {}) {
    const left = opts.back ? `<button class="back" data-go="${opts.back}" aria-label="Kembali">${I.back}</button>` : "";
    const right = `<button class="back" data-action="logout" aria-label="Keluar">${I.out}</button>`;
    return `<div class="topbar">${left}<h2 style="flex:1;${left ? "margin-left:12px" : ""}">${title}</h2>${right}</div>`;
  }

  // ---------- layar ----------
  function vLogin() {
    const roles = [
      ["siswa", "Siswa atau orang tua", "Ikut kelas gabungan, lihat jadwal vihara dan rapor", I.book, "var(--saffron-soft)", "var(--saffron-deep)"],
      ["sekolah", "Operator sekolah", "Daftarkan siswa Buddha di sekolahmu", I.school, "var(--bodhi-soft)", "var(--bodhi)"],
      ["pengajar", "Pengajar", "Guru pengampu dan mahasiswa pendamping IABN", I.teach, "var(--lotus-soft)", "#9A4A53"],
      ["kemenag", "Kemenag atau dinas", "Pantau kebutuhan guru per wilayah", I.chart, "#E4E9EF", "var(--ink)"]
    ];
    return `<div class="login">
      <div class="login-hero">
        <svg class="logo" aria-hidden="true"><use href="#logo"/></svg>
        <h1>DHAMMASETU</h1>
        <p>Tak ada lagi yang belajar agama sendirian.</p>
      </div>
      <div class="login-body">
        <p class="muted" style="margin:0 0 12px">Masuk sebagai</p>
        ${roles.map(([id, t, d, ic, bg, fg]) => `
          <button class="role" data-role="${id}">
            <span class="ico" style="background:${bg};color:${fg}">${ic}</span>
            <span><strong>${t}</strong><span>${d}</span></span>
          </button>`).join("")}
        <p class="note">Masuk dengan NISN dan kode sekolah, atau akun SIMPATIKA untuk pengajar. Pada prototipe ini cukup pilih peran.</p>
        <p class="note">Dikelola Institut Agama Buddha Negeri Sriwijaya Tangerang. Data pada prototipe adalah contoh.</p>
      </div>
    </div>`;
  }

  function bridgeSvg() {
    const W = 320, H = 120, topX = W / 2, topY = 18;
    const xs = SCHOOLS.map((_, i) => 26 + i * ((W - 52) / (SCHOOLS.length - 1)));
    const arcs = xs.map((x, i) => `<path class="arc" style="animation-delay:${i * 0.12}s" d="M${x} ${H - 30} Q ${(x + topX) / 2} ${topY + 10} ${topX} ${topY + 8}"/>`).join("");
    const dots = xs.map((x, i) => `<circle cx="${x}" cy="${H - 30}" r="5" fill="#fff"/><text class="school-label" x="${x}" y="${H - 12}" text-anchor="middle">${SCHOOLS[i]}</text>`).join("");
    return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Siswa dari enam sekolah bergabung dalam satu kelas">
      ${arcs}${dots}<circle cx="${topX}" cy="${topY + 8}" r="9" fill="#E39B2D"/></svg>`;
  }

  function vBeranda() {
    return shell(`
      <div class="topbar"><div><p class="muted" style="margin:0">Namo Buddhaya,</p><p class="greet">Mei</p></div>
        <button class="avatar" data-action="logout" aria-label="Keluar">ML</button></div>
      <div class="next-class">
        <div class="when">Kelas berikutnya: Selasa, 6 Oktober, 09.00 sampai 11.00</div>
        <h3>PAB Kelas Gabungan <span style="white-space:nowrap">Fase D-1</span></h3>
        <div class="who">Bu Ratna Dewi (guru pengampu) dan Kak Arya (pendamping IABN)</div>
        <div class="bridge">${bridgeSvg()}</div>
        <p class="bridge-caption">Teman sekelasmu berasal dari 6 sekolah di Kabupaten Serang. Ikuti dari lab komputer sekolahmu.</p>
        <button class="btn btn-primary" data-go="kelas">Masuk kelas</button>
      </div>
      <div class="quick">
        <button data-action="materi">${I.dl}<span>${S.materiSaved ? "Materi tersimpan" : "Simpan materi"}</span></button>
        <button data-go="vihara">${I.vihara}<span>Pertemuan vihara</span></button>
        <button data-go="rapor">${I.rapor}<span>Rapor</span></button>
      </div>
      <p class="section-title">Minggu ini</p>
      <div class="list">
        <div class="row"><span class="dot" style="background:var(--saffron)"></span><div class="grow"><div class="title">Materi: Sila sebagai dasar perilaku</div><div class="muted">Bab 2, dibaca sebelum kelas Selasa</div></div></div>
        <div class="row"><span class="dot" style="background:var(--lotus)"></span><div class="grow"><div class="title">Puja bakti dan meditasi</div><div class="muted">Sabtu 17 Oktober, vihara mitra</div></div></div>
        <div class="row"><span class="dot" style="background:var(--bodhi)"></span><div class="grow"><div class="title">Tugas refleksi Brahmavihara</div><div class="muted">Dikumpulkan Jumat, 9 Oktober</div></div></div>
      </div>`);
  }

  let classTab = "peserta";
  function vKelas() {
    const tabBody = classTab === "peserta"
      ? `<div class="list">${CLASSMATES.map(([n, s]) => `<div class="row"><span class="avatar" style="width:32px;height:32px;font-size:12px">${esc(n.split(" ").map(w => w[0]).slice(0, 2).join(""))}</span><div class="grow"><div class="title">${esc(n)}</div><div class="school-tag">${esc(s)}</div></div></div>`).join("")}
          <div class="row"><div class="grow muted">+10 siswa lain dari sekolah yang sama</div></div></div>`
      : `<div class="card"><h3>Sila sebagai dasar perilaku</h3><p class="muted" style="margin:0 0 12px">Bab 2, 12 halaman, video 8 menit</p>
          <button class="btn btn-ghost" data-action="materi">${S.materiSaved ? "Tersimpan untuk dibuka tanpa internet" : "Simpan untuk dibuka tanpa internet"}</button></div>
         <div class="card"><h3>Tugas refleksi Brahmavihara</h3><p class="muted" style="margin:0">Tulis satu pengalaman menerapkan metta di sekolah. Batas Jumat, 9 Oktober.</p></div>`;
    return shell(`
      ${top("Kelas Fase D-1", { back: "beranda" })}
      <div class="video">
        <span class="live">Berlangsung</span>
        <div class="pip">Kak Arya</div>
        <div class="face"><span>RD</span></div>
        <span class="name">Bu Ratna Dewi, guru pengampu</span>
      </div>
      <button class="btn ${S.attended ? "btn-ghost" : "btn-dark"}" data-action="hadir" ${S.attended ? "disabled" : ""}>${S.attended ? I.check + " Kehadiran tercatat" : "Catat kehadiran"}</button>
      <div style="height:14px"></div>
      <div class="tabs" role="tablist">
        <button role="tab" aria-selected="${classTab === "peserta"}" data-tab="peserta">Peserta (17)</button>
        <button role="tab" aria-selected="${classTab === "materi"}" data-tab="materi">Materi dan tugas</button>
      </div>
      ${tabBody}
      <p class="note">Rekaman kelas tersimpan 7 hari untuk siswa yang tertinggal.</p>`);
  }

  function vVihara() {
    const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
    // Oktober 2026 dimulai hari Kamis
    let cells = days.map(d => `<div class="h">${d}</div>`).join("");
    for (let i = 0; i < 3; i++) cells += `<div></div>`;
    for (let d = 1; d <= 31; d++) cells += `<div class="d ${d === 17 ? "ev" : ""} ${d === 4 ? "today" : ""}">${d}</div>`;
    return shell(`
      ${top("Pertemuan vihara")}
      <p class="muted" style="margin:-8px 0 12px">Oktober 2026, sekali sebulan untuk praktik yang sulit dilakukan daring</p>
      <div class="cal" aria-label="Kalender Oktober 2026">${cells}</div>
      <div class="card vihara-card">
        <span class="chip chip-lotus">Sabtu, 17 Oktober, 08.00 sampai 11.00</span>
        <h3 style="margin-top:10px">Vihara Dharma Sasana</h3>
        <p class="muted" style="margin:0 0 10px">Vihara mitra (contoh), Kragilan, 4,2 km dari rumah</p>
        <ul class="small" style="margin:0 0 14px;padding-left:18px;color:var(--ink-2)">
          <li>Puja bakti bersama</li><li>Latihan meditasi anapanasati</li><li>Diskusi Dhamma dengan pendamping IABN</li>
        </ul>
        <button class="btn ${S.viharaConfirmed ? "btn-ghost" : "btn-primary"}" data-action="vihara" ${S.viharaConfirmed ? "disabled" : ""}>
          ${S.viharaConfirmed ? I.check + " Kehadiran dikonfirmasi orang tua" : "Konfirmasi kehadiran"}</button>
      </div>
      <p class="note">Pertemuan bergilir antarvihara mitra dari majelis yang berbeda.</p>`);
  }

  function vRapor() {
    const v = S.nilaiValidated;
    return shell(`
      ${top("Rapor PAB")}
      <div class="card">
        <p class="muted" style="margin:0">Semester ganjil 2026/2027, Fase D-1</p>
        <div class="score"><b>87</b><span class="muted">nilai akhir</span></div>
        <div class="list" style="margin:12px 0 0">
          <div class="row"><div class="grow">Pengetahuan</div><b>86</b></div>
          <div class="row"><div class="grow">Keterampilan</div><b>88</b></div>
          <div class="row"><div class="grow">Sikap</div><b>Baik</b></div>
          <div class="row"><div class="grow">Kehadiran</div><b>${S.attended ? "12/12" : "11/12"}</b></div>
        </div>
      </div>
      <p class="section-title">Status pengiriman</p>
      <div class="card">
        <ol class="steps">
          <li class="done"><span class="b">${I.check}</span><div><b class="small">Nilai diisi pengajar</b><div class="muted">Kak Arya, 1 Oktober</div></div></li>
          <li class="${v ? "done" : "wait"}"><span class="b">${v ? I.check : "2"}</span><div><b class="small">${v ? "Divalidasi guru pengampu" : "Menunggu validasi guru pengampu"}</b><div class="muted">Bu Ratna Dewi, guru PAB bersertifikat</div></div></li>
          <li class="${v ? "done" : ""}"><span class="b">${v ? I.check : "3"}</span><div><b class="small">${v ? "Terkirim ke e-rapor SMPN 1 Kragilan" : "Belum terkirim ke e-rapor sekolah"}</b><div class="muted">Wali kelas 8B menerima notifikasi</div></div></li>
        </ol>
      </div>
      ${v ? "" : `<p class="note">Coba masuk sebagai pengajar untuk memvalidasi nilai ini.</p>`}
      <div class="card"><b class="small">Catatan guru</b><p class="muted" style="margin:4px 0 0">Mei aktif berdiskusi dan tugas refleksinya menunjukkan pemahaman sila yang baik.</p></div>`);
  }

  let formError = "";
  function vPeta() {
    const waiting = S.students.length;
    return shell(`
      ${top("SMPN 1 Kragilan")}
      <div class="summary-band">
        <div><b>${waiting}</b><span>siswa Buddha terdaftar</span></div>
        <div><b>2</b><span>rombel gabungan diikuti</span></div>
      </div>
      <div class="card" style="background:var(--bodhi-soft);border-color:transparent">
        <b class="small">Kenapa perlu didaftarkan?</b>
        <p class="small" style="margin:4px 0 0;color:var(--ink-2)">Sekolah ini memiliki kurang dari 15 siswa Buddha. Sesuai PMA 16/2010 Pasal 4 ayat (4), siswa digabungkan dengan siswa dari sekolah lain agar mendapat pelajaran dari guru seagama.</p>
      </div>
      <p class="section-title">Siswa terdaftar</p>
      <div class="list">${S.students.map(s => `
        <div class="row"><div class="grow"><div class="title">${esc(s.nama)}</div><div class="muted">Kelas ${esc(s.kelas)}, fase ${esc(s.fase)}</div></div>
        <span class="chip ${s.rombel ? "chip-ok" : "chip-wait"}">${s.rombel ? esc(s.rombel) : "Menunggu rombel"}</span></div>`).join("")}</div>
      <button class="btn btn-primary" data-go="tambah">Tambah siswa</button>`);
  }

  function vTambah() {
    return shell(`
      ${top("Tambah siswa", { back: "peta" })}
      <form id="addForm" novalidate>
        <div class="field"><label for="nama">Nama lengkap</label><input id="nama" name="nama" autocomplete="off" placeholder="Contoh: Dewi Kusuma"></div>
        <div class="field"><label for="nisn">NISN</label><input id="nisn" name="nisn" inputmode="numeric" placeholder="10 digit"></div>
        <div class="field"><label for="kelas">Kelas</label><select id="kelas" name="kelas"><option>7A</option><option>7B</option><option>8A</option><option>8B</option><option>9A</option><option>9C</option></select></div>
        <label class="check"><input type="checkbox" id="consent" name="consent"><span>Orang tua atau wali sudah menyetujui data anak disimpan untuk keperluan pembelajaran agama, sesuai UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi.</span></label>
        ${formError ? `<p class="error" role="alert">${esc(formError)}</p>` : ""}
        <button class="btn btn-primary" type="submit">Simpan siswa</button>
      </form>`);
  }

  function vRombel() {
    const total = S.rombel.reduce((a, r) => a + r.siswa, 0);
    return shell(`
      ${top("Rombel Kab. Serang")}
      <div class="summary-band">
        <div><b>${S.rombel.length}</b><span>rombel gabungan</span></div>
        <div><b>${total}</b><span>siswa</span></div>
        <div><b>${S.rombel.length * 3}</b><span>JP per minggu</span></div>
      </div>
      <p class="muted" style="margin:0 0 10px">Guru pengampu: Ratna Dewi, S.Pd.B. Didampingi 6 mahasiswa IABN.</p>
      <div class="list">${S.rombel.map(r => `
        <div class="row"><div class="grow"><div class="title">${esc(r.nama)}</div><div class="muted">${r.siswa} siswa dari ${r.sekolah} sekolah, ${esc(r.jadwal)}</div></div>
        ${r.mine ? `<span class="chip ${S.nilaiValidated ? "chip-ok" : "chip-wait"}">${S.nilaiValidated ? "Nilai tervalidasi" : "Nilai menunggu"}</span>` : `<span class="chip chip-ok">Berjalan</span>`}</div>`).join("")}</div>
      <p class="note">8 rombel × 3 JP = 24 JP per minggu, setara beban mengajar minimal satu guru.</p>`);
  }

  function vValidasi() {
    const v = S.nilaiValidated;
    const rows = [["Mei Lestari", "SMPN 1 Kragilan", 87], ["Andre Gunawan", "SMPN 2 Cikande", 84], ["Felicia Tan", "SMPN 1 Kibin", 90], ["Rizky Wibowo", "SMPN 1 Ciruas", 81], ["Clara Santoso", "SMPN 3 Kramatwatu", 88]];
    return shell(`
      ${top("Validasi nilai")}
      <div class="card">
        <span class="chip ${v ? "chip-ok" : "chip-wait"}">${v ? "Sudah divalidasi" : "17 nilai menunggu validasi"}</span>
        <h3 style="margin-top:10px">Fase D-1, semester ganjil</h3>
        <p class="muted" style="margin:0">Diisi oleh Kak Arya (mahasiswa pendamping IABN). Hanya guru pengampu bersertifikat yang dapat memvalidasi.</p>
      </div>
      <div class="list">${rows.map(([n, s, x]) => `<div class="row"><div class="grow"><div class="title">${n}</div><div class="school-tag">${s}</div></div><b>${x}</b></div>`).join("")}
        <div class="row"><div class="grow muted">+12 siswa lainnya</div></div></div>
      <button class="btn ${v ? "btn-ghost" : "btn-dark"}" data-action="validasi" ${v ? "disabled" : ""}>${v ? I.check + " Nilai terkirim ke e-rapor 6 sekolah" : "Validasi dan kirim ke e-rapor"}</button>`);
  }

  function vDasbor() {
    const rows = S.wilayah.map(w => {
      // asumsi sebaran SD:SMP:SMA = 6:3:3, 17 siswa per rombel, 3 JP per rombel
      const sd = Math.round(w.siswa * 0.5), smp = Math.round(w.siswa * 0.25), sma = w.siswa - sd - smp;
      const rombel = [sd, smp, sma].reduce((a, n) => a + Math.max(1, Math.round(n / 17)), 0);
      const jp = rombel * 3;
      const guru = Math.max(1, Math.ceil(jp / 24));
      return { ...w, rombel, jp, guru };
    });
    const tot = rows.reduce((a, r) => ({ siswa: a.siswa + r.siswa, rombel: a.rombel + r.rombel, guru: a.guru + r.guru }), { siswa: 0, rombel: 0, guru: 0 });
    const max = Math.max(...rows.map(r => r.siswa));
    return shell(`
      ${top("Dasbor kebutuhan")}
      <p class="muted" style="margin:-8px 0 12px">Provinsi Banten, sekolah dengan siswa Buddha kurang dari 15</p>
      <div class="dash-hero">
        <div class="big">${tot.guru} guru</div>
        <p>cukup untuk melayani ${tot.siswa} siswa Buddha dalam ${tot.rombel} rombel gabungan, dibanding satu guru per sekolah bila tanpa penggabungan.</p>
      </div>
      <div class="card">
        <h3>Siswa terdata per wilayah</h3>
        <div class="bars" style="margin-top:10px">${rows.map(r => `
          <div class="bar-row"><div class="lbl"><span>${r.nama}</span><span>${r.siswa}</span></div><div class="bar"><i style="width:${(r.siswa / max * 100).toFixed(0)}%"></i></div></div>`).join("")}</div>
      </div>
      <div class="card">
        <h3>Rekomendasi formasi</h3>
        <table class="t"><thead><tr><th>Wilayah</th><th>Rombel</th><th>JP/minggu</th><th>Guru</th></tr></thead>
        <tbody>${rows.map(r => `<tr><td>${r.nama}</td><td>${r.rombel}</td><td>${r.jp}</td><td>${r.guru}</td></tr>`).join("")}</tbody></table>
        <p class="note">Dihitung dari rombel gabungan: 17 siswa per rombel, 3 JP per rombel, 24 JP per guru. Hanya data agregat, tanpa identitas siswa.</p>
      </div>`);
  }

  const VIEWS = { beranda: vBeranda, kelas: vKelas, vihara: vVihara, rapor: vRapor, peta: vPeta, tambah: vTambah, rombel: vRombel, validasi: vValidasi, dasbor: vDasbor };
  const HOME = { siswa: "beranda", sekolah: "peta", pengajar: "rombel", kemenag: "dasbor" };

  function render() {
    if (!S.role) { app.innerHTML = vLogin(); return; }
    const fn = VIEWS[S.view] || VIEWS[HOME[S.role]];
    app.innerHTML = fn();
    const form = document.getElementById("addForm");
    if (form) form.addEventListener("submit", onAdd);
  }

  function onAdd(e) {
    e.preventDefault();
    const f = e.target;
    const nama = f.nama.value.trim();
    if (!nama) { formError = "Isi nama lengkap siswa."; return render(); }
    if (!/^\d{10}$/.test(f.nisn.value.trim())) { formError = "NISN harus 10 digit angka."; return render(); }
    if (!f.consent.checked) { formError = "Centang persetujuan orang tua untuk menyimpan data."; return render(); }
    formError = "";
    S.students.push({ nama, kelas: f.kelas.value, fase: "D", rombel: "Fase D-2" });
    save(); go("peta");
    toast(nama + " tersimpan dan masuk rombel Fase D-2.");
  }

  // ---------- event ----------
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-role],[data-go],[data-action],[data-tab]");
    if (!t) return;
    if (t.dataset.role) { S.role = t.dataset.role; S.view = HOME[S.role]; save(); return render(); }
    if (t.dataset.go) { if (t.dataset.go !== "tambah") formError = ""; return go(t.dataset.go); }
    if (t.dataset.tab) { classTab = t.dataset.tab; return render(); }
    switch (t.dataset.action) {
      case "logout": S.role = null; S.view = null; save(); render(); break;
      case "hadir": S.attended = true; save(); render(); toast("Kehadiran tercatat untuk kelas hari ini."); break;
      case "materi": if (!S.materiSaved) { S.materiSaved = true; save(); render(); toast("Materi tersimpan dan bisa dibuka tanpa internet."); } break;
      case "vihara": S.viharaConfirmed = true; save(); render(); toast("Kehadiran dikonfirmasi. Pengingat dikirim sehari sebelumnya."); break;
      case "validasi": S.nilaiValidated = true; save(); render(); toast("Nilai divalidasi dan terkirim ke e-rapor sekolah asal."); break;
      case "reset": S = clone(SEED); classTab = "peserta"; formError = ""; save(); render(); toast("Data demo diatur ulang."); break;
    }
  });

  render();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
  }
})();

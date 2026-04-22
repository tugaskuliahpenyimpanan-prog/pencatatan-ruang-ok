# 📱 Panduan Install OK Operasi ke Android

## File yang perlu diupload
```
ok-operasi/
├── index.html       ← aplikasi utama
├── manifest.json    ← konfigurasi PWA
├── sw.js            ← service worker (offline)
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

## 🚀 Cara 1 — GitHub Pages (Gratis, Direkomendasikan)

### Langkah 1: Buat akun GitHub
1. Buka **github.com** → klik **Sign up**
2. Daftar dengan email (gratis)

### Langkah 2: Buat repository baru
1. Klik tombol **＋** (pojok kanan atas) → **New repository**
2. Nama repository: `ok-operasi` (atau bebas)
3. Pilih **Public**
4. Klik **Create repository**

### Langkah 3: Upload file
1. Di halaman repository, klik **uploading an existing file**
2. Upload **semua file** sekaligus:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - Folder `icons/` (dengan kedua file PNG di dalamnya)
3. Klik **Commit changes**

### Langkah 4: Aktifkan GitHub Pages
1. Klik tab **Settings**
2. Di sidebar kiri, klik **Pages**
3. Di bagian **Source**, pilih **Deploy from a branch**
4. Branch: pilih **main**, folder: **/ (root)**
5. Klik **Save**
6. Tunggu 1-2 menit → muncul link:
   ```
   https://USERNAME.github.io/ok-operasi/
   ```

### Langkah 5: Install di Android
1. Buka link di atas menggunakan **Chrome Android**
2. Tunggu beberapa detik → muncul banner **"Install OK Operasi"** di bawah layar
3. Tap **Install** → konfirmasi
4. ✅ Ikon OK Operasi muncul di home screen!

---

## 🌐 Cara 2 — Netlify (Alternatif, Lebih Cepat)

1. Buka **netlify.com** → Sign up gratis
2. Klik **Add new site** → **Deploy manually**
3. **Drag & drop** seluruh folder `ok-operasi/` ke halaman tersebut
4. Dapat link langsung: `https://xxxxx.netlify.app`
5. Buka di Chrome Android → Install

---

## ❓ FAQ

**Q: Apakah data aman?**
Data tersimpan di localStorage HP masing-masing. Tidak dikirim ke server manapun.

**Q: Kalau HP mati/restart, data hilang?**
Tidak. localStorage tetap ada selama app tidak dihapus.

**Q: Bisa dipakai offline?**
Ya, setelah pertama kali dibuka saat ada internet, semua aset di-cache dan bisa dipakai offline penuh.

**Q: Bisa diinstall di iOS/iPhone?**
Bisa, tapi caranya berbeda:
1. Buka link di **Safari** (bukan Chrome)
2. Tap ikon **Share** (kotak dengan panah)
3. Pilih **"Add to Home Screen"**

**Q: Bisa dipakai di beberapa HP sekaligus?**
Bisa! Gunakan fitur **📤 Share / 📥 Import** yang sudah ada di aplikasi untuk sinkronisasi data antar HP.

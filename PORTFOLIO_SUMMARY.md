# 🎨 Portfolio Section - CMS Ready Structure

## ✅ Apa yang Sudah Dilakukan

### 1. **Refactoring Komponen** ✨
- ✅ Mengubah hard-coded HTML menjadi data-driven component
- ✅ Semua konten sekarang diambil dari data object
- ✅ Layout Bento Grid tetap sama, lebih mudah di-manage
- ✅ Menggunakan gambar lokal dari `/public/images/project/`

### 2. **Struktur File Baru** 📁

```
web/
├── components/
│   └── StatsSection.vue              ← Komponen utama (sudah refactor)
│
├── composables/
│   └── usePortfolio.js               ← Data handler (siap CMS)
│
├── server/
│   └── api/
│       └── portfolio.get.ts          ← API endpoint (untuk backend)
│
├── types/
│   └── portfolio.ts                  ← Type definitions
│
├── config/
│   └── portfolio.config.ts           ← Style configuration
│
├── public/
│   └── images/
│       └── project/
│           ├── 1.png ✅ (Hero Card)
│           ├── 2.png ✅ (Feature Card)
│           ├── 3.png ✅ (About Card)
│           ├── 4.png ✅ (Project 1)
│           ├── 5.png ✅ (Project 2)
│           ├── 6.png ✅ (Project 3)
│           ├── 7.png ✅ (Project 4)
│           └── 8.png (siap digunakan)
│
└── PORTFOLIO_README.md               ← Dokumentasi lengkap
```

## 🎯 Cara Kerja Saat Ini (Frontend Only)

### Flow Data:
```
usePortfolio.js (data source)
    ↓
StatsSection.vue (component)
    ↓
Browser (rendered)
```

### Mengubah Konten:
1. Edit file: `composables/usePortfolio.js`
2. Ubah data di array `portfolioItems`, `stats`, atau `header`
3. Save → otomatis reload

**Contoh**: Mengubah judul hero card
```javascript
// File: composables/usePortfolio.js
{
  id: 1,
  type: 'hero',
  title: 'Judul Baru Anda',  // ← Ubah di sini
  description: 'Deskripsi baru',
  // ...
}
```

## 🚀 Roadmap ke CMS (Nanti)

### Phase 1: Setup Backend (Saat Backend Siap)
```bash
# 1. Install database client
npm install prisma @prisma/client
# atau
npm install mongoose
```

### Phase 2: Migrasi Data
1. Buat database schema (sudah ada di `PORTFOLIO_README.md`)
2. Import data dari `usePortfolio.js` ke database
3. Test API endpoint: `/api/portfolio`

### Phase 3: Connect Frontend ke Backend
```javascript
// File: composables/usePortfolio.js
// Ubah dari:
const portfolioItems = [...]

// Menjadi:
const { data } = await useFetch('/api/portfolio')
return data.value
```

### Phase 4: Build CMS Admin (Opsional)
- Dashboard untuk manage portfolio
- Upload images
- CRUD operations
- Filter & search

## 📊 Mapping Gambar Saat Ini

| Card Type | Gambar | Keterangan |
|-----------|--------|------------|
| Hero (2x2) | 1.png | Large featured card |
| Feature | 2.png | Strategist card |
| About | 3.png | Purple about card |
| Project 1 | 4.png | Orange Blox |
| Project 2 | 5.png | Nova Scene |
| Project 3 | 6.png | Arched Pink |
| Project 4 | 7.png | Liquid |
| Available | 8.png | Siap digunakan |

## 🎨 Tipe Card yang Tersedia

1. **Hero** (2x2) - Featured project besar
2. **Feature** (2x1) - Highlight fitur/layanan
3. **Project** (1x1) - Portfolio item standar
4. **Pricing** (2x1) - Tampilkan paket harga
5. **About** (2x1) - Tentang tim/perusahaan
6. **Info** (2x1) - Informasi umum

## 💡 Tips & Tricks

### Menambah Portfolio Item Baru:
```javascript
// Tambahkan di array portfolioItems
{
  id: 10,  // ID unik baru
  type: 'project',
  image: '/images/project/8.png',  // Gunakan gambar ke-8
  title: 'Project Baru',
  description: 'Deskripsi project',
  category: 'web-design',
  client: 'Nama Client'
}
```

### Mengubah Layout Grid:
Ubah `colSpan` dan `rowSpan`:
- 1x1: `colSpan: ''`, `rowSpan: ''`
- 2x1: `colSpan: 'lg:col-span-2'`, `rowSpan: ''`
- 2x2: `colSpan: 'lg:col-span-2'`, `rowSpan: 'lg:row-span-2'`

### Mengubah Warna/Gradient:
Lihat opsi di `config/portfolio.config.ts`:
```javascript
bgGradient: 'bg-gradient-to-br from-blue-600 to-blue-800'
```

### Mengubah Stats:
```javascript
const stats = [
  { value: '200+', label: 'Projek Selesai' },  // ← Edit di sini
  // ...
]
```

## 🔍 File Penting untuk Edit

### 1. Data Portfolio
**File**: `composables/usePortfolio.js`
**Edit**: Konten, judul, deskripsi, gambar

### 2. Styling
**File**: `config/portfolio.config.ts`
**Edit**: Warna, spacing, typography

### 3. Types (untuk TypeScript)
**File**: `types/portfolio.ts`
**Edit**: Tambah field baru jika diperlukan

### 4. API Endpoint (untuk backend)
**File**: `server/api/portfolio.get.ts`
**Edit**: Saat connect ke database/CMS

## 📝 Checklist Before Go Live

- [ ] Ganti semua teks placeholder dengan konten real
- [ ] Upload gambar portfolio yang sesungguhnya
- [ ] Test responsive di mobile, tablet, desktop
- [ ] Optimize images (compress, WebP format)
- [ ] Update meta tags untuk SEO
- [ ] Test loading performance
- [ ] Verify dark mode compatibility
- [ ] Add analytics tracking (optional)

## 🐛 Troubleshooting

### Gambar tidak muncul?
- Pastikan file ada di `/public/images/project/`
- Check path gambar: `/images/project/1.png` (tanpa public)
- Clear cache dan reload

### Layout berantakan?
- Check Tailwind CSS loaded
- Verify class names di `portfolioItems`
- Test di browser lain

### Data tidak update?
- Hard refresh browser (Cmd/Ctrl + Shift + R)
- Check composable di `usePortfolio.js`
- Restart dev server

## 🎓 Dokumentasi Lengkap

Baca `PORTFOLIO_README.md` untuk:
- Database schema
- API examples
- Advanced features
- Best practices

## 📞 Next Steps

1. **Sekarang**: Edit konten di `usePortfolio.js`
2. **Testing**: Pastikan semua tampil dengan baik
3. **Content**: Ganti dengan konten real company
4. **Images**: Upload portfolio images yang sesungguhnya
5. **Backend**: Mulai develop CMS saat siap

---

**Status**: ✅ Frontend Ready | ⏳ Backend Pending
**Last Update**: December 9, 2025

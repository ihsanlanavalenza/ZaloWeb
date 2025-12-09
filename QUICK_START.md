# 🚀 Quick Start Guide - Portfolio Section

## 📝 Edit Konten Portfolio (Paling Sering Dilakukan)

### 1. Mengubah Teks & Gambar Portfolio

**File**: `composables/usePortfolio.js`

```javascript
// Cari item yang ingin diubah berdasarkan ID
{
  id: 5,                                    // ID item
  type: 'project',                          // Tipe card
  image: '/images/project/4.png',           // ← UBAH: Path gambar
  title: 'Orange Blox',                     // ← UBAH: Judul
  description: 'Fashion brand identity',    // ← UBAH: Deskripsi
  category: 'branding',                     // ← UBAH: Kategori
  client: 'Orange Blox Inc.'               // ← UBAH: Nama client
}
```

### 2. Menambah Portfolio Item Baru

**Langkah**:
1. Upload gambar ke `/public/images/project/` (contoh: `9.png`)
2. Edit `composables/usePortfolio.js`
3. Tambahkan object baru di array `portfolioItems`:

```javascript
{
  id: 10,                                   // ID baru (increment)
  type: 'project',                          // Pilih tipe card
  image: '/images/project/9.png',           // Path gambar baru
  title: 'Project Baru Anda',              
  description: 'Deskripsi singkat project',
  category: 'web-design',
  client: 'Nama Client',
  colSpan: '',                              // Ukuran: '' = 1 kolom
  rowSpan: '',                              // '' = 1 baris
  bgGradient: 'bg-gray-900',
  aspectRatio: 'aspect-square relative',
  imageEffect: 'opacity-40',
  padding: 'p-6',
  contentLayout: 'flex flex-col justify-end',
  buttonStyle: 'bg-orange-500 text-white'
}
```

### 3. Mengubah Stats (Angka Statistik)

**File**: `composables/usePortfolio.js`

```javascript
const stats = [
  { value: '180+', label: 'Projek Selesai' },    // ← UBAH di sini
  { value: '140+', label: 'Klien Puas' },        // ← UBAH di sini
  { value: '99.8%', label: 'Uptime Rate' },      // ← UBAH di sini
  { value: '4.8/5', label: 'Rating Klien' }      // ← UBAH di sini
]
```

### 4. Mengubah Header Section

**File**: `composables/usePortfolio.js`

```javascript
const header = {
  badge: 'Portfolio Kami',                              // ← UBAH
  title: 'Karya yang Berbicara',                       // ← UBAH
  description: 'Dari startup hingga enterprise...'     // ← UBAH
}
```

### 5. Mengubah Call-to-Action Button

**File**: `composables/usePortfolio.js`

```javascript
const cta = {
  text: 'Lihat 200+ Portfolio Kami',    // ← UBAH teks button
  link: '#portfolio'                     // ← UBAH link tujuan
}
```

## 🎨 Template Card Siap Pakai

### Template Project Card Standar
```javascript
{
  id: 11,
  type: 'project',
  image: '/images/project/10.png',
  title: 'Nama Project',
  description: 'Deskripsi project',
  category: 'web-design',
  client: 'Nama Client',
  colSpan: '',                              // 1x1 kotak
  rowSpan: '',
  bgGradient: 'bg-gray-900',
  aspectRatio: 'aspect-square relative',
  imageEffect: 'opacity-40',
  padding: 'p-6',
  contentLayout: 'flex flex-col justify-end',
  buttonStyle: 'bg-orange-500 text-white'
}
```

### Template Hero Card (Featured - 2x2)
```javascript
{
  id: 12,
  type: 'hero',
  image: '/images/project/hero.png',
  badge: 'Featured Project',
  title: 'Project Unggulan',
  description: 'Deskripsi lengkap project featured',
  colSpan: 'lg:col-span-2',                // 2x2 besar
  rowSpan: 'lg:row-span-2',
  bgGradient: 'bg-gradient-to-br from-orange-500 to-red-600',
  aspectRatio: 'aspect-square relative',
  imageEffect: 'group-hover:scale-105 transition-transform duration-500 mix-blend-overlay opacity-60',
  padding: 'p-8',
  contentLayout: 'flex flex-col justify-between',
  showPlaceholders: true
}
```

### Template Feature Card (2x1 Horizontal)
```javascript
{
  id: 13,
  type: 'feature',
  image: '/images/project/feature.png',
  title: 'Layanan Kami',
  description: 'Deskripsi layanan',
  showButton: true,
  buttonText: 'Selengkapnya',
  colSpan: 'lg:col-span-2',                // 2x1 horizontal
  rowSpan: '',
  bgGradient: 'bg-gradient-to-br from-gray-900 to-gray-800',
  aspectRatio: 'aspect-[2/1] relative',
  imageEffect: 'opacity-40',
  padding: 'p-8',
  contentLayout: 'flex flex-col justify-center'
}
```

## 🖼️ Upload Gambar Baru

1. Simpan gambar di: `/public/images/project/`
2. Nama file: `nama-file.png` atau `nama-file.jpg`
3. Gunakan path: `/images/project/nama-file.png` (tanpa "public")

**Rekomendasi Size Gambar**:
- Square (1x1): 600x600px
- Wide (2x1): 1200x600px
- Hero (2x2): 1200x1200px

## 🎨 Pilihan Warna Background

```javascript
// Pilih salah satu:
bgGradient: 'bg-gradient-to-br from-orange-500 to-red-600'   // Orange
bgGradient: 'bg-gradient-to-br from-purple-600 to-purple-800' // Purple
bgGradient: 'bg-gradient-to-br from-blue-600 to-blue-800'    // Blue
bgGradient: 'bg-gradient-to-br from-green-600 to-green-800'  // Green
bgGradient: 'bg-gray-900'                                     // Dark Gray
```

## 📏 Ukuran Card (Layout)

```javascript
// 1x1 (Small Square)
colSpan: '',
rowSpan: ''

// 2x1 (Wide Horizontal)
colSpan: 'lg:col-span-2',
rowSpan: ''

// 2x2 (Large Square)
colSpan: 'lg:col-span-2',
rowSpan: 'lg:row-span-2'

// 3x1 (Extra Wide)
colSpan: 'lg:col-span-3',
rowSpan: ''
```

## ⚡ Quick Tips

### Menghapus Portfolio Item
Cukup hapus/comment object tersebut di array `portfolioItems`

### Mengubah Urutan Portfolio
Pindahkan posisi object di array (yang paling atas tampil duluan)

### Menyembunyikan Item (tanpa hapus)
Tambahkan property:
```javascript
isActive: false
```

### Test di Browser
Setelah edit, save file → auto reload di browser

## 🆘 Troubleshooting Cepat

❌ **Gambar tidak muncul?**
- Check path: `/images/project/namafile.png` (bukan `/public/images/...`)
- Pastikan file ada di folder `/public/images/project/`

❌ **Layout berantakan?**
- Check `colSpan` dan `rowSpan`
- Pastikan ada tutup kurung `}` dan koma `,`

❌ **Error di console?**
- Check syntax JavaScript (kurung, koma, tanda kutip)
- Pastikan setiap item punya `id` yang unik

## 📞 Need Help?

Baca dokumentasi lengkap: `PORTFOLIO_README.md`

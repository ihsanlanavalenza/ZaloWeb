# 📋 Portfolio Cheat Sheet - Quick Reference

## 🚀 Most Common Tasks

### 1️⃣ Mengubah Teks Portfolio
**File**: `composables/usePortfolio.js`

```javascript
// Cari item berdasarkan ID
{
  id: 5,
  title: 'UBAH DI SINI',           // ← Judul
  description: 'UBAH DI SINI',     // ← Deskripsi
}
```

---

### 2️⃣ Mengganti Gambar
**Steps**:
1. Upload gambar ke: `public/images/project/namafile.png`
2. Edit di `composables/usePortfolio.js`:
```javascript
{
  image: '/images/project/namafile.png',  // ← Path baru
}
```

---

### 3️⃣ Menambah Portfolio Item
**Di**: `composables/usePortfolio.js` → array `portfolioItems`

```javascript
{
  id: 10,                                  // ID baru
  type: 'project',                         // Tipe card
  image: '/images/project/9.png',
  title: 'Project Baru',
  description: 'Deskripsi',
  category: 'web-design',
  client: 'Nama Client',
  colSpan: '',                             // '' = 1 kolom
  rowSpan: '',                             // '' = 1 baris
  bgGradient: 'bg-gray-900',
  aspectRatio: 'aspect-square relative',
  imageEffect: 'opacity-40',
  padding: 'p-6',
  contentLayout: 'flex flex-col justify-end',
  buttonStyle: 'bg-orange-500 text-white'
}
```

---

### 4️⃣ Update Stats
**Di**: `composables/usePortfolio.js` → array `stats`

```javascript
const stats = [
  { value: '200+', label: 'Projek Selesai' },  // ← Edit
  { value: '150+', label: 'Klien Puas' },      // ← Edit
]
```

---

## 🎨 Quick Templates

### Standard Project (1x1)
```javascript
{
  id: 11,
  type: 'project',
  image: '/images/project/10.png',
  title: 'Project Name',
  description: 'Project description',
  category: 'web-design',
  client: 'Client Name',
  colSpan: '',
  rowSpan: '',
  bgGradient: 'bg-gray-900',
  aspectRatio: 'aspect-square relative',
  imageEffect: 'opacity-40',
  padding: 'p-6',
  contentLayout: 'flex flex-col justify-end',
  buttonStyle: 'bg-orange-500 text-white'
}
```

### Featured Hero (2x2)
```javascript
{
  id: 12,
  type: 'hero',
  image: '/images/project/hero.png',
  badge: 'Featured',
  title: 'Big Project Title',
  description: 'Long description here',
  colSpan: 'lg:col-span-2',
  rowSpan: 'lg:row-span-2',
  bgGradient: 'bg-gradient-to-br from-orange-500 to-red-600',
  aspectRatio: 'aspect-square relative',
  imageEffect: 'group-hover:scale-105 transition-transform duration-500 mix-blend-overlay opacity-60',
  padding: 'p-8',
  contentLayout: 'flex flex-col justify-between',
  showPlaceholders: true
}
```

### Wide Feature (2x1)
```javascript
{
  id: 13,
  type: 'feature',
  image: '/images/project/feature.png',
  title: 'Service Title',
  description: 'Service description',
  showButton: true,
  buttonText: 'Learn More',
  colSpan: 'lg:col-span-2',
  rowSpan: '',
  bgGradient: 'bg-gradient-to-br from-gray-900 to-gray-800',
  aspectRatio: 'aspect-[2/1] relative',
  imageEffect: 'opacity-40',
  padding: 'p-8',
  contentLayout: 'flex flex-col justify-center'
}
```

---

## 🎨 Style Options

### Background Gradients
```javascript
'bg-gradient-to-br from-orange-500 to-red-600'    // Orange
'bg-gradient-to-br from-purple-600 to-purple-800' // Purple
'bg-gradient-to-br from-blue-600 to-blue-800'     // Blue
'bg-gradient-to-br from-green-600 to-green-800'   // Green
'bg-gray-900'                                      // Dark
```

### Image Effects
```javascript
'opacity-40'                                       // Light fade
'opacity-60'                                       // Medium fade
'mix-blend-overlay opacity-60'                    // Overlay
'group-hover:scale-105 transition-transform...'   // Zoom on hover
```

### Button Styles
```javascript
'bg-orange-500 text-white'                        // Orange solid
'bg-white/20 backdrop-blur-sm text-white'         // Glass effect
```

### Layout Sizes
```javascript
// 1x1 Square
colSpan: ''
rowSpan: ''

// 2x1 Wide
colSpan: 'lg:col-span-2'
rowSpan: ''

// 2x2 Large
colSpan: 'lg:col-span-2'
rowSpan: 'lg:row-span-2'
```

---

## 📁 File Quick Reference

| Task | File | Line |
|------|------|------|
| Edit content | `composables/usePortfolio.js` | 20-150 |
| Upload images | `public/images/project/` | - |
| Change colors | `config/portfolio.config.ts` | 10-30 |
| API setup | `server/api/portfolio.get.ts` | All |

---

## 🔧 Common Issues & Fixes

### ❌ Gambar tidak muncul
```javascript
// ✅ BENAR
image: '/images/project/1.png'

// ❌ SALAH
image: '/public/images/project/1.png'  // Jangan pakai /public
```

### ❌ Layout berantakan
```javascript
// Pastikan tutup kurung dan koma
{
  id: 1,
  type: 'project',
  // ...
}, // ← Jangan lupa koma
{
  id: 2,
  // ...
}
```

### ❌ Syntax error
```javascript
// Gunakan tanda kutip yang sama
title: 'My Project'      // ✅
title: "My Project"      // ✅
title: 'My Project"      // ❌ Mixed quotes
```

---

## 🎯 Card Types

| Type | Size | Use For |
|------|------|---------|
| `hero` | 2x2 | Featured project |
| `feature` | 2x1 | Services/features |
| `project` | 1x1 | Portfolio items |
| `pricing` | 2x1 | Price packages |
| `about` | 2x1 | Team/company info |
| `info` | 2x1 | General info |

---

## 📊 Properties Cheat Sheet

### Required (Wajib)
```javascript
id          // Number: Unique ID
type        // String: 'hero', 'feature', 'project', etc
title       // String: Card title
```

### Common (Sering dipakai)
```javascript
image       // String: Path gambar
description // String: Deskripsi
category    // String: Kategori
client      // String: Nama klien
colSpan     // String: Lebar grid
rowSpan     // String: Tinggi grid
```

### Optional (Opsional)
```javascript
badge       // String: Label badge
buttonText  // String: Teks button
showButton  // Boolean: Tampilkan button
prices      // Array: Data pricing
tags        // Array: Tags
```

---

## 🚀 Deploy Checklist

- [ ] Update semua placeholder text
- [ ] Upload gambar portfolio asli
- [ ] Test responsive (mobile, tablet, desktop)
- [ ] Optimize images (compress)
- [ ] Update meta tags
- [ ] Test loading speed
- [ ] Check dark mode
- [ ] Clear browser cache

---

## 📞 Quick Links

- [Quick Start](./QUICK_START.md) - Edit konten
- [Summary](./PORTFOLIO_SUMMARY.md) - Overview
- [Full Docs](./PORTFOLIO_README.md) - Lengkap
- [Architecture](./ARCHITECTURE.md) - Diagram

---

## 💡 Pro Tips

### 1. Preview Changes
```bash
# Save file → Auto reload di browser
# No need to restart server
```

### 2. Duplicate Item
```javascript
// Copy paste item yang ada
// Ubah id & content
```

### 3. Reorder Items
```javascript
// Pindahkan object di array
// Yang paling atas = tampil duluan
```

### 4. Hide Item
```javascript
{
  isActive: false  // Tambahkan ini
}
```

### 5. Backup Before Edit
```bash
# Copy usePortfolio.js sebelum edit
cp usePortfolio.js usePortfolio.backup.js
```

---

**Print this page for quick reference!**

Last Updated: December 9, 2025

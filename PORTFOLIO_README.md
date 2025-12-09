# Portfolio Section - Documentation

## 📁 Struktur File

```
components/
  └── StatsSection.vue         # Komponen utama portfolio showcase
composables/
  └── usePortfolio.js          # Data handler untuk portfolio (siap CMS)
public/
  └── images/
      └── project/             # Folder gambar portfolio
          ├── 1.png
          ├── 2.png
          ├── 3.png
          ├── 4.png
          ├── 5.png
          ├── 6.png
          ├── 7.png
          └── 8.png
```

## 🎨 Fitur Portfolio Section

### 1. **Bento Grid Layout**
Layout modern dengan grid yang fleksibel dan responsive:
- Hero cards (2x2 besar)
- Feature cards (2x1 horizontal)
- Project cards (1x1 square)
- Info cards (2x1)
- Pricing cards (2x1)

### 2. **Tipe Card yang Tersedia**

#### a. **Hero Card**
```javascript
{
  type: 'hero',
  colSpan: 'lg:col-span-2',    // Lebar 2 kolom
  rowSpan: 'lg:row-span-2',     // Tinggi 2 baris
  image: '/images/project/1.png',
  badge: 'Badge Text',
  title: 'Main Title',
  description: 'Description text',
  showPlaceholders: true         // Tampilkan kotak placeholder
}
```

#### b. **Feature Card**
```javascript
{
  type: 'feature',
  colSpan: 'lg:col-span-2',
  image: '/images/project/2.png',
  title: 'Feature Title',
  description: 'Feature description',
  showButton: true,
  buttonText: 'Button Label'
}
```

#### c. **Project Card**
```javascript
{
  type: 'project',
  image: '/images/project/4.png',
  title: 'Project Name',
  description: 'Project description',
  category: 'branding',          // Optional: untuk filter
  client: 'Client Name'          // Optional: nama klien
}
```

#### d. **Pricing Card**
```javascript
{
  type: 'pricing',
  colSpan: 'lg:col-span-2',
  badge: 'Pricing',
  title: 'Pricing Title',
  prices: [
    { name: 'Starter', amount: '$1990', featured: false },
    { name: 'Professional', amount: '$2990', featured: true },
    { name: 'Enterprise', amount: '$4990', featured: false }
  ]
}
```

#### e. **About Card**
```javascript
{
  type: 'about',
  colSpan: 'lg:col-span-2',
  image: '/images/project/3.png',
  badge: 'Badge Text',
  badgeColor: 'text-purple-200',
  title: 'About Title',
  subtitle: 'Subtitle',
  description: 'Description'
}
```

#### f. **Info Card**
```javascript
{
  type: 'info',
  colSpan: 'lg:col-span-2',
  badge: 'Info Badge',
  title: 'Info Title',
  description: 'Info description'
}
```

## 🔄 Cara Menggunakan (Frontend Only - Sekarang)

Saat ini data di-manage di file `composables/usePortfolio.js`:

```javascript
// Edit data di usePortfolio.js
const portfolioItems = [
  {
    id: 1,
    type: 'hero',
    image: '/images/project/1.png',
    title: 'Your Title',
    // ... properties lainnya
  }
]
```

## 🚀 Cara Migrasi ke CMS (Nanti)

### Step 1: Buat API Endpoint
Buat file `server/api/portfolio.get.ts`:

```typescript
export default defineEventHandler(async (event) => {
  // Fetch dari database atau CMS
  const data = await $fetch('https://your-cms.com/api/portfolio')
  
  return {
    header: {
      badge: 'Portfolio Kami',
      title: 'Karya yang Berbicara',
      description: '...'
    },
    items: [...portfolioItems],
    stats: [...stats],
    cta: { text: '...', link: '#portfolio' }
  }
})
```

### Step 2: Update Composable
Edit `composables/usePortfolio.js`:

```javascript
export const usePortfolio = async () => {
  // Uncomment ini dan hapus data hardcoded
  const { data: portfolioData } = await useFetch('/api/portfolio')
  
  return {
    header: portfolioData.value?.header || {},
    portfolioItems: portfolioData.value?.items || [],
    stats: portfolioData.value?.stats || [],
    cta: portfolioData.value?.cta || {}
  }
}
```

### Step 3: Update Component
Edit `components/StatsSection.vue`:

```vue
<script setup>
// Tambahkan await
const { header, portfolioItems, stats, cta } = await usePortfolio()
</script>
```

## 📊 Database Schema (Rekomendasi)

```sql
-- Tabel portfolio_items
CREATE TABLE portfolio_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  type VARCHAR(50) NOT NULL,        -- 'hero', 'feature', 'project', dll
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  badge VARCHAR(100),
  col_span VARCHAR(50),
  row_span VARCHAR(50),
  bg_gradient VARCHAR(255),
  button_text VARCHAR(100),
  button_style VARCHAR(255),
  badge_color VARCHAR(100),
  category VARCHAR(100),            -- untuk filter
  client VARCHAR(255),              -- nama klien
  order_index INT DEFAULT 0,        -- untuk sorting
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel pricing (untuk pricing cards)
CREATE TABLE portfolio_pricing (
  id INT PRIMARY KEY AUTO_INCREMENT,
  portfolio_item_id INT,
  name VARCHAR(100),
  amount VARCHAR(50),
  is_featured BOOLEAN DEFAULT false,
  FOREIGN KEY (portfolio_item_id) REFERENCES portfolio_items(id)
);

-- Tabel stats
CREATE TABLE portfolio_stats (
  id INT PRIMARY KEY AUTO_INCREMENT,
  label VARCHAR(100) NOT NULL,
  value VARCHAR(50) NOT NULL,
  order_index INT DEFAULT 0
);
```

## 🎯 Contoh Response API

```json
{
  "header": {
    "badge": "Portfolio Kami",
    "title": "Karya yang Berbicara",
    "description": "Dari startup hingga enterprise..."
  },
  "items": [
    {
      "id": 1,
      "type": "hero",
      "colSpan": "lg:col-span-2",
      "rowSpan": "lg:row-span-2",
      "bgGradient": "bg-gradient-to-br from-orange-500 to-red-600",
      "image": "/images/project/1.png",
      "badge": "Behind the Designs",
      "title": "Shaping Experiences",
      "description": "Product designer focused..."
    }
  ],
  "stats": [
    { "value": "180+", "label": "Projek Selesai" },
    { "value": "140+", "label": "Klien Puas" }
  ],
  "cta": {
    "text": "Lihat 200+ Portfolio Kami",
    "link": "#portfolio"
  }
}
```

## 🎨 Styling Properties

### Grid Layout
- `colSpan`: `''` (1 col), `'lg:col-span-2'` (2 cols), `'lg:col-span-3'` (3 cols), `'lg:col-span-4'` (4 cols)
- `rowSpan`: `''` (1 row), `'lg:row-span-2'` (2 rows)

### Background Gradients (pilihan)
- `'bg-gradient-to-br from-orange-500 to-red-600'`
- `'bg-gradient-to-br from-gray-900 to-gray-800'`
- `'bg-gradient-to-br from-purple-600 to-purple-800'`
- `'bg-gray-900'`

### Image Effects
- `'group-hover:scale-105 transition-transform duration-500 mix-blend-overlay opacity-60'`
- `'opacity-40'`
- `'mix-blend-overlay opacity-80'`

### Button Styles
- `'bg-orange-500 text-white'`
- `'bg-white/20 backdrop-blur-sm text-white'`

## 📝 Tips & Best Practices

1. **Image Optimization**: Gunakan format WebP untuk performa lebih baik
2. **Lazy Loading**: Gambar akan auto lazy-load oleh Nuxt
3. **Responsive**: Layout sudah responsive dari mobile hingga desktop
4. **Order**: Gunakan `order_index` di database untuk sorting
5. **Caching**: Implementasikan caching di API untuk performa
6. **Image CDN**: Pertimbangkan menggunakan CDN untuk gambar

## 🔍 Filter & Search (untuk CMS nanti)

Tambahkan filter berdasarkan:
- Category (`branding`, `packaging`, `fashion`, `art`, dll)
- Client name
- Date range
- Type (`hero`, `feature`, `project`, dll)

```javascript
// Contoh filter
const filteredItems = portfolioItems.filter(item => {
  if (filterCategory && item.category !== filterCategory) return false
  if (searchQuery && !item.title.toLowerCase().includes(searchQuery)) return false
  return true
})
```

## 📞 Support

Jika ada pertanyaan tentang struktur ini, silakan hubungi tim development.

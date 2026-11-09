# Portofolio Muhammad Rizal Mahdi

Portofolio mahasiswa berbasis Next.js App Router, TypeScript, Tailwind CSS, dan shadcn/ui. Konten bertanda `Contoh` atau `TODO` harus diganti dengan data sebenarnya sebelum dipublikasikan.

## Menjalankan proyek

Gunakan Node.js versi yang didukung Next.js dan npm. Dari folder proyek:

```powershell
npm ci
npm run dev
```

Buka `http://localhost:3000`. Untuk pemeriksaan lokal:

```powershell
npm run lint
npm run typecheck
npm test
npm run build
```

## Status konten

- Foto profil menggunakan `Assets/Rizal-profile.jpg`; berkas aslinya tidak diubah.
- Tiga proyek disimpan di `content/projects/projects.json`, dengan tipe di `content/projects/index.ts`. Proyek pertama merupakan contoh fiktif, bukan portofolio yang sudah dikerjakan. Ganti seluruh nilai `Contoh` dan `TODO` dengan data sebenarnya; `jenis` dapat diisi `Kuliah`, `Lomba`, atau `Pribadi`. Slug harus unik dan menggunakan huruf kecil serta tanda hubung. Mengubah slug juga mengubah URL proyek.
- Simpan gambar proyek di `public/images/projects/`, lalu isi `gambar.src` dengan path seperti `/images/projects/nama-proyek.webp` dan `gambar.alt` dengan deskripsi gambar. Tambahkan objek `{ "src": "/images/projects/detail.webp", "alt": "Deskripsi gambar" }` ke array `gambarTambahan` untuk screenshot lain. Placeholder SVG yang ada hanyalah gambar sementara. Isi `alasanTeknologi` dengan alasan pemilihan tools. Kosongkan `demoUrl` atau `repoUrl` dengan `null` bila belum tersedia; tombol akan aktif setelah URL HTTP(S) yang valid diisi.
- Ketiga slug disiapkan saat build melalui `generateStaticParams`; slug lain menampilkan 404. Setelah mengubah data, jalankan ulang build untuk memperbarui halaman statis.
- Bio dan timeline di `content/about.ts`, serta keahlian di `content/skills.ts`, berisi contoh pengisian yang perlu disesuaikan. Status mahasiswa, kampus, jurusan, dan semester berasal dari informasi yang telah diberikan.
- Tautan LinkedIn, GitHub, Instagram, dan email diatur di `content/contact.ts`. Gunakan URL lengkap `https://...` atau `mailto:nama@email.com`; tautan yang belum diisi tidak ditampilkan sebagai tautan aktif.
- Tambahkan CV asli sebagai `public/cv.pdf` sebelum menjalankan `npm run build` atau deploy. Tombol unduh pada navbar dan halaman Kontak akan aktif otomatis saat file tersedia; tanpa file, tombol tetap dinonaktifkan. Jalankan ulang server/build setelah menambahkan file.
- Sitemap, Open Graph, dan pengujian Lighthouse menyeluruh dikerjakan pada fase berikutnya.

## Formulir Kontak Dan Resend

1. Buat akun dan API key di [dashboard Resend](https://resend.com/api-keys). Pilih izin **Sending access**, dan batasi ke domain yang digunakan jika tersedia. Simpan key secara privat.
2. Salin `.env.example` menjadi `.env.local`, lalu isi `RESEND_API_KEY` dengan key tersebut, `CONTACT_EMAIL` dengan alamat penerima, dan `RESEND_FROM_EMAIL` dengan alamat pengirim.
3. Untuk penggunaan publik, tambahkan dan verifikasi domain pengirim di [Resend Domains](https://resend.com/domains) menggunakan catatan DNS yang diberikan. Contoh format pengirim: `portfolio@domain-anda.com`. Domain pada `RESEND_FROM_EMAIL` harus sesuai dengan domain yang sudah diverifikasi; alamat penerima boleh berbeda.
4. Untuk pengujian awal tanpa domain terverifikasi, `RESEND_FROM_EMAIL=onboarding@resend.dev` hanya dapat mengirim ke alamat email akun Resend Anda. Atur `CONTACT_EMAIL` ke alamat akun tersebut. Mode ini bukan solusi pengiriman publik.
5. Jalankan ulang server setelah mengubah `.env.local`. Di Vercel, tambahkan ketiga variabel yang sama pada pengaturan Environment Variables dan deploy ulang. Jangan commit `.env.local` atau API key.

Form memvalidasi nama, email, dan pesan di browser dan server, serta menggunakan honeypot dan batas ukuran permintaan. Honeypot bukan pembatasan frekuensi: untuk trafik publik yang lebih tinggi, tambahkan rate limiting atau Turnstile. Keberhasilan respons berarti Resend menerima permintaan, bukan jaminan pesan masuk ke inbox. Lakukan pengiriman nyata dan periksa inbox/spam serta dashboard Resend setelah konfigurasi. Jika pengiriman gagal, periksa domain, key, alamat pengirim, penerima, dan log server tanpa membagikan key.

Referensi: [membuat API key](https://resend.com/docs/create-an-api-key), [verifikasi domain](https://resend.com/docs/add-a-domain), dan [batas alamat uji](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain).

## Aksen React Bits

Hero menggunakan [Shiny Text](https://reactbits.dev/text-animations/shiny-text) varian TypeScript + Tailwind sebagai aksen dekoratif sekali saat masuk viewport. Komponen telah dipasang di `components/reactbits/ShinyText.tsx` dengan perintah resmi:

```powershell
npx shadcn@latest add @react-bits/ShinyText-TS-TW --path components/reactbits --yes
```

Tidak perlu menjalankan perintah tersebut lagi untuk menggunakan proyek ini. Aksen dimuat dinamis, menggunakan teks statis saat reduced motion aktif atau JavaScript tidak tersedia, dan tidak membungkus teks utama hero. Sumber komponen disesuaikan agar pembaruan ref mengikuti aturan React saat ini.

## Tema dan desain

Token warna light/dark didefinisikan di `app/globals.css`. Tema mengikuti pengaturan sistem secara default dan pilihan pengguna disimpan oleh `next-themes`. Label navigasi terpusat di `lib/site.ts` agar mudah disesuaikan ketika dukungan bahasa ditambahkan.

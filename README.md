# Portofolio Muhammad Rizal Mahdi

Portofolio pribadi Muhammad Rizal Mahdi, mahasiswa Sistem Informasi Universitas Gunadarma, dengan minat pada Web Development, UI/UX, dan Data. Dibangun menggunakan Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, dan React Bits. Target hosting: Vercel Hobby untuk penggunaan pribadi non-komersial.

> **Sebelum peluncuran:** ganti semua konten `Contoh`/`TODO`, isi tautan sosial, atur Resend dan `SITE_URL`, lalu tinjau CV serta isi studi kasus. Saat ini data berisi dua proyek, sehingga daftar hanya menampilkan dua kartu; tambahkan proyek ketiga yang nyata jika ingin memenuhi target PRD tepat tiga proyek. Jangan menerbitkan contoh sebagai pengalaman atau hasil nyata.

## Menjalankan proyek

Gunakan Node.js 20.9 atau lebih baru dan npm. Dari folder repository:

```powershell
npm ci
npm run dev
```

Buka `http://localhost:3000`. Perintah pemeriksaan lokal:

```powershell
npm run lint
npm run typecheck
npm test
npm run build
```

## Environment Variables

Salin `.env.example` sebagai `.env.local` untuk development. Jangan commit `.env.local`, API key, atau rahasia lainnya.

| Variable | Wajib | Isi |
| --- | --- | --- |
| `RESEND_API_KEY` | Ya, untuk mengirim email | API key Resend dengan akses pengiriman. Simpan sebagai secret server-side. |
| `CONTACT_EMAIL` | Ya, untuk mengirim email | Alamat penerima pesan formulir. |
| `RESEND_FROM_EMAIL` | Ya, untuk mengirim email | Alamat `From` dari domain yang sudah diverifikasi di Resend. |
| `SITE_URL` | Wajib di production; opsional lokal | Origin kanonis, misalnya `https://nama-project.vercel.app` atau domain sendiri. Gunakan URL HTTPS di production. Lokal memakai `http://localhost:3000` jika variabel tidak diisi. Vercel memakai `VERCEL_PROJECT_PRODUCTION_URL` jika system environment variables diaktifkan; jika tidak tersedia, build production meminta `SITE_URL` eksplisit agar sitemap tidak memakai localhost. |

Lihat bagian [Formulir Kontak dan Resend](#formulir-kontak-dan-resend) untuk API key, domain pengirim, dan mode uji.

## Status konten

- Foto profil menggunakan `Assets/Rizal-profile.jpg`; berkas aslinya tidak diubah.
- Data proyek bertipe berada di `content/projects/index.ts` dan kontennya di `content/projects/projects.json`. Saat ini dua studi kasus tersedia: Bloxshop dan proyek pengelolaan data Bilik Qurban. Kedua gambar utama dan screenshot disimpan di `public/images/projects/`. Periksa ketepatan ejaan, isi, status demo/repository, dan izin publikasi sebelum deploy.
- Jika menambah proyek, isi semua bidang di JSON dan tambahkan gambar ber-alt text ke `public/images/projects/`. Slug harus unik; mengubah slug juga mengubah URL. Halaman detail statis dibuat lewat `generateStaticParams`, sedangkan slug lain menghasilkan 404.
- Bio dan timeline di `content/about.ts`, serta keahlian di `content/skills.ts`, berisi contoh pengisian yang perlu disesuaikan. Status mahasiswa, kampus, jurusan, dan semester berasal dari informasi yang telah diberikan.
- Tautan LinkedIn, GitHub, Instagram, dan email diatur di `content/contact.ts`. Gunakan URL lengkap `https://...` atau `mailto:nama@email.com`; tautan yang belum diisi tidak ditampilkan sebagai tautan aktif.
- CV tersedia di `public/Muhammad-Rizal-Mahdi-CV.pdf`. Navbar dan halaman Kontak mengaktifkan tombol unduh berdasarkan keberadaan file ini.
- Metadata dasar, Open Graph/Twitter image dinamis, `sitemap.xml`, dan `robots.txt` sudah disediakan melalui Metadata API Next.js. Untuk custom domain, set `SITE_URL` ke origin kanonis itu pada semua environment yang relevan lalu redeploy.

## Formulir Kontak Dan Resend

1. Buat akun dan API key di [dashboard Resend](https://resend.com/api-keys). Pilih izin **Sending access**, dan batasi ke domain yang digunakan jika tersedia. Simpan key secara privat.
2. Salin `.env.example` menjadi `.env.local`, lalu isi `RESEND_API_KEY` dengan key tersebut, `CONTACT_EMAIL` dengan alamat penerima, dan `RESEND_FROM_EMAIL` dengan alamat pengirim.
3. Untuk penggunaan publik, tambahkan dan verifikasi domain pengirim di [Resend Domains](https://resend.com/domains) menggunakan catatan DNS yang diberikan. Contoh format pengirim: `portfolio@domain-anda.com`. Domain pada `RESEND_FROM_EMAIL` harus sesuai dengan domain yang sudah diverifikasi; alamat penerima boleh berbeda.
4. Untuk pengujian awal tanpa domain terverifikasi, `RESEND_FROM_EMAIL=onboarding@resend.dev` hanya dapat mengirim ke alamat email akun Resend Anda. Atur `CONTACT_EMAIL` ke alamat akun tersebut. Mode ini bukan solusi pengiriman publik.
5. Jalankan ulang server setelah mengubah `.env.local`. Di Vercel, tambahkan tiga variabel Resend pada pengaturan Environment Variables; atur `SITE_URL` terpisah sesuai origin deployment. Deploy ulang setelah perubahan. Jangan commit `.env.local` atau API key.

Form memvalidasi nama, email, dan pesan di browser dan server, serta menggunakan honeypot dan batas ukuran permintaan. Honeypot bukan pembatasan frekuensi: untuk trafik publik yang lebih tinggi, tambahkan rate limiting atau Turnstile. Keberhasilan respons berarti Resend menerima permintaan, bukan jaminan pesan masuk ke inbox. Lakukan pengiriman nyata dan periksa inbox/spam serta dashboard Resend setelah konfigurasi. Jika pengiriman gagal, periksa domain, key, alamat pengirim, penerima, dan log server tanpa membagikan key.

Referensi: [membuat API key](https://resend.com/docs/create-an-api-key), [verifikasi domain](https://resend.com/docs/add-a-domain), dan [batas alamat uji](https://resend.com/docs/knowledge-base/403-error-resend-dev-domain).

## Deploy Ke Vercel

### Siapkan repository GitHub

1. Pastikan konten contoh sudah diganti atau ditinjau, dan `npm run lint`, `npm run typecheck`, `npm test`, serta `npm run build` berhasil.
2. Commit lalu push repository ke GitHub. Jangan masukkan `.env.local`; `.gitignore` sudah mengecualikan berkas `.env*` kecuali `.env.example`.

### Import dan deploy

1. Masuk ke [Vercel Dashboard](https://vercel.com/dashboard), pilih **Add New → Project**, lalu import repository GitHub ini.
2. Pastikan framework terdeteksi sebagai **Next.js**. Untuk konfigurasi standar, biarkan Build Command (`npm run build`), Output Directory, dan Install Command pada nilai otomatis.
3. Sebelum deployment production, buka **Project → Settings → Environment Variables**. Tambahkan `RESEND_API_KEY`, `CONTACT_EMAIL`, `RESEND_FROM_EMAIL`, dan `SITE_URL`. Tandai secret sebagai sensitif bila opsi tersedia. Pilih environment yang sesuai: Production, Preview, dan/atau Development. API key yang sama tidak harus dipakai di semua environment; gunakan key terbatas atau pisahkan key Preview/Production jika diinginkan.
4. Untuk domain Vercel sementara, set `SITE_URL` ke origin production yang akan digunakan, misalnya `https://nama-project.vercel.app`. Alternatifnya, aktifkan system environment variables Vercel agar aplikasi bisa memakai `VERCEL_PROJECT_PRODUCTION_URL`.
5. Pilih **Deploy**. Vercel akan membangun aplikasi; tunggu deployment berstatus **Ready**, lalu buka URL production dan lakukan checklist di bawah.
6. Setelah mengubah environment variables, pilih **Redeploy** agar deployment membaca konfigurasi terbaru. Push ke branch Production yang dipilih pada Project Settings akan memulai deployment production berikutnya; pull request/branch lain mendapat Preview Deployment.

### Hubungkan domain sendiri (opsional)

1. Di **Project → Settings → Domains**, tambahkan domain atau subdomain.
2. Ikuti instruksi DNS Vercel untuk penyedia domain Anda. Verifikasi record dan tunggu sampai domain menunjukkan konfigurasi valid/HTTPS aktif.
3. Pilih domain utama kanonis, misalnya `https://portofolio.domainanda.id`, lalu perbarui `SITE_URL` pada Production (dan Preview bila sesuai). Jalankan redeploy.
4. Pastikan domain alternatif mengalihkan ke domain kanonis dan `https://domainanda/sitemap.xml` serta OG image menggunakan domain kanonis.

### Batas Paket Vercel Hobby

Paket Hobby ditujukan untuk penggunaan personal dan non-komersial. Untuk portofolio ini, hindari iklan, pembayaran, penjualan layanan/produk, atau penggunaan sebagai situs klien komersial. Periksa [ketentuan Hobby dan batas penggunaan terbaru](https://vercel.com/docs/plans/hobby) sebelum peluncuran; batas paket dapat berubah. Jika kebutuhan menjadi komersial, tinjau paket dan ketentuan yang sesuai.

## Checklist Pasca-Deploy

- [ ] Buka halaman utama, Tentang, Proyek, setiap studi kasus, dan Kontak pada URL production. Periksa juga tampilan mobile, menu navigasi, tema terang/gelap, link sosial, CV, dan gambar.
- [ ] Kirim formulir kontak dari production dengan email yang dapat Anda akses. Pastikan UI menampilkan sukses, pesan tiba di inbox atau spam, tombol `reply-to` mengarah ke alamat pengirim, dan dashboard Resend menerima email. Uji juga konfigurasi sender/domain, bukan hanya respons simulasi lokal.
- [ ] Buka `/sitemap.xml` dan `/robots.txt`; pastikan daftar URL hanya berisi host/domain kanonis production dan proyek yang benar-benar tersedia.
- [ ] Periksa share preview menggunakan [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) dan pratinjau WhatsApp. OG scraper dapat menyimpan cache; bila gambar lama tampil, minta inspector melakukan scrape ulang atau gunakan URL preview yang belum pernah dibagikan.
- [ ] Uji OG image langsung di `https://domain/opengraph-image` dan Twitter image di `https://domain/twitter-image`. Pastikan keduanya merespons HTTP 200 dan nama/judul terbaca jelas.
- [ ] Jalankan Lighthouse pada halaman utama dan halaman penting dalam production atau Preview Deployment untuk Performance, Accessibility, Best Practices, dan SEO. Periksa mobile serta desktop; skor dipengaruhi kondisi pengujian dan konten final.
- [ ] Buat property domain/URL-prefix di [Google Search Console](https://search.google.com/search-console), selesaikan verifikasi kepemilikan, lalu submit `https://domainanda/sitemap.xml` di menu **Sitemaps**. Minta indexing URL utama bila diperlukan dan pantau laporan Pages.
- [ ] Pantau log function `/api/contact`, status email di Resend, serta penggunaan Vercel setelah publikasi.

## Aksen React Bits

Hero menggunakan [Shiny Text](https://reactbits.dev/text-animations/shiny-text) varian TypeScript + Tailwind sebagai aksen dekoratif sekali saat masuk viewport. Komponen telah dipasang di `components/reactbits/ShinyText.tsx` dengan perintah resmi:

```powershell
npx shadcn@latest add @react-bits/ShinyText-TS-TW --path components/reactbits --yes
```

Tidak perlu menjalankan perintah tersebut lagi untuk menggunakan proyek ini. Aksen dimuat dinamis, menggunakan teks statis saat reduced motion aktif atau JavaScript tidak tersedia, dan tidak membungkus teks utama hero. Sumber komponen disesuaikan agar pembaruan ref mengikuti aturan React saat ini.

## Tema dan desain

Token warna light/dark didefinisikan di `app/globals.css`. Tema mengikuti pengaturan sistem secara default dan pilihan pengguna disimpan oleh `next-themes`. Label navigasi terpusat di `lib/site.ts` agar mudah disesuaikan ketika dukungan bahasa ditambahkan.

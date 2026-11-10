# PRD — Website Portofolio Mahasiswa

|             |                      |
| ----------- | -------------------- |
| **Pemilik** | Muhammad Rizal Mahdi |
| **Versi**   | 2.0                  |
| **Tanggal** | 9 November 2026      |
| **Status**  | Draft                |

> Bagian bertanda `[...]` adalah placeholder yang perlu diisi sesuai data Anda.

---

## 1. Ringkasan

Website portofolio pribadi untuk menampilkan profil, keahlian, dan **3 proyek unggulan** milik Muhammad Rizal Mahdi, mahasiswa Sistem Informasi di Universitas Gunadarma, dengan fokus pada bidang Web Development, UI/UX . Website digunakan untuk melamar magang, beasiswa, lomba, dan membangun jejak profesional sejak dini.

## 2. Latar Belakang & Masalah

- Karya tersebar di GitHub, tugas kuliah, dan dokumen CV sehingga sulit dinilai secara utuh.
- Pengalaman kerja masih terbatas, sehingga proyek dan pembelajaran perlu ditampilkan dengan jelas.
- Rekruter magang biasanya hanya meluangkan waktu singkat, sehingga informasi kunci harus cepat ditemukan.

## 3. Tujuan

| #   | Tujuan                                                 | Indikator Keberhasilan                             |
| --- | ------------------------------------------------------ | -------------------------------------------------- |
| 1   | Menampilkan 3 proyek terbaik secara profesional        | 3 studi kasus lengkap terpublikasi                 |
| 2   | Mendukung lamaran magang/beasiswa/lomba                | Link website tercantum di CV, LinkedIn, dan GitHub |
| 3   | Menunjukkan kemampuan teknis lewat website itu sendiri | Skor Lighthouse ≥ 90, tampilan responsif dan rapi  |
| 4   | Mudah diperbarui                                       | Menambah/mengubah proyek dalam < 15 menit          |

### Bukan Tujuan (Non-Goals)

- Bukan platform jual-beli atau penerima pembayaran.
- Tidak ada iklan atau konten komersial (menjaga kepatuhan paket gratis Vercel Hobby).
- Tidak ada login/registrasi pengunjung.
- Tidak ada blog pada versi awal.

## 4. Target Pengguna

| Persona                                           | Kebutuhan                         | Yang Dicari di Website                     |
| ------------------------------------------------- | --------------------------------- | ------------------------------------------ |
| **Rekruter magang / HRD**                         | Menilai kandidat dengan cepat     | Skill, proyek, CV, kontak                  |
| **Dosen / pembimbing / panitia beasiswa & lomba** | Menilai kemampuan dan kesungguhan | Proyek akademik, organisasi, pencapaian    |
| **Sesama mahasiswa / komunitas**                  | Kolaborasi, referensi             | Detail teknis proyek, GitHub, sosial media |

## 5. Ruang Lingkup

### Dalam Lingkup (MVP)

Beranda, Tentang, Proyek (**3 proyek** + halaman detail), Keahlian, Pengalaman & Organisasi, Kontak, unduh CV, dark/light mode, animasi aksen dengan React Bits, SEO dasar, deployment di Vercel.

### Di Luar Lingkup (Fase 2)

Blog/catatan belajar, multi-bahasa (ID/EN), CMS, testimoni, proyek tambahan, animasi 3D/WebGL yang kompleks.

## 6. Kebutuhan Fungsional

### 6.1 Daftar Fitur

| ID   | Fitur                   | Deskripsi                                                                                | Prioritas   |
| ---- | ----------------------- | ---------------------------------------------------------------------------------------- | ----------- |
| F-01 | Hero Section            | Nama, bidang/status mahasiswa, tagline singkat, CTA ("Lihat Proyek", "Hubungi Saya")     | Must        |
| F-02 | Tentang Saya            | Foto, bio singkat, kampus/jurusan, minat                                                 | Must        |
| F-03 | Galeri 3 Proyek         | Tiga kartu proyek: thumbnail, judul, deskripsi singkat, tag teknologi                    | Must        |
| F-04 | Detail Proyek           | Latar belakang, peran, tools, proses, hasil, pembelajaran, tautan demo/repo              | Must        |
| F-05 | Keahlian                | Skill dikelompokkan per kategori (bahasa, framework, tools, soft skill)                  | Must        |
| F-06 | Pengalaman & Organisasi | Timeline organisasi, kepanitiaan, asisten lab, lomba, sertifikasi, pendidikan            | Should      |
| F-07 | Form Kontak             | Nama, email, pesan + validasi dan proteksi spam                                          | Must        |
| F-08 | Tautan Sosial           | LinkedIn, GitHub, Instagram, email                                                       | Must        |
| F-09 | Unduh CV                | Tombol unduh file PDF                                                                    | Must        |
| F-10 | Dark Mode               | Toggle tema via `next-themes` dan token shadcn/ui                                        | Should      |
| F-11 | Animasi & Efek Visual   | Komponen React Bits pada hero dan aksen kartu (dengan fallback `prefers-reduced-motion`) | Should      |
| F-12 | SEO & Share Preview     | Meta tags, Open Graph image, sitemap                                                     | Must        |
| F-13 | Filter Proyek           | Tidak diperlukan untuk 3 proyek                                                          | Won't       |
| F-14 | Blog                    | Catatan belajar                                                                          | Won't (MVP) |

### 6.2 Tiga Proyek Unggulan

Isi tabel ini terlebih dahulu sebelum mulai development, karena menentukan isi halaman Proyek.

| #   | Judul Proyek | Jenis (Kuliah / Lomba / Pribadi) | Peran Saya | Teknologi | Hasil/Dampak | Link (Demo / Repo) |
| --- | ------------ | -------------------------------- | ---------- | --------- | ------------ | ------------------ |
| 1   | [Judul]      | [Jenis]                          | [Peran]    | [Stack]   | [Hasil]      | [URL]              |
| 2   | [Judul]      | [Jenis]                          | [Peran]    | [Stack]   | [Hasil]      | [URL]              |
| 3   | [Judul]      | [Jenis]                          | [Peran]    | [Stack]   | [Hasil]      | [URL]              |

**Struktur studi kasus per proyek:**

1. Ringkasan (1–2 kalimat) dan screenshot utama
2. Masalah yang ingin diselesaikan
3. Peran dan kontribusi saya (jelaskan bagian yang Anda kerjakan sendiri jika proyek berkelompok)
4. Teknologi dan alasan memilihnya
5. Proses dan tantangan utama
6. Hasil dan apa yang saya pelajari
7. Tautan demo dan repository

**Saran pemilihan:** satu proyek paling kompleks, satu proyek paling rapi secara tampilan, dan satu proyek yang paling relevan dengan posisi magang yang dituju.

### 6.3 User Stories

- Sebagai **rekruter**, saya ingin melihat skill dan proyek dalam < 1 menit agar bisa memutuskan lanjut ke tahap berikutnya.
- Sebagai **panitia beasiswa/lomba**, saya ingin melihat pencapaian dan keterlibatan organisasi.
- Sebagai **pengunjung**, saya ingin mengirim pesan langsung dari website.
- Sebagai **pengunjung mobile**, saya ingin website nyaman dibaca di layar kecil.
- Sebagai **pemilik**, saya ingin memperbarui proyek tanpa mengubah banyak kode.

### 6.4 Acceptance Criteria (Contoh)

**F-03 Galeri 3 Proyek**

- Tepat 3 kartu proyek tampil; 1 kolom di mobile, 3 kolom di desktop.
- Setiap kartu menampilkan thumbnail, judul, deskripsi singkat, dan tag teknologi.
- Klik kartu membuka halaman detail `/proyek/[slug]`.

**F-07 Form Kontak**

- Nama, email, dan pesan wajib diisi; format email divalidasi.
- Muncul notifikasi sukses atau error yang jelas setelah dikirim.
- Ada proteksi spam (honeypot atau Cloudflare Turnstile).
- Pesan diteruskan ke email [alamat email Anda].

## 7. Arsitektur Informasi

```
Beranda (/)
├── Hero
├── Tentang singkat
├── 3 Proyek Unggulan
├── Keahlian (ringkas)
└── CTA Kontak

Tentang (/tentang)
├── Bio
├── Keahlian
└── Pengalaman, Organisasi & Pendidikan

Proyek (/proyek)
└── Detail Proyek (/proyek/[slug]) x3

Kontak (/kontak)
└── Form + Tautan Sosial
```

**Navigasi utama:** Beranda · Tentang · Proyek · Kontak (+ tombol "Unduh CV")

## 8. Kebutuhan Konten

| Konten                                                     | Status |
| ---------------------------------------------------------- | ------ |
| Foto profil (berkualitas tinggi, latar bersih)             | ☐      |
| Bio singkat (± 100–150 kata)                               | ☐      |
| 3 studi kasus proyek (teks + 2–4 screenshot masing-masing) | ☐      |
| Daftar skill & tools                                       | ☐      |
| Riwayat organisasi, kepanitiaan, lomba, sertifikasi        | ☐      |
| File CV (PDF)                                              | ☐      |
| Logo/inisial & favicon                                     | ☐      |
| OG image untuk preview link                                | ☐      |

## 9. Kebutuhan Desain

- **Gaya:** [minimalis / modern / kreatif]
- **Palet warna:** [warna utama, sekunder, aksen], kontras teks memenuhi WCAG AA
- **Tipografi:** maksimal 2 font (heading + body), mis. [Inter / Poppins / Geist]
- **Layout:** mobile-first, breakpoint 640 / 768 / 1024 / 1280 px
- **Komponen utama:** navbar sticky + menu mobile (Sheet), kartu proyek (Card), tag skill (Badge), tombol CTA (Button), form kontak, footer
- **Sistem desain:** token warna dan radius lewat CSS variables shadcn/ui + Tailwind, mendukung light/dark
- **Animasi:** React Bits sebagai aksen (hero, teks, background), singkat dan tidak mengganggu keterbacaan
- **Referensi inspirasi:** [2–3 tautan portofolio yang disukai]
- **Alur desain:** wireframe sederhana → mockup di Figma (opsional) → langsung bangun dengan komponen shadcn/ui

## 10. Kebutuhan Teknis

### Tech Stack

| Layer          | Pilihan                                                         | Peran                                                                            |
| -------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Library UI     | **React**                                                       | Dasar komponen antarmuka                                                         |
| Framework      | **Next.js** (App Router, TypeScript)                            | Routing, SSG, SEO (metadata API), `next/image`                                   |
| Styling        | **Tailwind CSS**                                                | Utility-first styling dan design token                                           |
| Komponen UI    | **shadcn/ui**                                                   | Button, Card, Badge, Navigation Menu, Sheet, Form, Input, Textarea, Sonner/Toast |
| Animasi & Efek | **React Bits**                                                  | Komponen animasi siap pakai untuk hero dan aksen visual                          |
| Tema           | `next-themes`                                                   | Dark/light mode                                                                  |
| Ikon           | `lucide-react`                                                  | Ikon bawaan ekosistem shadcn/ui                                                  |
| Konten Proyek  | File MDX/JSON di repo (`/content/projects`)                     | Mudah diperbarui tanpa backend                                                   |
| Form Kontak    | Route Handler / Server Action + Resend (atau EmailJS/Formspree) | Mengirim pesan ke email tanpa server terpisah                                    |
| Validasi Form  | `react-hook-form` + `zod`                                       | Terintegrasi dengan Form shadcn/ui                                               |
| Hosting        | **Vercel** (Hobby)                                              | CI/CD otomatis dari GitHub                                                       |
| Versi Kontrol  | GitHub                                                          | Riwayat perubahan dan sumber deployment                                          |

### Struktur Proyek (Rencana)

```
/app
  /(site)
    page.tsx                # Beranda
    /tentang/page.tsx
    /proyek/page.tsx
    /proyek/[slug]/page.tsx
    /kontak/page.tsx
  /api/contact/route.ts     # Handler form kontak
  layout.tsx
/components
  /ui                       # shadcn/ui
  /reactbits                # Komponen React Bits yang disalin ke proyek
  /sections                 # Hero, ProjectGrid, SkillList, Timeline, dll.
/content
  /projects                 # 3 file proyek (MDX/JSON)
/lib                        # Utilitas (cn, metadata, validasi zod)
/public                     # Gambar, CV (PDF), favicon, OG image
```

### Panduan shadcn/ui & React Bits

- shadcn/ui dipakai untuk semua elemen fungsional agar aksesibilitas terjaga.
- React Bits dipakai secukupnya: maksimal 2–3 efek di Beranda.
- Pilih varian **Tailwind + TypeScript** dari React Bits.
- Efek berat dimuat lazy lewat `next/dynamic` dan tidak memblokir konten utama.
- Komponen interaktif memakai `"use client"` sesuai kebutuhan App Router.
- Semua animasi menghormati `prefers-reduced-motion`.
- Teks penting (nama, bidang, CTA) tetap terbaca mesin pencari dan screen reader.

## 11. Deployment & CI/CD

**Platform:** Vercel, paket Hobby (gratis).

**Alur:**

1. Push proyek ke repository GitHub.
2. Di vercel.com, pilih **Add New → Project** dan import repo. Framework Next.js terdeteksi otomatis.
3. Isi _Environment Variables_ (mis. `RESEND_API_KEY`, `CONTACT_EMAIL`).
4. Klik **Deploy**. Setiap `git push` ke branch `main` otomatis dideploy; setiap pull request mendapat preview URL.
5. (Opsional) Hubungkan domain sendiri di **Settings → Domains**.

**Domain:** mulai dengan `[namaanda].vercel.app`. Cek apakah GitHub Student Developer Pack masih menyediakan domain gratis (penawaran dapat berubah, verifikasi di situs resminya).

**Catatan kepatuhan paket Hobby:**

- Hobby hanya untuk penggunaan personal non-komersial. Portofolio mahasiswa umumnya sesuai.
- Hindari memasang iklan, menerima pembayaran, atau menjadikannya situs klien berbayar di akun yang sama.
- Pantau penggunaan di dashboard Usage Vercel. Batas gratis jarang tercapai oleh portofolio pribadi.

**Keamanan:** API key hanya disimpan di Environment Variables Vercel, tidak pernah di-commit ke repository.

## 12. Kebutuhan Non-Fungsional

| Aspek             | Target                                                                                        |
| ----------------- | --------------------------------------------------------------------------------------------- |
| **Performa**      | Lighthouse ≥ 90 di semua kategori; LCP < 2,5 detik; efek React Bits tidak memperburuk LCP/CLS |
| **Responsif**     | Nyaman di mobile, tablet, desktop; browser modern (Chrome, Safari, Firefox, Edge)             |
| **SEO**           | Meta title/description per halaman, Open Graph image, sitemap.xml, robots.txt, URL bersih     |
| **Aksesibilitas** | HTML semantik, alt text gambar, navigasi keyboard, kontras warna memadai                      |
| **Keamanan**      | HTTPS (otomatis di Vercel), proteksi spam form, tidak menyimpan data sensitif                 |
| **Pemeliharaan**  | Komponen modular, konten terpisah dari kode                                                   |
| **Gambar**        | Format WebP/AVIF, `next/image`, ukuran sesuai                                                 |

## 13. Analitik & Metrik Keberhasilan

**Tools:** Vercel Analytics atau Plausible/GA4 (pilih satu).

| Metrik                        | Target (3 bulan pertama)                    |
| ----------------------------- | ------------------------------------------- |
| Pengunjung unik               | [mis. 100–300/bulan]                        |
| Rata-rata durasi sesi         | > 1 menit                                   |
| Klik tombol Unduh CV / Kontak | [mis. 10/bulan]                             |
| Link website tercantum di     | CV, LinkedIn, GitHub, profil lomba/beasiswa |

## 14. Timeline & Milestone

| Fase           | Aktivitas                                                                                    | Estimasi      |
| -------------- | -------------------------------------------------------------------------------------------- | ------------- |
| 1. Perencanaan | Finalisasi PRD, pilih 3 proyek, tulis draf studi kasus                                       | Minggu 1      |
| 2. Desain      | Wireframe, pilih palet warna dan font                                                        | Minggu 2      |
| 3. Development | Setup Next.js + Tailwind + shadcn/ui, bangun halaman, tambah efek React Bits, integrasi form | Minggu 3–4    |
| 4. Pengujian   | Cek responsif, cross-browser, Lighthouse, perbaiki bug                                       | Minggu 5      |
| 5. Peluncuran  | Deploy ke Vercel, (opsional) domain, cantumkan link di CV/LinkedIn                           | Minggu 5      |
| 6. Iterasi     | Evaluasi analitik, tambah konten atau fitur fase 2                                           | Berkelanjutan |

> Jadwal disesuaikan dengan jadwal kuliah. Jika sedang padat ujian, jadikan Minggu 3–4 lebih panjang dan tunda animasi (F-11) hingga akhir.

## 15. Risiko & Mitigasi

| Risiko                                                  | Dampak | Mitigasi                                                                            |
| ------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| Konten 3 proyek belum siap                              | Tinggi | Tulis studi kasus lebih dulu sebelum coding; mulai dari proyek yang paling matang   |
| Proyek kelompok, sulit membuktikan kontribusi pribadi   | Sedang | Jelaskan peran dan bagian yang dikerjakan secara spesifik                           |
| Jadwal kuliah padat, proyek molor                       | Sedang | Patuhi prioritas MVP; fitur Should ditunda                                          |
| Terlalu banyak animasi React Bits membuat halaman berat | Sedang | Batasi 2–3 efek, `next/dynamic`, uji Lighthouse tiap penambahan                     |
| Tampilan terasa "template" karena komponen bawaan       | Rendah | Kustomisasi warna, tipografi, dan kombinasi efek                                    |
| Form kontak diserbu spam                                | Rendah | Honeypot/Turnstile + validasi server                                                |
| Melanggar ketentuan Hobby (komersial)                   | Rendah | Tidak ada iklan/pembayaran; pindah ke Netlify/Cloudflare Pages bila kelak komersial |
| Website tidak diperbarui                                | Sedang | Jadwalkan review konten tiap semester                                               |

## 16. Pertanyaan Terbuka

- [ ] Bidang utama yang ingin ditonjolkan (web, mobile, data, UI/UX)?
- [ ] Judul dan jenis ketiga proyek yang dipilih?
- [ ] Apakah perlu versi bahasa Inggris untuk melamar magang di luar negeri/perusahaan global?
- [ ] Akan memakai domain sendiri atau cukup `vercel.app`?
- [ ] Apakah ada proyek kelompok? Siapa saja anggotanya dan apa peran Anda?

## 17. Definisi Selesai (Definition of Done)

- [ ] Seluruh fitur **Must** berfungsi sesuai acceptance criteria
- [ ] Tepat 3 proyek terpublikasi dengan studi kasus lengkap
- [ ] Tampilan teruji di mobile, tablet, dan desktop
- [ ] Lighthouse ≥ 90 pada semua kategori (dengan animasi aktif)
- [ ] Animasi aman untuk pengguna `prefers-reduced-motion`
- [ ] Dark/light mode konsisten di semua halaman
- [ ] Konten final bebas typo
- [ ] Form kontak teruji dan email diterima
- [ ] Deploy di Vercel berhasil dengan HTTPS aktif
- [ ] Link website sudah dicantumkan di CV, LinkedIn, dan GitHub

---

_Dokumen ini bersifat hidup (living document) dan diperbarui seiring perkembangan proyek._

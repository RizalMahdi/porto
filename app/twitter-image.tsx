import { ImageResponse } from "next/og";
import { OgImage } from "@/components/og-image";

export const alt = "Portofolio Muhammad Rizal Mahdi, mahasiswa Sistem Informasi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<OgImage label="Portofolio Mahasiswa" />, size);
}

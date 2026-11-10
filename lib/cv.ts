import "server-only";
import { existsSync } from "node:fs";
import path from "node:path";

export function isCvAvailable() {
  return existsSync(
    path.join(process.cwd(), "public", "Muhammad-Rizal-Mahdi-CV.pdf"),
  );
}

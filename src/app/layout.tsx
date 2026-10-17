import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sangam — Proof, not promises",
  description: "A verified network for talent, ideas and opportunities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
